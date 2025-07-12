const STORAGE_KEY = 'battleSessions';

import questions from './questions.js';

function loadSessions() {
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : [];
}

function saveSessions(sessions) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(sessions));
}

function getRandomQuestionIds(count) {
  const ids = questions.map(q => q.id);
  const shuffled = ids.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

export function createBattle() {
  const sessions = loadSessions();
  const battle = {
    id: Date.now().toString(36) + Math.random().toString(36).slice(2),
    timeStamp: Date.now(),
    playerCount: 1,
    questionIds: getRandomQuestionIds(10)
  };
  sessions.push(battle);
  saveSessions(sessions);
  return battle;
}

export function getBattle(id) {
  return loadSessions().find(b => b.id === id);
}

export function updatePlayerCount(id, count) {
  const sessions = loadSessions();
  const battle = sessions.find(b => b.id === id);
  if (battle) {
    battle.playerCount = count;
    saveSessions(sessions);
  }
}

export function watchPlayerCount(id, callback) {
  return setInterval(() => {
    const battle = getBattle(id);
    if (battle) callback(battle.playerCount);
  }, 2000);
}
