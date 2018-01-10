// Initialize Firebase
 var config = {
    apiKey: "AIzaSyB0cmAlCOxGaLnreJpCFxPfm714ihe5p2U",
    authDomain: "javascriptform.firebaseapp.com",
    databaseURL: "https://javascriptform.firebaseio.com",
    projectId: "javascriptform",
    storageBucket: "",
    messagingSenderId: "183092384712"
  };

  firebase.initializeApp(config);




  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.

    document.getElementById("user-div").style.display = "block";
    document.getElementById("login_div").style.display = "none";
    document.getElementById("wrapper").style.display = "block";

    var user = firebase.auth().currentUser;

    if(user != null)
    {
        var email_id = user.email;
        document.getElementById("user_para").innerHTML = "welcome user : " + email_id;
       
    }



    } else {
      // No user is signed in.
    
      document.getElementById("user-div").style.display = "none";
      document.getElementById("login_div").style.display = "block";
      document.getElementById("wrapper").style.display = "none";

    }
  });


  function login()
  {
      var userEmail = document.getElementById("email_field").value;
      var userPass = document.getElementById("password_field").value;

     
      firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        window.alert("error : " + errorMessage);
        // ...
      
      });

  }

  function Logout()
  {
    firebase.auth().signOut();

    document.getElementById('LoginForm').reset();

  }
//tools button javascript

function openLeftMenu() {
  document.getElementById("leftMenu").style.display = "block";
}
function closeLeftMenu() {
  document.getElementById("leftMenu").style.display = "none";
}

function openRightMenu() {
  document.getElementById("rightMenu").style.display = "block";
}
function closeRightMenu() {
  document.getElementById("rightMenu").style.display = "none";
}

//side nav
$("#menu-toggle").click(function(e) {
  e.preventDefault();
  $("#wrapper").toggleClass("active");
});

