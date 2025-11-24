import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes), provideFirebaseApp(() => initializeApp({ projectId: "administrador-de-eventos-app", appId: "1:1050769749750:web:213589436c16d3f51aded7", storageBucket: "administrador-de-eventos-app.firebasestorage.app", apiKey: "AIzaSyCgWael_dvLulINGSBeEnmhMg72pVbAOB4", authDomain: "administrador-de-eventos-app.firebaseapp.com", messagingSenderId: "1050769749750"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())
  ]
};
