# Product Requirements Document (PRD) - Besen & Bestien

<img src="https://via.placeholder.com/800x200?text=Besen+%26+Bestien" alt="Besen & Bestien Banner" />

## 1. Einführung
**Besen & Bestien** ist eine gamifizierte Haushalts-App, die Kinder (6+ Jahre) motiviert, Aufgaben im echten Leben zu erledigen, um in einem virtuellen Abenteuer voranzukommen.

### 1.1 Vision
Verwandlung von lästigen Pflichten in ein spannendes RPG-Abenteuer mit Belohnungssystem.

### 1.2 Zielgruppe
- **Primär:** Kinder (6-12 Jahre)
- **Sekundär:** Eltern (als Dungeonmaster)

---

## 2. Technologie & Architektur
- **Plattform:** Cross-Platform (Mobile App für Android/iOS)
- **Tech Stack:** 
  - **Frontend:** React Native (Expo)
  - **Backend:** Firebase (Auth, Firestore, Cloud Functions)
- **Architektur:** Cloud-Sync First (für Synchronisation zwischen Eltern- und Kinder-Geräten)
- **Assets:** Platzhalter für MVP (Später: Custom Pixel/Vector Art basierend auf .jpg Vorlagen)
- **NFC:** Vorbereitet, aber für MVP deaktiviert (Login via Avatar-Wahl).

---

## 3. Benutzerrollen

### 3.1 Dungeonmaster (Eltern)
- **Aufgaben:**
  - Erstellen/Verwalten von Aufgaben (Einmalig, Wiederkehrend)
  - Belohnungen festlegen (Münzen -> Taschengeld/Edelsteine)
  - Nutzerverwaltung (Kinder-Profile anlegen)
  - Notfall-PIN Zugriff

### 3.2 Helden (Kinder)
- **Aufgaben:**
  - Aufgaben erledigen -> XP & Schritte verdienen
  - Spiel spielen (Map laufen, Monster kämpfen)
  - Charakter pflegen (Equipment, Stats)

---

## 4. Kern-Features (MVP)

### 4.1 Authentifizierung
- Login per Avatar-Auswahl (Virtual Figure)
- PIN-Schutz für Eltern-Bereich
- *Optional (Später):* NFC Login

### 4.2 Aufgaben-Management
- **Typen:** Einmalig, Wiederkehrend (Täglich, Wöchentlich)
- **Attribute:** Schweregrad (Leicht/Mittel/Schwer -> XP/Schritte)
- **Validierung:** Eltern können Aufgaben als "Erledigt" bestätigen (oder Auto-Trust Modus)

### 4.3 Gamification Loop (Das Spiel)
1. **Aufgabe erledigen** -> Erhalt von **Schritten** & **XP** (Bleiben auch bei Niederlage erhalten).
2. **Map Movement:** Avatar bewegt sich auf isometrischer Karte (Biomes).
3. **Events:**
   - **Bestie (Kampf):** Rundenbasiertes System.
     - Sieg: Münzen/Edelsteine + Loot.
     - Niederlage: Flucht. **Wichtig:** Keine XP-Strafe, Schritte werden "pausiert" oder Helden zurückgestoßen, aber nicht gelöscht. Motivation erhalten!
   - **Schatz:** Zufällige Belohnung (Münzen).
4. **Charakter-Progression:** Level Up erhöht HP/AP.
5. **Belohnung:** Münzen sammeln.
   - **Sparschwein-Mechanik:** Nicht erreichte Wochenziele verfallen nicht komplett. Ein Teil (z.B. 50%) wandert in ein Sparschwein.
   - Bonus-Edelsteine nur bei vollem Wochenziel.

### 4.4 Shop & Inventar
- Tausch von Münzen/Edelsteinen gegen:
  - In-Game Items (Rüstung, Tränke)
  - Real-Life Belohnungen (Eis essen, Kino - von Eltern konfiguriert)

---

## 5. Design & UI
**Stil:** Flat Design, "Rich Aesthetic", Gamified UI.
**Farbbalette:**
- Midnight Green: `#003844`
- Caribbean Current: `#006c67`
- Amaranth Pink: `#f194b4`
- Selective Yellow: `#ffb100`
- Dutch White: `#ffebc6`

**Referenz:** Siehe `map_idea1.jpg` und `map_idea2.jpg` für Map-Stil.

---

## 6. Datenmodell (Grobentwurf)

### Collections
- `users`: Profile (Rolle, Stats, Inventory)
- `tasks`: Aufgaben-Definitionen (Titel, Reward, Assignee, Status)
- `game_state`: Aktuelle Position auf Map, letzte Interaktion

---

## 7. Roadmap
- **Phase 1 (MVP):** Grundgerüst, Aufgabenliste, Einfache Map, Basis-Kampf, Local/Cloud Sync.
- **Phase 2:** Erweiterte Items, Mehr Klassen, NFC Support, Detaillierte Animationen.
