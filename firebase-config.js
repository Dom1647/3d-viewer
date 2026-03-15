// Firebase SDK imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc, onSnapshot } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// DEINE Firebase Config – ERSETZE die Werte!
const firebaseConfig = {
  apiKey: "AIzaSyAMj4EPMfzFPmhN60DIaSAil3vAeR6Pxs",
  authDomain: "d-viewer-a1096.firebaseapp.com",
  projectId: "d-viewer-a1096",
  storageBucket: "d-viewer-a1096.firebasestorage.app",
  messagingSenderId: "1012952900975",
  appId: "1:1012952900975:web:f962c07df17ea974ca349a"
};

// Firebase initialisieren
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Exportieren für andere Dateien
export { db, collection, addDoc, getDocs, deleteDoc, doc, onSnapshot };
