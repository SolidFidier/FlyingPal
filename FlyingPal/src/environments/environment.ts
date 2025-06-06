// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { doc, setDoc } from "firebase/firestore";

export const environment = {
  production: false,
  firebaseConfig:{
    apiKey: "AIzaSyB4bzwV8pi98EGtdX5ZTpW_PWpLa1-wTaw",
    authDomain: "flyingpal-41818.firebaseapp.com",
    projectId: "flyingpal-41818",
    storageBucket: "flyingpal-41818.firebasestorage.app",
    messagingSenderId: "986516745298",
    appId: "1:986516745298:web:3c9979876bfc6aac3bc38b"
    },
  firebase: {
  apiKey: "AIzaSyB4bzwV8pi98EGtdX5ZTpW_PWpLa1-wTaw",
  authDomain: "flyingpal-41818.firebaseapp.com",
  projectId: "flyingpal-41818",
  storageBucket: "flyingpal-41818.firebasestorage.app",
  messagingSenderId: "986516745298",
  appId: "1:986516745298:web:3c9979876bfc6aac3bc38b"
  }
  }
  const firebaseConfig = {
    apiKey: "AIzaSyB4bzwV8pi98EGtdX5ZTpW_PWpLa1-wTaw",
    authDomain: "flyingpal-41818.firebaseapp.com",
    projectId: "flyingpal-41818",
    storageBucket: "flyingpal-41818.firebasestorage.app",
    messagingSenderId: "986516745298",
    appId: "1:986516745298:web:3c9979876bfc6aac3bc38b"
    };
 
  const app =
  initializeApp(firebaseConfig);

  export const db = getFirestore(app);


  

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
