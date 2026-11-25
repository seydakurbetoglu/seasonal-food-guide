# Seasonal Food Guide (Mevsimsel Gıda Rehberi)

A mobile-friendly guide that shows which vegetables, fruits and fish are in season for the selected month in Turkey. Eating seasonal food is cheaper, fresher and more sustainable, but the information is scattered. This app puts it in one place.

Final project for **BMU1422 Mobile Programming**, Bitlis Eren University, Computer Engineering (2025-2026 Spring).

## Features

- Month selector with seasonal products for that month
- Category filter (vegetables, fruits, fish)
- Product search
- Product details (benefits, storage tips, serving ideas)
- Favorites and shopping list, saved with `localStorage`
- Light / dark theme
- Responsive layout for mobile screens
- Works offline: the data set is stored inside the app

## Tech Stack

| Layer | Technology |
| --- | --- |
| Android shell | Android Studio, Java, WebView |
| UI | HTML5, CSS3 |
| Logic | JavaScript |
| Storage | localStorage |
| Assets | SVG, web app manifest |

The web app runs inside an Android `WebView` and loads `app/src/main/assets/www/index.html`.

## Project Structure

```
├── index.html            # Web version
├── styles.css
├── app.js
├── manifest.webmanifest
├── assets/               # Images and icons
└── android-studio/       # Android Studio project
    └── app/src/main/assets/www/   # Web files loaded by the WebView
```

## How to Run

**Web version:** open `index.html` in a browser.

**Android version:**
1. Open Android Studio and select **Open**.
2. Choose the `android-studio` folder.
3. Wait for Gradle Sync to finish.
4. Select an emulator or a connected phone and press **Run**.

## Roadmap

- Location-based market and regional product recommendations
- Real-time market prices
- Barcode scanning with the camera
- User accounts and cloud sync

## Notes

AI-assisted tools were used during development for code scaffolding, report editing and error checking. The project scope, design decisions and final review were done by me.
