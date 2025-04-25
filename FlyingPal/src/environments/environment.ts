// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { doc, setDoc } from "firebase/firestore";

export const environment = {
  production: false,
  firebaseConfig:{
    apiKey: "AIzaSyCokNkalDZAlbzhv5CawHVIDtn7_ijCuIw",
    authDomain: "appdispensador-8446d.firebaseapp.com",
    projectId: "appdispensador-8446d",
    storageBucket: "appdispensador-8446d.appspot.com",
    messagingSenderId: "229485553443",
    appId: "1:229485553443:web:4f776d28bfd1f4a52dce96"
    },
  firebase: {
  apiKey: "AIzaSyCokNkalDZAlbzhv5CawHVIDtn7_ijCuIw",
  authDomain: "appdispensador-8446d.firebaseapp.com",
  projectId: "appdispensador-8446d",
  storageBucket: "appdispensador-8446d.appspot.com",
  messagingSenderId: "229485553443",
  appId: "1:229485553443:web:4f776d28bfd1f4a52dce96"
  }
  }
  const firebaseConfig = {
    apiKey: "AIzaSyCokNkalDZAlbzhv5CawHVIDtn7_ijCuIw",
    authDomain: "appdispensador-8446d.firebaseapp.com",
    projectId: "appdispensador-8446d",
    storageBucket: "appdispensador-8446d.appspot.com",
    messagingSenderId: "229485553443",
    appId: "1:229485553443:web:4f776d28bfd1f4a52dce96"
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
