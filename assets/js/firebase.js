// Initialize Firebase
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyC9Equ9RIIl7jdyKeuZIh08JwvcJ2sRSPw",
  authDomain: "aipalette.firebaseapp.com",
  databaseURL: "https://aipalette-default-rtdb.firebaseio.com",
  projectId: "aipalette",
  storageBucket: "aipalette.appspot.com",
  messagingSenderId: "126676877027",
  appId: "1:126676877027:web:4ddc344cebe0d8768e8fd6",
  measurementId: "G-97TQTD7M4D"
};

firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('home').addEventListener('submit', submitForm);



// Submit form
function submitForm(e){
  e.preventDefault();

  //Get value
  var name = getInputVal('name');
  var email = getInputVal('email');
  var message = getInputVal('prompt');


  // Save message
  saveMessage(name, email, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('home').reset();

}

// Function to get form value
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, prompt){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email: email,
    prompt: prompt,
  });
}
