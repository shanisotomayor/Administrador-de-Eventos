import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

// Firebase
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),

    provideFirebaseApp(() =>
      initializeApp({
        apiKey: "AIzaSyCgWael_dvLulINGSBeEnmhMg72pVbAOB4",
        authDomain: "administrador-de-eventos-app.firebaseapp.com",
        projectId: "administrador-de-eventos-app",
        storageBucket: "administrador-de-eventos-app.firebasestorage.app",
        messagingSenderId: "1050769749750",
        appId: "1:1050769749750:web:213589436c16d3f51aded7"
      })
    ),

    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ]
};
