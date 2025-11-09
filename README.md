# Coding Hours Forecaster — Full-Stack App

Production-ready scaffold to log daily coding time, visualize history, and forecast future coding hours. Includes React frontend, Express backend, and a mock `/api/forecast`. **Now available as a mobile app for iOS and Android!**

## Structure

```
frontend/        # React (Vite) + Tailwind + Capacitor (Mobile)
backend/         # Express REST API
```

## Quickstart (Web)

```
# from repo root
npm run setup
npm run dev
```

- Backend: http://localhost:4000
- Frontend: http://localhost:5173

Set env files from `.env.example` in `backend` and `frontend`.

## Mobile App Setup

This app is now configured as a mobile app using Capacitor. You can build it for iOS and Android.

### Prerequisites

- **For iOS**: macOS with Xcode installed
- **For Android**: Android Studio with Android SDK installed
- Node.js and npm installed

### Building the Mobile App

1. **Build the frontend:**
   ```bash
   cd frontend
   npm run build
   ```

2. **Add mobile platforms** (first time only):
   ```bash
   # For iOS (macOS only)
   npm run cap:add:ios
   
   # For Android
   npm run cap:add:android
   ```

3. **Sync Capacitor** (after building):
   ```bash
   npm run cap:sync
   ```

4. **Open in native IDE:**
   ```bash
   # For iOS (opens Xcode)
   npm run cap:open:ios
   
   # For Android (opens Android Studio)
   npm run cap:open:android
   ```

5. **Run from IDE**: Use Xcode or Android Studio to build and run on a device or simulator.

### Mobile App Configuration

- **API Configuration**: Update `frontend/src/App.jsx` to set your backend API URL for mobile. By default, it uses `VITE_API_BASE_URL` environment variable or falls back to `http://localhost:4000`.
  
  **Important for mobile**: When running on a physical device, `localhost` won't work. You need to:
  - Use your computer's local IP address (e.g., `http://192.168.1.100:4000`)
  - Or deploy your backend to a public URL and use that

- **App ID**: The app ID is `com.codinghours.forecaster` (configured in `frontend/capacitor.config.json`)

### Mobile App Scripts

From `frontend/` directory:
- `npm run cap:add:ios` — Add iOS platform
- `npm run cap:add:android` — Add Android platform
- `npm run cap:sync` — Sync web assets to native projects
- `npm run cap:open:ios` — Open iOS project in Xcode
- `npm run cap:open:android` — Open Android project in Android Studio
- `npm run cap:build` — Build frontend and sync to native projects

## Scripts

- `npm run setup` — install deps in frontend & backend
- `npm run dev` — run both servers concurrently
- `npm run build` — build frontend
- `npm run lint` — placeholder

## Notes

- `/api/forecast` returns mock predictions until you connect the real model.
- Update `backend/.env` and `frontend/.env` according to your environment.
- For mobile development, ensure your backend is accessible from your device (use local IP or deploy to a server).
