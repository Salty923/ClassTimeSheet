//alert("connected");


    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyBooxdFFG8QgZBDRsxx9ftjQIPOPvD7DRQ",
    authDomain: "classtimesheet-b526d.firebaseapp.com",
    databaseURL: "https://classtimesheet-b526d.firebaseio.com",
    projectId: "classtimesheet-b526d",
    storageBucket: "classtimesheet-b526d.appspot.com",
    messagingSenderId: "131420537587"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  var emp =$("");
  var empPos =$("");
  

  database.ref("emp").push({
      employee: employee
  })
