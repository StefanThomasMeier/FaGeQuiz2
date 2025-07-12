import questions from './questions.js';
import { createBattle, watchPlayerCount } from './battleStore.js';

let quizQuestions = [];
let currentIndex = 0;
let score = 0;
let userAnswers = [];
let battleWatcher = null;
let currentBattleId = null;

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

export function startQuiz() {
  document.querySelector('.start').style.display = 'none';
  document.getElementById('battle').style.display = 'none';
  document.getElementById('results').style.display = 'none';
  if (battleWatcher) {
    clearInterval(battleWatcher);
    battleWatcher = null;
  }
  quizQuestions = shuffle([...questions]).slice(0, 10);
  currentIndex = 0;
  score = 0;
  userAnswers = [];
  showQuestion();
}

function showQuestion() {
  const q = quizQuestions[currentIndex];
  const container = document.getElementById('quiz');
  let html = `<h2>${q.frage}</h2>`;
  q.antworten.forEach((a, i) => {
    html += `<label><input type="radio" name="answer" value="${i}"> ${a}</label><br>`;
  });
  html += `<button id="next">${currentIndex === quizQuestions.length - 1 ? 'Auswerten' : 'Weiter'}</button>`;
  container.innerHTML = html;
  container.style.display = 'block';
  document.getElementById('next').addEventListener('click', submitAnswer);
}

function submitAnswer() {
  const selected = document.querySelector('input[name="answer"]:checked');
  if (!selected) {
    alert('Bitte eine Antwort wählen.');
    return;
  }
  const val = parseInt(selected.value, 10);
  userAnswers.push(val);
  if (val === quizQuestions[currentIndex].korrekt) {
    score++;
  }
  currentIndex++;
  if (currentIndex < quizQuestions.length) {
    showQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  const container = document.getElementById('quiz');
  container.style.display = 'none';
  const resultDiv = document.getElementById('results');
  let html = `<h2>Auswertung</h2>`;
  html += `<p>Du hast ${score} von ${quizQuestions.length} Fragen richtig beantwortet.</p>`;
  html += '<ol>';
  quizQuestions.forEach((q, idx) => {
    const userA = userAnswers[idx];
    const correct = userA === q.korrekt;
    html += `<li>${q.frage}<br>` +
      `Deine Antwort: ${q.antworten[userA] || 'Keine'} - ${correct ? 'Richtig' : 'Falsch'}.<br>` +
      `Korrekt: ${q.antworten[q.korrekt]}<br>` +
      `<em>${q.erklaerung}</em></li>`;
  });
  html += '</ol><button onclick="restartQuiz()">Nochmal spielen</button>';
  resultDiv.innerHTML = html;
  resultDiv.style.display = 'block';
}

export function restartQuiz() {
  document.getElementById('results').style.display = 'none';
  document.querySelector('.start').style.display = 'block';
  if (battleWatcher) {
    clearInterval(battleWatcher);
    battleWatcher = null;
  }
}

export function openBattle() {
  document.querySelector('.start').style.display = 'none';
  document.getElementById('quiz').style.display = 'none';
  document.getElementById('results').style.display = 'none';
  const battle = document.getElementById('battle');
  battle.style.display = 'block';
  const session = createBattle();
  currentBattleId = session.id;
  if (battleWatcher) {
    clearInterval(battleWatcher);
  }
  battleWatcher = watchPlayerCount(session.id, count => {
    document.getElementById('player-count').textContent = String(count);
  });
  document.getElementById('player-count').textContent = String(session.playerCount);
  new QRious({
    element: document.getElementById('qr'),
    value: 'https://www.mei-deo.ch',
    size: 200
  });
}

export function startBattle() {
  alert('Battle gestartet!');
}

// make functions available globally for inline handlers
window.startQuiz = startQuiz;
window.restartQuiz = restartQuiz;
window.openBattle = openBattle;
window.startBattle = startBattle;
