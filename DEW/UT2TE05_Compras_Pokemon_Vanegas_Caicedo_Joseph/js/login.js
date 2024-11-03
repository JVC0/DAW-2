// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";

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

  signInWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      const user = userCredential.user;
      const userId = user.uid; 

      const userDoc = await getDoc(doc(db, 'users', userId));
      if (userDoc.exists()) {
        const userData = userDoc.data();
        const balance = userData.balance; 

        alert('Login exitoso.');
        window.location.href = "index.html";
      } else {
        alert('No se encontró el documento del usuario en la base de datos.');
      }
    })
    .catch((error) => {
      const errorMessage = error.message;
      alert('Error de login: ' + errorMessage);
    });
});