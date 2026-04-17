# Besen & Bestien - Projekt-Roadmap

## ✅ Phase 1: Setup & Grundgerüst
- [x] PRD erstellen
- [x] Tech Stack festlegen (React Native + Expo + Firebase)
- [x] Projekt initialisieren
- [x] Farbpalette & Theme integrieren
- [x] Ordnerstruktur anlegen

## 🔄 Phase 2: Authentifizierung
- [x] Login Screen (Avatar-Auswahl)
- [x] AuthContext für Session-Management
- [x] Mock-User-Daten (Papa, Leo, Mia)
- [ ] PIN-Schutz für Eltern-Bereich ← **fehlt noch (B13)**
- [ ] Nutzer-Liste aus Firestore laden (statt MOCK_USERS) ← **fehlt noch (S4)**

## ✅ Phase 3: Aufgaben-System
- [x] Task-Typen definieren (easy/medium/hard)
- [x] TaskContext für State Management
- [x] Aufgabenliste anzeigen
- [x] "Erledigt"-Funktion mit XP/Schritte-Belohnung
- [x] Belohnungs-Modal
- [x] Aufgaben erstellen / bearbeiten / löschen (DM-Bereich)
- [x] Wiederkehrende Aufgaben (täglich/wöchentlich Auto-Reset)

## ✅ Phase 4: Spielmechanik
- [x] Isometrische Karte mit Wegpunkten
- [x] Held-Bewegung auf der Karte (Schritte verbrauchen)
- [x] Schatz-Felder (Münzen sammeln)
- [x] Bestien-Felder (Kampf auslösen)

## ✅ Phase 5: Kampfsystem
- [x] Kampf-Screen UI (CombatModal)
- [x] Rundenbasierter Kampf (HP/AP System)
- [x] Angriffe je nach Klasse
- [x] Sieg/Niederlage Logik
- [x] Münzen/Edelsteine als Belohnung

## 🔄 Phase 6: Charakter & Klassen
- [ ] Avatar-Designer (Aussehen-Slider, Farbwahl) ← **fehlt noch (F5)**
- [x] Klassenwahl (Barbar, Druide, Zauberer, Schurke)
- [x] Level-System (XP → Level Up)
- [x] Stats-Berechnung (HP, AP nach Formel)

## 🔄 Phase 7: Shop & Inventar
- [x] Shop-Screen mit Items
- [x] Münzen & Edelsteine als Währung
- [ ] Inventar-System: gekaufte Items anwenden (B12) ← **fehlt noch**
- [ ] Tränke / Ausrüstung im Kampf nutzen ← **abhängig von Inventar**

## ✅ Phase 8: Bibliothek
- [x] Buch der Bestien
- [x] Buch der Klassen
- [x] Buch der Welten
- [x] Tagebuch (Sticker-Sammlung / Statistik)

## 🔄 Phase 9: Münz-System & Taschengeld
- [x] Wöchentliches Münzziel (Mo–So-Zyklus)
- [x] Sparschwein-Mechanik (50 % Roll-over)
- [x] Edelstein-Bonus bei vollem Ziel
- [ ] Auszahlungs-UI (Eltern bestätigen Auszahlung am Wochenende) ← **fehlt noch**

## 🔲 Phase 10: Polishing & Verkaufsreife
- [ ] Firebase-Credentials aus Quellcode auslagern (S1–S3)
- [ ] Benachrichtigungen (Freitag/Samstag/Sonntag) (F14)
- [ ] Auto-Logout nach Inaktivität (F15)
- [ ] Sound-Effekte & Kampf-Animationen (F18)
- [ ] Mehrere Welten / Biome (F16)
- [ ] NFC-Login (F17)
- [ ] Responsive Design, Dark Mode, Barrierefreiheit (F19)

---
**Legende:** ✅ = Phase abgeschlossen | 🔄 = In Arbeit (teilweise offen) | 🔲 = Noch offen | [x] = Erledigt | [ ] = Ausstehend
