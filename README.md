# Embassy of Education — Deployable Static Website

This folder is ready for static hosting.

## Local preview

- Windows: double-click `serve-local.bat`
- macOS/Linux: run `./serve-local.sh`
- Or use VS Code Live Server

Open `http://localhost:8080/`.

## Required configuration

Edit `assets/js/config.js` before launch. The site works without a third-party scheduler or map embed by falling back to WhatsApp and direct directions.

## Main technology

- HTML5
- CSS3
- Vanilla JavaScript
- No npm installation
- No database required for the launch version

Forms generate structured WhatsApp messages. Applicant answers from the Case Readiness Check are not stored as browser case data.
