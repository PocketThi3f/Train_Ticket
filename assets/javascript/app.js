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

  // Capture Button Click
  $("#addTrain").on("click", function() {

    // Grabbed values from text boxes
    var trainName = $('#trainName').val().trim();
    var destination = $('#destination').val().trim();
    var firstTrain = $('#firstTrain').val().trim();
    var freq = $('#interval').val().trim();

    // Code for handling the push
    database.ref().push({
        trainName: trainName,
        destination: destination,
        firstTrain: firstTrain,
        frequency: freq
    })

  // Don't refresh the page!
    return false;
  });

  //Firebase watcher + initial loader HINT: .on("value")
  database.ref().on("child_added", function(childSnapshot) {

    // Log everything that's coming out of snapshot
    var newTrain = childSnapshot.val().trainName
    var newLocation = childSnapshot.val().destination
    var newFirstTrain = childSnapshot.val().firstTrain
    var newFreq = childSnapshot.val().frequency

    var currentTime = moment().format('hh:mm');

    // List of static items to appear
    $('#trainSchedule').append("<tr><td>"
      +newTrain+" </td><td> "
      +newLocation+" </td><td> "
      +newFreq+" </td><td> "+
      +" </td></tr>");


    // Handle the errors
  }, function(errorObject){

      console.log("Errors handled: " + errorObject.code)
  })