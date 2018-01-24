// Initialize Firebase
 var config = {
    apiKey: "AIzaSyAzwAEUaLxwa0NT6iBXPI-_BF3aQLGPEzs",
    authDomain: "restaurants-64a32.firebaseapp.com",
    databaseURL: "https://restaurants-64a32.firebaseio.com",
    projectId: "restaurants-64a32",
    storageBucket: "",
    messagingSenderId: "651264921729"
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



// div for MeuList
function myFunction(x) {
  var x = document.getElementById("myDIV");
  var y = document.getElementById("mydiv")
  var z = document.getElementById("kddiv")
   if (x.style.display === "none") {
       x.style.display = "block";
       y.style.display = "none";
       z.style.display = "none";

    } else {
       x.style.display = "block";
       y.style.display = "none";
       z.style.display = "none";
    }
}

//Data base Menu List

var rootRef = firebase.database().ref().child("menulist");

rootRef.on("child_added", snap => {
 // var itemid = snap.apiKey().val();
  var itemname = snap.child("itemname").val();
  var shortcode  = snap.child("shortcode").val();
  var onlinedisplayname  = snap.child("onlinedisplayname").val();
  var subcategory  = snap.child("subcategory").val();
  var price  = snap.child("price").val();
  var minimumpreparationtime  = snap.child("minimumpreparationtime").val();
  var hsncode = snap.child("hsncode").val();
  var description = snap.child("description").val();
  var available  = snap.child("available").val();
  var mealtype  = snap.child("mealtype").val();
  var category  = snap.child("category").val();
  $("#table_body").append( "<tr><td>" + itemname + "</td><td>" + shortcode + "</td><td>" + onlinedisplayname + "</td><td>" + subcategory + "</td><td>" + price + "</td><td>" + minimumpreparationtime + "</td><td>" + hsncode + "</td><td>" + description + "</td><td>" + available + "</td><td>" + mealtype + "</td><td>" + category + "</td><td><a  data-toggle='modal' data-target='#myModal'   onclick='edit(this)' href=''>Edit<a></td>"+"<td><a onclick='DelData(this)'  href=''>Delete<a></td></tr>");
});
  
//data remove from MenuList firebase

 function DelData(x){

   itemid =  x.parentNode.parentNode.rowIndex;
  console.log(itemid);
   var rootRef = firebase.database().ref('menulist/'+itemid);
      rootRef.remove().then(function(){
      
       console.log(rootRef);
     console.log('remove successed');
     });  

}

// data edit form menulist
     function edit(x){

      var rootRef = firebase.database().ref('/menulist/10');
      rootRef.on("value", function(snapshot) {
         x =   snapshot.val();
         console.log(x);

      }, function (errorObject) {
        console.log("The read failed: " + errorObject);

    document.getElementById("itemname").value = x.itemname;
     document.getElementById("shortcode").value = x.shortcode;
     document.getElementById("onlinedisplayname").value = x.onlinedisplayname;
     document.getElementById("subcategory").value = x.subcategory;
     document.getElementById("price").value = x.price;
     document.getElementById("minimumpreprationtime").value = x.minimumpreprationtime;
     document.getElementById("hsncode").value = x.hsncode;
     document.getElementById("description").value = x.description;
     document.getElementById("available").value = x.available;
     document.getElementById("mealtype").value = x.mealtype;
     document.getElementById("category").value = x.category;
     console.log(itemname);

        $("#upbody").append("<tr><td>" + x.itemname + "</td><td>" + x.shortcode + "</td><td>" + x.onlinedisplayname + "</td><td>" + x.subcategory + "</td><td>" + x.price + "</td><td>" + x.minimumpreparationtime + "</td><td>" + x.hsncode + "</td><td>" + x.description + "</td><td>" + x.available + "</td><td>" + x.mealtype + "</td><td>" + x.category + "</td></tr>");

      });



    //   var rootRef = firebase.database().ref('/menulist/10');
      
    //    rootRef.on("child_added", snap => {
 
    //    var itemname = snap.child("itemname").val();
    //    var shortcode  = snap.child("shortcode").val();
    //    var onlinedisplayname  = snap.child("onlinedisplayname").val();
    //    var subcategory  = snap.child("subcategory").val();
    //    var price  = snap.child("price").val();
    //    var minimumpreparationtime  = snap.child("minimumpreparationtime").val();
    //   var hsncode = snap.child("hsncode").val();
    //    var description = snap.child("description").val();
    //    var available  = snap.child("available").val();
    //    var mealtype  = snap.child("mealtype").val();
    //   var category  = snap.child("category").val();

    //    console.log(itemname+' '+shortcode+' '+onlinedisplayname+' '+subcategory+' '+price+' '+minimumpreparationtime+' '+hsncode+' '+description+' '+available+' '+mealtype+' '+category);

    //  // $("#upbody").append( "<tr><td>" + itemname + "</td><td>" + shortcode + "</td><td>" + onlinedisplayname + "</td><td>" + subcategory + "</td><td>" + price + "</td><td>" + minimumpreparationtime + "</td><td>" + hsncode + "</td><td>" + description + "</td><td>" + available + "</td><td>" + mealtype + "</td><td>" + category + "</td></tr>");
    //  });

 }

// div for caption

  function  myfunction(){
    
    var x = document.getElementById("mydiv");
    var y = document.getElementById("myDIV")
    var z = document.getElementById("kddiv")
  if (x.style.display === "none") {
      x.style.display = "block";
      y.style.display = "none";
      z.style.display = "none";

   } else {
     
      x.style.display = "block";
      y.style.display = "none";
      z.style.display = "none";
   }
  } 

// for caption table list


var rootRef = firebase.database().ref().child("tables");

rootRef.on("child_added", snap => {
  //var itemid = snap.apiKey().val();
  var status = snap.child("status").val();
  var tableid  = snap.child("tableid").val();
  var tablename  = snap.child("tablename").val();
  var totalprice  = snap.child("totalprice").val();
 $("#table_body1").append("<tr id='col'><td>"+status +"</td><td>"+tableid +"</td><td>"+tablename +"</td><td>"+totalprice +"</td></tr>");


 //itemid =  x.parentNode.parentNode.rowIndex;

 if(status === '0'){

  document.getElementById('col').style.backgroundColor='green';

 }else if( status == '1' ){
  document.getElementById('col').style.backgroundColor='green';

 }

});



// kitchen display List
function  mykdFunction(){
    
  var x = document.getElementById("kddiv");
  var y = document.getElementById("myDIV")
  var z = document.getElementById("mydiv")
  
if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "none";
    z.style.display = "none";
 } else {
   
    x.style.display = "block";
    y.style.display = "none";
    z.style.display = "none";
 }
}


var rootRef = firebase.database().ref().child("tables");

 rootRef.on("child_added", snap => {

  var tableid  = snap.child("tableid").val();

  var rootRef = firebase.database().ref().child("booked/"+tableid);
  rootRef.on("child_added", snap => {
    var captainName = snap.child("captainName").val();
   var itemPrice  = snap.child("itemPrice").val();
    var itemQuantity  = snap.child("itemQuantity").val();
    var searchItem = snap.child("searchItem").val();
    var tableNo = snap.child("tableNo").val();
  
   $("#table_body2").append("<tr id='col'><td>"+captainName +"</td><td>"+itemPrice +"</td><td>"+itemQuantity +"</td><td>"+searchItem +"</td><td>"+ tableNo  +"</td></tr>");
   }
 );

}) 




