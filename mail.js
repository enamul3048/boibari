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

// Reference your database
var contactFormDB = firebase.database().ref("signupForm");

document.querySelector("form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("username");
  var email = getElementVal("email");
  var password = getElementVal("password");

  saveMessages(name, email, password);

  // Enable alert
  document.querySelector(".alert").style.display = "block";

  // Remove the alert after 3 seconds
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  // Reset the form
  document.querySelector("form").reset();
}

const saveMessages = (name, email, password) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    email: email,
    password: password,
  });
};

const getElementVal = (id) => {
  return document.querySelector(`[name="${id}"]`).value;
};
