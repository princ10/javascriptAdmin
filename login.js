
function login()
{

    var userEmalil = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;

     window.alert(userEmalil+" "+userPass);

     firebase.auth().signInWithEmailAndPassword(userEmalil, userPass).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
       // window.alert("Error : " + errorMessage);
      });


      


}