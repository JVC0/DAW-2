
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword,signOut  } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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


  const submit = document.getElementById('submit');
  submit.addEventListener('click',function(event){
    event.preventDefault()
    const auth = getAuth();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert('creado cuenta')
    window.location.href = "login.html";
    console.log( window.location.href);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert('error')
  });

  })
  