// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABHv6OInLQBhOyYZ-z8To7crHTeVmjABE",
  authDomain: "pokemon-4d764.firebaseapp.com",
  projectId: "pokemon-4d764",
  storageBucket: "pokemon-4d764.appspot.com",
  messagingSenderId: "30698383276",
  appId: "1:30698383276:web:ecf690eae6c11f0484bc09",
  measurementId: "G-VG7CLGD0B6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // Inicializa Firestore

const submit = document.getElementById('submit');
submit.addEventListener('click', function(event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      // Signed up 
      const user = userCredential.user;
      const userId = user.uid; // Obtén el ID del usuario

      // Añade el balance a Firestore
      await setDoc(doc(db, 'users', userId), {
        balance: 1000 // Establece el balance inicial a 1000
      });

      alert('Cuenta creada y balance añadido');
      window.location.href = "login.html";
      console.log(window.location.href);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert('Error: ' + errorMessage);
    });
});