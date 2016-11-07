// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBB7F6KEVWQ-xdZFCi9M4ZZDlf_w0sMFZ4",
    authDomain: "chilicookoff-d5a88.firebaseapp.com",
    databaseURL: "https://chilicookoff-d5a88.firebaseio.com",
    storageBucket: "chilicookoff-d5a88.appspot.com",
    messagingSenderId: "327962698566"
  };
  firebase.initializeApp(config);

  var database = firebase.database()
  // Initial Values
  var trainName = "";
  var destination = "";
  var firstTrain = 0;
  var freq = "";


  // Capture Button Click
  $("#addTrain").on("click", function() {

    // Grabbed values from text boxes
    trainName = $('#trainName').val().trim();
    destination = $('#finalLocation').val().trim();
    firstTrain = $('#trainTime').val().trim();
    freq = $('#interval').val().trim();


    // Code for handling the push
    database.ref().push({
        name: name,
        email: email,
       age: age,
       comment: comment
    })

  // Don't refresh the page!
    return false;
  });

  //Firebase watcher + initial loader HINT: .on("value")
  database.ref().on("value", function(snapshot) {

    // Log everything that's coming out of snapshot
    console.log(snapshot.val());
    console.log(snapshot.val().name);
    console.log(snapshot.val().email);
    console.log(snapshot.val().age);
    console.log(snapshot.val().comment);

    // Change the HTML to reflect
    $("#namedisplay").html(snapshot.val().name);
    $("#emaildisplay").html(snapshot.val().email);
    $("#agedisplay").html(snapshot.val().age);
    $("#commentdisplay").html(snapshot.val().comment);


    // Handle the errors
  }, function(errorObject){

      console.log("Errors handled: " + errorObject.code)
  })

var frequencyInSeconds = 120; // this train arrives every two minutes = 120 seconds
var nextTrain = ?; // get the start time of your train relative to today (ex: 20:30), then convert to seconds - google it!
var currentTimeInSeconds = new Date() / 1000; // divide by 1000 to convert ms to seconds
while (nextTrain < currentTime){
    nextTrain += frequency;
}