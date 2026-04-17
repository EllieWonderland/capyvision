# Wie teste ich die App auf dem Tablet?

Um die App auf deinem Tablet (Android oder iPad) zu testen, nutze die **Expo Go** App.

## 1. Vorbereitung
1.  Installiere die App **Expo Go** aus dem Google Play Store (Android) oder App Store (iOS) auf deinem Tablet.
2.  Stelle sicher, dass dein Tablet und dein Computer mit dem **gleichen WLAN-Netzwerk** verbunden sind.

## 2. App starten
1.  Öffne ein Terminal.
2.  Wechsle in den Projekt-Ordner (WICHTIG):
    ```bash
    cd BesenUndBestienApp
    ```
3.  Führe folgenden Befehl aus:
    ```bash
    npx expo start
    ```
4.  Es erscheint ein **QR-Code** im Terminal.

## 3. Verbinden
*   **Android:** Öffne Expo Go und tippe auf "Scan QR Code". Scanne den Code vom Terminal.
*   **iOS:** Öffne die normale Kamera-App, scanne den Code und tippe auf die Benachrichtigung, um Expo Go zu öffnen.

## Troubleshooting
*   **Verbindungsprobleme?** Wenn das Tablet den Computer nicht findet, versuche den "Tunnel-Modus":
    ```bash
    npx expo start --tunnel
    ```
*   **Fehler im Terminal?** Drücke `r` im Terminal, um die App neu zu laden.
