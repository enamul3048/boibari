const firebaseConfig = {
  apiKey: "AIzaSyAHxelJCvTs09iDKsFHH_Gw3ev4eHJ8IbY",
  authDomain: "boibari-32d82.firebaseapp.com",
  databaseURL: "https://boibari-32d82-default-rtdb.firebaseio.com",
  projectId: "boibari-32d82",
  storageBucket: "boibari-32d82.appspot.com",
  messagingSenderId: "367266530991",
  appId: "1:367266530991:web:f2002251926405d63fb65a",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Firebase Authentication instance
var auth = firebase.auth();

// Reference the HTML elements
var emailInput = document.querySelector('.box[type="email"]');
var passwordInput = document.querySelector('.box[type="password"]');
var signInButton = document.querySelector(".btn");

signInButton.addEventListener("click", signIn);

function signIn(e) {
  e.preventDefault();
  var email = emailInput.value;
  var password = passwordInput.value;

  auth
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Sign-in successful, user is now signed in
      // You can redirect the user to the dashboard page or perform other actions.
      window.location.href = "dashboard.html"; // Redirect to the dashboard page
    })
    .catch((error) => {
      // Sign-in failed, display an error message
      var errorMessage = error.message;
      displayError(errorMessage);
    });
}

function displayError(errorMessage) {
  var errorElement = document.querySelector(".error-message");
  errorElement.textContent = errorMessage;
  errorElement.style.display = "block";
}
