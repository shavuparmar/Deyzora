# Google Apps Script Backend Deployment Guide

This comprehensive guide covers setting up your Google Apps Script, deploying it, configuring your React frontend, security measures, error handling, and testing the integration.

## 📁 Folder Structure (Backend Integration)

```text
/src
  /components
    /contact
      SimpleContactForm.jsx    # Upgraded simple contact form
      LetsTalkWizard.jsx       # 5-Step wizard with full data payload
    /sections
      ContactForm.jsx          # Upgraded primary contact form
  /hooks
    useGoogleForms.js          # Centralized hook managing state, metadata, and fetch
  /utils
    sanitize.js                # XSS prevention and input sanitization
    validation.js              # Advanced regex validation
/google-apps-script.js         # The Apps Script backend (to be pasted in Google)
```

## 1. Google Sheets Setup

1. Create a new Google Spreadsheet.
2. In this spreadsheet, create two sheets exactly named:
   - **Contact**
   - **LetsTalk**

> **Note:** The Apps Script will automatically generate a unique `Lead ID` (e.g. `DYZ-0001`) and populate the header columns on the first submission if they are missing.

## 2. Google Apps Script Setup

1. Open your Google Spreadsheet.
2. Go to **Extensions > Apps Script**.
3. Clear any existing code in `Code.gs`.
4. Copy the entire contents of `google-apps-script.js` from your project and paste it into the editor.
5. In the script, locate the `CONFIG` object at the top:
   ```javascript
   const CONFIG = {
     TELEGRAM_BOT_TOKEN: "YOUR_TELEGRAM_BOT_TOKEN_HERE",
     TELEGRAM_CHAT_ID: "YOUR_TELEGRAM_CHAT_ID_HERE",
     SPREADSHEET_ID: "", // Leave empty to use the active spreadsheet
   };
   ```
6. Paste your credentials.
7. Click the **Save** icon (floppy disk).

## 3. Deploying as a Web App

1. Click the **Deploy** button at the top right of the Apps Script editor.
2. Select **New deployment**.
3. Click the gear icon next to **Select type** and choose **Web app**.
4. Configure as follows:
   - **Description:** Form Backend 1.0 (or anything you like)
   - **Execute as:** Me (your email)
   - **Who has access:** Anyone
5. Click **Deploy** and authorize.
6. **Copy the Web App URL** (`https://script.google.com/macros/s/...`).

## 4. Frontend Environment Setup

1. Open `.env` in your React project root.
2. Ensure you have the URL mapped correctly:
   ```env
   VITE_GOOGLE_SHEETS_WEB_APP_URL=https://script.google.com/macros/s/YOUR_URL_HERE/exec
   ```

## 5. Security Guide

- **XSS Prevention:** The `sanitize.js` utility recursively strips `<tags>` and escapes HTML characters (`&lt;`, `&gt;`) before data leaves the frontend.
- **Telegram Token Hiding:** Your Bot Token and Chat ID are exclusively stored inside Google's servers. They are never exposed in the React bundle.
- **CORS Handling:** The React app sends data as `text/plain` via `fetch()`, bypassing strict browser `OPTIONS` preflight checks, while allowing Google to parse it securely on the backend.

## 6. Error Handling Guide

- **Network Timeouts:** The `useGoogleForms` hook uses an `AbortController` set to 15 seconds. If Google hangs, the request aborts, and a clean error toast shows to the user.
- **Offline Mode:** The hook checks `navigator.onLine` and notifies the user immediately if they lack internet.
- **Retry Logic:** For basic fetch errors or timeouts, the hook automatically attempts a transparent background retry once before failing gracefully.

## 7. Testing Checklist

Before deploying your React app to production, run through this checklist locally:

- [ ] Empty fields trigger red validation text on inputs.
- [ ] Invalid emails (`test@test`) are rejected.
- [ ] Invalid phones (`123`) are rejected.
- [ ] Clicking "Next Step" in `LetsTalkWizard` without filling required fields fails correctly.
- [ ] Wizard accurately builds the Review Step (Step 5).
- [ ] Submit works correctly.
- [ ] Double-clicking "Submit" is prevented (button is disabled).
- [ ] Success Modal/Toast appears.
- [ ] Data correctly saves in Google Sheets with a `Lead ID` (e.g., `DYZ-0001`).
- [ ] Metadata (Browser, OS, Device) is captured in Sheets.
- [ ] Telegram Bot receives the highly-formatted message with `━━━━━━━━━━━━━━━━━━` separators.
