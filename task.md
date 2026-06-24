# Besen & Bestien – Task-Liste

> Erledigte Aufgaben werden abgehakt, aber nie gelöscht.

---
## MCP ##
### 🔴 Kritische Bugs (sofort beheben)

- [x] **B1** – `types/game.ts`: Schatz-Wegpunkte werden nie erstellt (Bestie-Check greift als erstes, da 24 ein Vielfaches von 6 ist → `else if` wird nie erreicht)
- [x] **B2** – `contexts/GameContext.tsx`: Steps werden komplett vorab abgezogen, auch wenn der Held nach wenigen Schritten bei einer Bestie stoppt → übrige Schritte gehen verloren
- [x] **B3** – `contexts/GameContext.tsx`: Durch Schätze wird hindurchgelaufen – der Loop stoppt nicht, Schatz-Collect passiert nur wenn es der letzte Wegpunkt auf dem Weg war
- [x] **B4** – `contexts/GameContext.tsx` + `contexts/TaskContext.tsx`: Karten-Position und Task-Status resetten nicht beim User-Wechsel (Mia sieht Leos Kartenstand)
- [x] **B5** – Kein Level-Up-System trotz vollständiger XP-Thresholds im Spec (Level 1: 0–30 XP, Level 2: 31–60 XP usw.)
- [x] **B6** – `contexts/TaskContext.tsx`: Parent (Papa) kann Aufgaben abschließen und XP/Steps verdienen – Parent sollte nicht spielen
- [x] **B7** – `types/game.ts`: `getRandomBeast()` ignoriert Kartenposition – Drache kann auf Feld 6 erscheinen
- [x] **B8** – `app/(tabs)/map.tsx`: Hardcoded `backgroundColor: '#E8F5E9'` ignoriert Theme (Dark Mode bleibt hellgrün)
- [x] **B9** – Duplizierte Komponenten ohne Unterschied: `haptic-tab.tsx` / `HapticTab.tsx` und `icon-symbol.tsx` / `IconSymbol.tsx`
- [x] **B10** – `app/(tabs)/explore.tsx`: Expo-Boilerplate-Screen gehört nicht in die App
- [x] **B11** – `app/(dm)/children.tsx`: Kinder-Verwaltung liest `MOCK_USERS` statt Firestore – Änderungen im Spiel (Level, XP) werden im DM-Bereich nicht angezeigt
- [x] **B12** – `contexts/ShopContext.tsx`: Gekaufte Items (Heiltrank, Schild, Schwert) haben keinen Spieleffekt – Währung wird abgezogen, aber kein Inventar / keine Kampf-Modifikatoren existieren
- [x] **B13** – `app/(dm)/index.tsx`: Kein PIN-Schutz vor dem Dungeonmaster-Bereich – jedes Kind kann Aufgaben und Münzen manipulieren (sicherheitskritisch für Verkaufsprodukt)

---

### 🟠 Hohe Priorität (Kern-Features)

- [x] **F1** – Dungeonmaster-Bereich: PIN-Schutz implementieren (Screen existiert, aber Gate fehlt vollständig)
- [x] **F2** – Firebase-Integration: Persistenz für User-Daten, Game-State und Tasks (momentan alles flüchtig)
- [x] **F3** – Kampfsystem: Rundenbasiert (Pokémon-Stil), HP/AP-Formeln, Sieg → Münzen/Edelsteine, Niederlage → kein XP-Verlust, Held wird zurückgestoßen (GameDesignFeedback beachten!)
- [x] **F4** – Klassen-System: Barbar / Druide / Zauberer / Schurke mit Boni auf HP, AP, Schritte, Münzen
- [x] **F5** – Avatar-Designer: Aussehen-Slider und Farbwahl fehlen (aktuell nur Klassen-Emoji, kein echter Designer)
- [x] **F6** – Wöchentliches Münzsystem: Mo–So-Zyklus, Sparschwein-Mechanik (50% Roll-over bei Nicht-Erreichen), Edelstein-Bonus bei vollem Ziel

---

### 🟡 Mittlere Priorität

- [x] **F7** – Helden-Profil Screen: Avatar, Level, Stats, Inventar, Klassen-Angriffe anzeigen
- [x] **F8** – Shop-System: Münzen/Edelsteine gegen In-Game-Items und Real-Life-Belohnungen tauschen (von Eltern konfigurierbar)
- [x] **F9** – Bestien-Schwierigkeit nach Kartenposition skalieren (frühe Felder = leichte Bestien, spätere = schwere)
- [x] **F10** – Auto-Walk / Fast-Forward: "Bis zur nächsten Bestie springen" bei vielen angesammelten Schritten
- [x] **F11** – Wiederkehrende Aufgaben: Tägliches/wöchentliches Auto-Reset von Tasks

---

### 🟢 Niedrige Priorität

- [x] **F12** – Bibliothek: Buch der Bestien, Buch der Klassen, Buch der Welten, Tagebuch
- [x] **F13** – Tagebuch / Statistik: Monats-/Wochen-Übersicht mit Stickern
- [x] **F14** – Push-Benachrichtigungen (Fr 16:00 / Sa 12:00 / So 18:00 Reminder)
- [x] **F15** – Auto-Logout nach Inaktivität (konfigurierbar)
- [x] **F16** – Animationen & Sound-Effekte (Kampf-Animationen, Erfolgsmelodien)
- [x] **F17** – Layout-Politur: Responsive Design, Dark Mode, Barrierefreiheit (kontrastreiche Farben, Screen Reader Support)
- [x] **F18** – TypeScript strict-mode Fehler bereinigen (MOCK_USERS, IconSymbol StyleProp, AuthContext Partial<NonNullable<>>)

---

### 🔒 Sicherheit / Verkaufsreife

- [x] **S1** – Firebase API-Key aus Quellcode entfernen, in `.env` auslagern (`.gitignore` prüfen)
- [x] **S2** – `google-services.json` / `GoogleService-Info.plist` aus Git-History entfernen (sensible Credentials)
- [x] **S3** – Firestore Security Rules definieren (aktuell vermutlich offene Lese-/Schreibrechte)
- [x] **S4** – Login-Screen: Nutzer-Liste aus Firestore laden statt aus `MOCK_USERS` (neue Familien sehen sich sonst nicht im Avatar-Selector)

## Phase 2 (Post-MVP)
- [ ] **F19** – Mehrere Welten / Biome mit biom-spezifischen Bestien
- [ ] **F20** – NFC-Login (Phase 2)

---

## Spec-Abgleich `main`-Konzept (Stand 2026-06-24) ##

> Vergleich von `docs/konzept/Spielmechanik.txt` (aus dem nativen `main`-Branch) gegen die aktuelle master-Implementierung.
> Die Rechen-Engine (XP/Level/Kampf/Bestien/Karte) passt; die Lücken liegen in Belohnungs-Kernregeln und Content-Breite.

### 🟠 Belohnungssystem – Mechanik weicht von Spec ab

- [x] **G1** – Altersbasierte Wochenlimit-Tabelle umsetzen (unter 6 J. = 10 Münzen, 6 J. = 20 … 12 J. = 65). `weeklyGoalForAge()` + `getWeeklyGoal()` in `types/game.ts`; `age`-Feld am User; Eltern setzen das Alter im DM-Bereich (`children.tsx`), eigenes `weeklyGoal` überschreibt die Tabelle. (erweitert **F6**)
- [x] **G2** – Edelsteine *sofort* ab erreichtem Wochenziel: `awardLoot()` in `AuthContext.tsx` verteilt Loot auf Münzen bis zum Wochenziel, danach auf Edelsteine (gleiche Höhe). Genutzt in Kampf (`CombatModal.tsx`) und Schatz (`GameContext.tsx`). (erweitert **F6**)
- [x] **G3** – *Bewusste Abweichung von der Spec (DM-Entscheidung 2026-06-24):* Sparschwein-Mechanik (50% Roll-over) wird **absichtlich beibehalten** statt spec-konform alle Münzen verfallen zu lassen – kinderfreundlicher. Keine Code-Änderung. (betrifft **F6**)
- [x] **G4** – Klassen-Boni vervollständigt: **Schritt-** und **Münz-Modifikatoren** ergänzt (Barbar −1 Schritt, Druide +2 Schritte, Zauberer −1 Münze, Schurke +2 Münzen). Zentral via `getClassBonus()` in `types/game.ts`; Schritt-Bonus bei Aufgabenabschluss (`TaskContext.tsx`), Münz-Bonus bei Kampf/Schatz; angezeigt in Profil & Bibliothek. (erweitert **F4**)

### 🟡 Content-Breite fehlt

- [ ] **G5** – Level-Angriffe: pro Klasse 10 Angriffe (Lvl 1–90) inkl. Spezialeffekte (Verwirrung, −AP, Verfehlen, Aussetzen…). Aktuell ein Angriff je Klasse ohne Effekt. In **erweiterbare Einzeldateien** je Klasse auslagern (lt. Allgemeine-Regeln). (erweitert **F3/F4**)
- [ ] **G6** – Shop auf die 50 Spec-Items erweitern (Ausrüstung, Tränke, Kosmetik/Begleiter, Boosts, Sammelobjekte). Aktuell 4 mit echtem Effekt. (erweitert **F8**)
- [ ] **G7** – 7 echte Welten mit korrekten Namen + Biom-spezifischen Bestien-Pools (Wunderwald, Todeswüste, Verbotenes Meer, Verlorene Stadt, Dunkelmine, Feuerinsel, Modersumpf). Aktuell 4 frei erfundene Welten. (präzisiert **F19**)
- [ ] **G8** – Mimikry: Bestie, die auf der Karte als Schatz getarnt erscheint.

### 🟢 Feinschliff / Spec-Treue

- [ ] **G9** – Avatar des Helden im Kampf anzeigen statt hartkodiertem 🧙‍♂️ (`CombatModal.tsx`). (betrifft **F3/F5**)
- [ ] **G10** – Avatar-Designer: Aussehen über **Slider mit mehreren Bildern je Klasse** (aktuell nur Emoji + Farbe). (erweitert **F5**)
- [ ] **G11** – Tagebuch-Sticker spec-konform: je besiegter Bestie / neu betretener Welt / erreichtem Wochenziel / Aufgabe über Ziel – statt reiner Aufgaben-Anzahl. (erweitert **F13**)
- [ ] **G12** – Bücher der Bestien/Welten: **Entdeckt-Checkbox + Fortschrittsleiste** (welche besiegt/betreten). Aktuell statische Liste ohne Tracking. (erweitert **F12**)
- [ ] **G13** – Spielanleitung in der Bibliothek ergänzen.
- [ ] **G14** – Aufgaben: **Deadline** (Mo–So) + monatliche / wochentag-spezifische Wiederholung (z. B. jeden Mo/Mi/Fr). Aktuell nur daily/weekly. (erweitert **F11**)
- [ ] **G15** – Tutorial beim ersten Spielstart (je nach NFC-/virtueller Figur angepasst).
- [ ] **G16** – Sounds / kurze Erfolgsmelodien (aktuell nur Haptik). (betrifft **F16**)
- [ ] **G17** – Benachrichtigungstext dynamisch: „Noch X Münzen bis zum Taschengeld!" statt statischem Text. (erweitert **F14**)
- [ ] **G18** – Restschritte nach einem Kampf automatisch weiterlaufen (`move()` stoppt aktuell an der Bestie). (betrifft **B2**)