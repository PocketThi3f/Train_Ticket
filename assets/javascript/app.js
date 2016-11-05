// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBB7F6KEVWQ-xdZFCi9M4ZZDlf_w0sMFZ4",
    authDomain: "chilicookoff-d5a88.firebaseapp.com",
    databaseURL: "https://chilicookoff-d5a88.firebaseio.com",
    storageBucket: "chilicookoff-d5a88.appspot.com",
    messagingSenderId: "327962698566"
  };
  firebase.initializeApp(config);

  var database = firebase.

var frequencyInSeconds = 120; // this train arrives every two minutes = 120 seconds
var nextTrain = ?; // get the start time of your train relative to today (ex: 20:30), then convert to seconds - google it!
var currentTimeInSeconds = new Date() / 1000; // divide by 1000 to convert ms to seconds
while (nextTrain < currentTime){
    nextTrain += frequency;
}