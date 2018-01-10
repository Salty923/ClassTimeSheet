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

  var emp =$("emp").val();
  var empPos = $("empp").val();
  var start =$("start").val();
  var worked =$("worked").val();
  var rate =$("rate").val(); 
  var total =$("total").val();
  var btnadd =$("submit");

  

  //sign up with onclick event
  btnadd.on("click", e => {
      alert("clicked");
      //get email and password
      var emp = $("emp").val();
      var empPos = $("empp").val();
     

      database.ref("employee").push({
          emp: emp,
          Position: empPos
      })
  });



  
