# Besen & Bestien – Task-Liste

> Erledigte Aufgaben werden abgehakt, aber nie gelöscht.

---

## 🔴 Kritische Bugs (sofort beheben)

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
- [ ] **B12** – `contexts/ShopContext.tsx`: Gekaufte Items (Heiltrank, Schild, Schwert) haben keinen Spieleffekt – Währung wird abgezogen, aber kein Inventar / keine Kampf-Modifikatoren existieren
- [x] **B13** – `app/(dm)/index.tsx`: Kein PIN-Schutz vor dem Dungeonmaster-Bereich – jedes Kind kann Aufgaben und Münzen manipulieren (sicherheitskritisch für Verkaufsprodukt)

---

## 🟠 Hohe Priorität (Kern-Features)

- [x] **F1** – Dungeonmaster-Bereich: PIN-Schutz implementieren (Screen existiert, aber Gate fehlt vollständig)
- [x] **F2** – Firebase-Integration: Persistenz für User-Daten, Game-State und Tasks (momentan alles flüchtig)
- [x] **F3** – Kampfsystem: Rundenbasiert (Pokémon-Stil), HP/AP-Formeln, Sieg → Münzen/Edelsteine, Niederlage → kein XP-Verlust, Held wird zurückgestoßen (GameDesignFeedback beachten!)
- [x] **F4** – Klassen-System: Barbar / Druide / Zauberer / Schurke mit Boni auf HP, AP, Schritte, Münzen
- [ ] **F5** – Avatar-Designer: Aussehen-Slider und Farbwahl fehlen (aktuell nur Klassen-Emoji, kein echter Designer)
- [x] **F6** – Wöchentliches Münzsystem: Mo–So-Zyklus, Sparschwein-Mechanik (50% Roll-over bei Nicht-Erreichen), Edelstein-Bonus bei vollem Ziel

---

## 🟡 Mittlere Priorität

- [x] **F7** – Helden-Profil Screen: Avatar, Level, Stats, Inventar, Klassen-Angriffe anzeigen
- [x] **F8** – Shop-System: Münzen/Edelsteine gegen In-Game-Items und Real-Life-Belohnungen tauschen (von Eltern konfigurierbar)
- [x] **F9** – Bestien-Schwierigkeit nach Kartenposition skalieren (frühe Felder = leichte Bestien, spätere = schwere)
- [x] **F10** – Auto-Walk / Fast-Forward: "Bis zur nächsten Bestie springen" bei vielen angesammelten Schritten
- [x] **F11** – Wiederkehrende Aufgaben: Tägliches/wöchentliches Auto-Reset von Tasks

---

## 🟢 Niedrige Priorität (Phase 2)

- [x] **F12** – Bibliothek: Buch der Bestien, Buch der Klassen, Buch der Welten, Tagebuch
- [x] **F13** – Tagebuch / Statistik: Monats-/Wochen-Übersicht mit Stickern
- [ ] **F14** – Push-Benachrichtigungen (Fr 16:00 / Sa 12:00 / So 18:00 Reminder)
- [ ] **F15** – Auto-Logout nach Inaktivität (konfigurierbar)
- [ ] **F16** – Mehrere Welten / Biome mit biom-spezifischen Bestien
- [ ] **F17** – NFC-Login (Phase 2)
- [ ] **F18** – Animationen & Sound-Effekte (Kampf-Animationen, Erfolgsmelodien)
- [ ] **F19** – Layout-Politur: Responsive Design, Dark Mode, Barrierefreiheit (kontrastreiche Farben, Screen Reader Support)

---

## 🔒 Sicherheit / Verkaufsreife

- [x] **S1** – Firebase API-Key aus Quellcode entfernen, in `.env` auslagern (`.gitignore` prüfen)
- [x] **S2** – `google-services.json` / `GoogleService-Info.plist` aus Git-History entfernen (sensible Credentials)
- [x] **S3** – Firestore Security Rules definieren (aktuell vermutlich offene Lese-/Schreibrechte)
- [x] **S4** – Login-Screen: Nutzer-Liste aus Firestore laden statt aus `MOCK_USERS` (neue Familien sehen sich sonst nicht im Avatar-Selector)
