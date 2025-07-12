const questions=[
  {
    "id": 1,

    "frage": "Was ist die normale Körpertemperatur eines erwachsenen Menschen?",
    "antworten": [
      "35.5 - 36.5 °C",
      "36.5 - 37.5 °C",
      "37.5 - 38.5 °C",
      "38.5 - 39.5 °C"
    ],
    "korrekt": 1,
    "erklaerung": "Die normale Körperkerntemperatur eines gesunden Erwachsenen liegt im Bereich von 36,5 °C bis 37,5 °C. Werte darüber oder darunter können auf eine Erkrankung hinweisen."
  },
  {
    "id": 2,

    "frage": "Welcher Pulsbereich gilt bei einem gesunden Erwachsenen in Ruhe als normal?",
    "antworten": [
      "40-60 Schläge/Minute",
      "60-80 Schläge/Minute",
      "80-100 Schläge/Minute",
      "100-120 Schläge/Minute"
    ],
    "korrekt": 1,
    "erklaerung": "Ein Ruhepuls von 60 bis 80 Schlägen pro Minute ist bei Erwachsenen typisch. Bei Sportlern kann er auch niedriger sein."
  },
  {

    "id": 3,

    "frage": "Was bedeutet die Abkürzung 'RR' in der medizinischen Dokumentation?",
    "antworten": [
      "Regelmässiger Rhythmus",
      "Rechter Rippenbogen",
      "Riva-Rocci (Blutdruck)",
      "Respiratorische Rate"
    ],
    "korrekt": 2,
    "erklaerung": "RR steht für die Blutdruckmessung nach der Methode von Scipione Riva-Rocci, dem Erfinder der Blutdruckmanschette."
  },
  {
    "id": 4,

    "frage": "Welche der folgenden Maßnahmen gehört zur Standard-Händehygiene?",
    "antworten": [
      "Händewaschen nur mit Wasser",
      "Händedesinfektion für 30 Sekunden",
      "Tragen von Handschuhen bei allen Tätigkeiten",
      "Händewaschen nach jedem Patientenkontakt, Desinfektion ist optional"
    ],
    "korrekt": 1,
    "erklaerung": "Die hygienische Händedesinfektion mit einem alkoholischen Präparat für 30 Sekunden ist die wichtigste Maßnahme zur Verhütung von Infektionen."
  },
  {

    "id": 5,

    "frage": "Was ist eine Aspiration?",
    "antworten": [
      "Eine Form der Lungenentzündung",
      "Das Einatmen von Fremdkörpern oder Flüssigkeiten in die Lunge",
      "Eine allergische Reaktion",
      "Ein plötzlicher Blutdruckabfall"
    ],
    "korrekt": 1,
    "erklaerung": "Aspiration bezeichnet das Verschlucken, bei dem Speisen, Flüssigkeiten oder andere Substanzen in die Atemwege gelangen, was zu ernsthaften Komplikationen führen kann."
  },
  {

    "id": 6,

    "frage": "Welche Lagerungsposition wird bei Atemnot oft als erleichternd empfunden?",
    "antworten": [
      "Flache Rückenlage",
      "Bauchlage",
      "Oberkörperhochlagerung (sitzend)",
      "Seitenlage"
    ],
    "korrekt": 2,
    "erklaerung": "Eine aufrechte Sitzposition oder Oberkörperhochlagerung erleichtert die Atmung, da die Lunge sich besser ausdehnen kann und der Druck auf das Zwerchfell reduziert wird."
  },
  {

    "id": 7,

    "frage": "Was versteht man unter Prophylaxe?",
    "antworten": [
      "Die Behandlung einer bestehenden Krankheit",
      "Die Diagnose einer Krankheit",
      "Vorbeugende Maßnahmen zur Verhinderung von Krankheiten",
      "Die Rehabilitation nach einer Krankheit"
    ],
    "korrekt": 2,
    "erklaerung": "Prophylaxe umfasst alle Maßnahmen, die dazu dienen, das Entstehen von Krankheiten oder Komplikationen (z.B. Dekubitus, Thrombose) zu verhindern."
  },
  {

    "id": 8,

    "frage": "Ein Patient hat einen systolischen Blutdruck von 160 mmHg. Wie ist dieser Wert einzuordnen?",
    "antworten": [
      "Hypotonie (zu niedrig)",
      "Normal",
      "Hypertonie (Bluthochdruck)",
      "Nicht messbar"
    ],
    "korrekt": 2,
    "erklaerung": "Ein systolischer Wert von 140 mmHg oder höher bei wiederholten Messungen wird als Hypertonie (Bluthochdruck) klassifiziert."
  },
  {

    "id": 9,

    "frage": "Was ist das Hauptziel bei der Mobilisation von Patienten?",
    "antworten": [
      "Patienten möglichst schnell zu bewegen",
      "Die Selbstständigkeit des Patienten zu fördern und Komplikationen zu vermeiden",
      "Den Patienten zu ermüden, damit er besser schläft",
      "Pflegepersonal zu entlasten"
    ],
    "korrekt": 1,
    "erklaerung": "Mobilisation dient der Aktivierung des Kreislaufs, der Vorbeugung von Kontrakturen und Thrombosen und der Förderung der Eigenständigkeit des Patienten."
  },
  {
    "frage": "Welches Vitamin wird durch Sonneneinstrahlung in der Haut gebildet?",
    "antworten": [
      "Vitamin A",
      "Vitamin C",
      "Vitamin D",
      "Vitamin B12"
    ],
    "korrekt": 2,
    "erklaerung": "Unter Einwirkung von UV-B-Strahlen der Sonne kann der Körper Vitamin D in der Haut selbst synthetisieren. Es ist wichtig für die Knochengesundheit."
  },
  {
    "frage": "Was bedeutet 'subkutan'?",
    "antworten": [
      "In den Muskel",
      "In die Vene",
      "Unter die Haut",
      "Auf die Haut"
    ],
    "korrekt": 2,
    "erklaerung": "Eine subkutane Injektion wird in das Unterhautfettgewebe (Subcutis) verabreicht, z.B. bei Insulin oder Heparin."
  },
  {
    "frage": "Welche Aufgabe hat das Hämoglobin im Blut?",
    "antworten": [
      "Blutgerinnung",
      "Abwehr von Krankheitserregern",
      "Transport von Sauerstoff",
      "Transport von Nährstoffen"
    ],
    "korrekt": 2,
    "erklaerung": "Hämoglobin ist der rote Blutfarbstoff in den Erythrozyten (roten Blutkörperchen) und ist für den Transport von Sauerstoff von der Lunge zu den Körperzellen verantwortlich."
  },
  {
    "frage": "Was ist ein Dekubitus?",
    "antworten": [
      "Eine Hautinfektion",
      "Eine allergische Hautreaktion",
      "Ein Druckgeschwür",
      "Ein blauer Fleck"
    ],
    "korrekt": 2,
    "erklaerung": "Ein Dekubitus ist eine lokale Schädigung der Haut und des darunterliegenden Gewebes, die durch langanhaltenden Druck oder Reibung entsteht."
  },
  {
    "frage": "Was ist bei der Kommunikation mit einem schwerhörigen Patienten wichtig?",
    "antworten": [
      "Sehr laut schreien",
      "Deutlich, langsam und in normaler Lautstärke sprechen",
      "Nur schriftlich kommunizieren",
      "Den Patienten nicht direkt ansehen"
    ],
    "korrekt": 1,
    "erklaerung": "Lautes Schreien verzerrt das Klangbild. Deutliche Aussprache, Blickkontakt und eine normale Lautstärke unterstützen das Lippenlesen und Verstehen."
  },
  {
    "frage": "Wie viele Lappen hat die rechte Lunge eines Menschen?",
    "antworten": [
      "Einen",
      "Zwei",
      "Drei",
      "Vier"
    ],
    "korrekt": 2,
    "erklaerung": "Die menschliche Lunge ist asymmetrisch. Die rechte Lunge besteht aus drei Lungenlappen (Ober-, Mittel- und Unterlappen), die linke nur aus zwei, um Platz für das Herz zu schaffen."
  },
  {
    "frage": "Was ist die Hauptfunktion der Nieren?",
    "antworten": [
      "Verdauung von Fetten",
      "Produktion von Hormonen für das Wachstum",
      "Filterung des Blutes und Ausscheidung von Abfallstoffen",
      "Speicherung von Galle"
    ],
    "korrekt": 2,
    "erklaerung": "Die Nieren filtern Abfallprodukte und überschüssige Flüssigkeit aus dem Blut, die dann als Urin ausgeschieden werden. Sie regulieren auch den Blutdruck und den Elektrolythaushalt."
  },
  {
    "frage": "Was versteht man unter Empathie in der Pflege?",
    "antworten": [
      "Mitleid mit dem Patienten haben",
      "Die Gefühle und Perspektive des Patienten nachvollziehen können",
      "Alle Wünsche des Patienten erfüllen",
      "Dem Patienten zustimmen, auch wenn er Unrecht hat"
    ],
    "korrekt": 1,
    "erklaerung": "Empathie ist die Fähigkeit, sich in die Lage einer anderen Person hineinzuversetzen, ohne deren Gefühle zu den eigenen zu machen. Es ist eine wichtige Grundlage für eine vertrauensvolle Pflegebeziehung."
  },
  {
    "frage": "Welche der folgenden Maßnahmen ist eine wichtige Thromboseprophylaxe?",
    "antworten": [
      "Ruhigstellung der Beine",
      "Ausreichende Flüssigkeitszufuhr und Bewegung",
      "Tragen von engen Socken",
      "Vermeidung von Kompressionsstrümpfen"
    ],
    "korrekt": 1,
    "erklaerung": "Bewegung (z.B. Fußgymnastik) aktiviert die Muskelpumpe und fördert den venösen Rückfluss. Ausreichend Flüssigkeit hält das Blut fließfähig. Beides wirkt der Bildung von Blutgerinnseln entgegen."
  },
  {
    "frage": "Was ist ein Apoplex?",
    "antworten": [
      "Ein Herzinfarkt",
      "Ein epileptischer Anfall",
      "Ein Schlaganfall",
      "Eine schwere Infektion"
    ],
    "korrekt": 2,
    "erklaerung": "Apoplex oder apoplektischer Insult ist der medizinische Fachbegriff für einen Schlaganfall, der durch eine plötzliche Durchblutungsstörung im Gehirn verursacht wird."
  },
  {
    "frage": "Welcher Blutzuckerwert (nüchtern) gilt als normal?",
    "antworten": [
      "< 100 mg/dl (5.6 mmol/l)",
      "120 - 140 mg/dl",
      "150 - 180 mg/dl",
      "> 200 mg/dl"
    ],
    "korrekt": 0,
    "erklaerung": "Ein Nüchternblutzucker unter 100 mg/dl (5.6 mmol/l) wird als normal angesehen. Werte zwischen 100 und 125 mg/dl deuten auf eine gestörte Glukosetoleranz (Prädiabetes) hin."
  },
  {
    "frage": "Was ist die '5-R-Regel' bei der Medikamentenverabreichung?",
    "antworten": [
      "Richtiger Patient, Richtiges Medikament, Richtige Dosierung, Richtige Applikationsform, Richtiger Zeitpunkt",
      "Ruhiger Patient, Ruhiger Raum, Reines Wasser, Richtige Hand, Rasche Gabe",
      "Rezept, Rücksprache, Ruhe, Reinigung, Rhythmus",
      "Riechen, Raten, Reichen, Rufen, Rennen"
    ],
    "korrekt": 0,
    "erklaerung": "Die 5-R-Regel (inzwischen oft erweitert auf 6R oder mehr) ist eine grundlegende Sicherheitsüberprüfung, um Medikationsfehler zu vermeiden."
  },
  {
    "frage": "Welcher Erreger verursacht am häufigsten Harnwegsinfekte?",
    "antworten": [
      "Staphylokokken",
      "Streptokokken",
      "Escherichia coli (E. coli)",
      "Noroviren"
    ],
    "korrekt": 2,
    "erklaerung": "Das Bakterium Escherichia coli, das normalerweise im Darm vorkommt, ist für die meisten unkomplizierten Harnwegsinfekte verantwortlich."
  },
  {
    "frage": "Was ist bei der Lagerung von Insulin zu beachten?",
    "antworten": [
      "Muss immer eingefroren werden",
      "Sollte bei direkter Sonneneinstrahlung gelagert werden",
      "Angebrochene Pens bei Raumtemperatur, Vorräte im Kühlschrank",
      "Kann bei beliebiger Temperatur gelagert werden"
    ],
    "korrekt": 2,
    "erklaerung": "Ungeöffnetes Insulin wird im Kühlschrank (nicht in der Tür!) gelagert. Einmal in Gebrauch, sollte es bei Raumtemperatur aufbewahrt werden, um Hautreizungen zu vermeiden, und ist ca. 4 Wochen haltbar."
  },
  {
    "frage": "Was bedeutet Dysphagie?",
    "antworten": [
      "Sprachstörung",
      "Schluckstörung",
      "Hörstörung",
      "Sehstörung"
    ],
    "korrekt": 1,
    "erklaerung": "Dysphagie ist der medizinische Fachbegriff für Schwierigkeiten oder Schmerzen beim Schlucken. Dies erfordert besondere Aufmerksamkeit bei der Nahrungs- und Flüssigkeitsgabe."
  },
  {
    "frage": "Welches Organ ist primär für die Entgiftung des Körpers zuständig?",
    "antworten": [
      "Magen",
      "Lunge",
      "Leber",
      "Milz"
    ],
    "korrekt": 2,
    "erklaerung": "Die Leber ist das zentrale Stoffwechselorgan und spielt eine entscheidende Rolle bei der Entgiftung, indem sie schädliche Substanzen wie Alkohol und Medikamentenrückstände abbaut."
  },
  {
    "frage": "Was ist der Glasgow Coma Scale (GCS)?",
    "antworten": [
      "Eine Schmerzskala",
      "Ein Instrument zur Beurteilung von Bewusstseinsstörungen",
      "Ein Test für die Lungenfunktion",
      "Eine Skala zur Messung des Ernährungszustands"
    ],
    "korrekt": 1,
    "erklaerung": "Der GCS ist ein standardisiertes Schema zur Beurteilung der Bewusstseinslage eines Patienten nach Punkten, basierend auf Augenöffnen, verbaler Reaktion und motorischer Reaktion."
  },
  {
    "frage": "Was ist eine Kontraktur?",
    "antworten": [
      "Ein Muskelkrampf",
      "Eine Gelenkversteifung durch Verkürzung von Muskeln und Sehnen",
      "Eine Nervenentzündung",
      "Ein Knochenbruch"
    ],
    "korrekt": 1,
    "erklaerung": "Eine Kontraktur entsteht oft durch Bewegungsmangel und führt zu einer dauerhaften, schmerzhaften Bewegungseinschränkung eines Gelenks. Regelmäßige Mobilisation ist die beste Prophylaxe."
  },
  {
    "frage": "Welche Aussage zur Schweigepflicht ist korrekt?",
    "antworten": [
      "Sie gilt nur für Ärzte, nicht für Pflegepersonal.",
      "Sie darf gebrochen werden, wenn Familienangehörige nachfragen.",
      "Sie gilt über den Tod des Patienten hinaus.",
      "Informationen dürfen an Kollegen weitergegeben werden, auch wenn sie nicht an der Behandlung beteiligt sind."
    ],
    "korrekt": 2,
    "erklaerung": "Die Schweigepflicht ist eine gesetzliche Verpflichtung für alle im Gesundheitswesen Tätigen. Sie schützt die Privatsphäre des Patienten und erlischt nicht mit dessen Tod."
  },
  {
    "frage": "Was misst die Pulsoxymetrie?",
    "antworten": [
      "Den Puls und die arterielle Sauerstoffsättigung",
      "Den Blutdruck",
      "Den Blutzucker",
      "Die Atemfrequenz"
    ],
    "korrekt": 0,
    "erklaerung": "Ein Pulsoxymeter ist ein nicht-invasives Gerät (meist ein Clip am Finger), das die Pulsfrequenz und den prozentualen Anteil des mit Sauerstoff gesättigten Hämoglobins im arteriellen Blut (SpO2) misst."
  },
  {
    "frage": "Welche Pflegemaßnahme ist bei einem Patienten mit trockener Haut besonders wichtig?",
    "antworten": [
      "Häufiges Waschen mit Seife",
      "Verwendung von alkoholhaltigen Lotionen",
      "Anwendung von rückfettenden Wasser-in-Öl-Emulsionen",
      "Kräftiges Abrubbeln mit dem Handtuch"
    ],
    "korrekt": 2,
    "erklaerung": "Trockene Haut benötigt Feuchtigkeit und Fett. Rückfettende Präparate (W/O-Emulsionen) unterstützen die Wiederherstellung der Hautbarriere, während Seife und Alkohol die Haut zusätzlich austrocknen."
  }

];


questions.forEach((q, idx) => {
  if (q.id === undefined) q.id = idx + 1;
});
export default questions;

