# Game Design Review & Feedback

## 1. Logik & Flow
### Das "Bestrafungs-Problem" (Critical)
*   **Aktueller Stand:** "Sollte die LP des Helden auf 0 gehen... geht leer aus und darf auch nicht weiterlaufen."
*   **Kritik:** Das ist für eine **Motivations-App** extrem frustrierend. Ein Kind hat im *echten Leben* gearbeitet (gestaubsaugt), verliert aber im *Spiel* durch Pech/Schwäche alles. Das entkoppelt die Belohnung von der Arbeit.
*   **Vorschlag:**
    *   **Tröster:** Auch bei Niederlage gibt es *immer* die XP (für die erledigte Hausarbeit), aber keine Münzen/Loot für den Kampf.
    *   **Kein Schritt-Verlust:** Die Schritte verfallen nicht. Der Held wird nur "zurückgestoßen" (z.B. 1 Feld zurück) oder muss warten (Cooldown), darf es dann aber erneut versuchen.
    *   **Begründung:** Die "Arbeit" darf nie umsonst gewesen sein.

### Das "Alles oder Nichts" Wochenziel (Critical)
*   **Aktueller Stand:** "Werden weniger Münzen als das Wochenlimit gesammelt, verfallen alle Münzen dieser Woche."
*   **Kritik:** Ein krankes Kind oder eine volle Woche führt zu totalem Verlust. Das demotiviert, überhaupt noch anzufangen, wenn es Donnerstag ist und das Ziel unerreichbar scheint.
*   **Vorschlag:** **Sparschwein-Mechanik**. Nicht erreichte Münzen verfallen nicht komplett, sondern 50% wandern in ein "Sparschwein", das man später knacken kann. Oder: Münzen verfallen nie, aber der *Bonus* (Edelsteine) gibt es nur bei Wochenziel-Erreichung.

## 2. Zielgruppe (6-12 Jahre)
### Komplexität der Attribute
*   **Analytik:** Formeln wie `AP = BasisAP + (XP * 0,05)` sind gut für das Backend, aber für 6-Jährige zu abstrakt.
*   **Vorschlag UI:** Visualisierung durch **Herzen** (LP) und **Schwerter** (AP). Keine Kommazahlen anzeigen. "Du brauchst 3 Schwerter mehr für diesen Drachen".

### Textlastigkeit
*   **Kritik:** Klassenbeschreibungen und Kampf-Logs sind sehr textlastig.
*   **Vorschlag:** Starke Nutzung von **Icons** und **Audio-Feedback**. Der "Dungeonmaster" (Eltern) könnte Texte vorlesen/aufnehmen, oder Text-to-Speech nutzen.

## 3. Balancing & Economy
### "Schritt-Stau"
*   **Szenario:** Ein Kind macht am Samstag Großputz (200 Schritte).
*   **Problem:** Es muss 40x klicken, 8 Kämpfe machen. Das wird zur Arbeit statt zum Spiel.
*   **Vorschlag:** **Auto-Walk / Fast-Forward**. "Du hast 200 Schritte. Möchtest du bis zur nächsten Bestie springen?"

### Inflation
*   **Problem:** Höhere Level = Mehr AP = Schnellere Kämpfe = Mehr Münzen?
*   **Lösung:** Die Belohnungen (Münzen) sollten relativ konstant bleiben (an Taschengeld gekoppelt), aber die *coolen* Sachen (Edelsteine/Skins) skalieren.

## 4. Kreative Ergänzungen (Ideen)
*   **Der "Joker" (Eltern-Feature):** Eltern können einen Kampf "eingreifen" und dem Kind helfen (z.B. "+10 HP Heilzauber senden" vom Eltern-Handy), um Frust zu vermeiden.
*   **Saisonale Events:** Zu Halloween werden alle Slimes zu Kürbissen. Hält das Spiel länger frisch.
*   **Das "Haustier":** Ein Begleiter, der mitwächst (Tamagotchi-Light), motiviert oft mehr als der eigene Avatar.

## Fazit
Das Kernkonzept ist stark! Die Verbindung Geld/Arbeit ist super. Die "Bestrafungs-Mechaniken" müssen aber dringend entschärft werden, damit es motivierend und nicht frustrierend bleibt.
