// Firebase configuration for NEXORA
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyARrjiWC7olauJ_RJxmVeyAMkIZsfSChmg",
    authDomain: "nexora-9b676.firebaseapp.com",
    projectId: "nexora-9b676",
    storageBucket: "nexora-9b676.firebasestorage.app",
    messagingSenderId: "223787650027",
    appId: "1:223787650027:web:19807412f7efdde60467ae"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };
