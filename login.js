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
  var m = document.getElementById("login_div")
   if (x.style.display === "none") {
       x.style.display = "block";
       y.style.display = "none";
       z.style.display = "none";
       m.style.display = "none";

    } else {
       x.style.display = "block";
       y.style.display = "none";
       z.style.display = "none";
       m.style.display = "none";
      
    }
}

//Data base Menu List


var rootRef = firebase.database().ref().child("menulist/");  

rootRef.on("child_added", snap => {
  var k = snap.key;

 // console.log(k);
  // var itemid = snap.key();
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
  $("#table_body").append( "<tr><td>" + itemname + "</td><td>" + shortcode + "</td><td>" + onlinedisplayname + 
  "</td><td>" + subcategory + "</td><td>" + price + "</td><td>" + minimumpreparationtime + "</td><td>" + hsncode + "</td><td>" + description + "</td><td>"
   + available + "</td><td>" + mealtype + "</td><td>" + category + 
   "</td><td><a  data-toggle='modal' data-target='#myModal' id='"+k+"' onclick='edit(this.id)' href=''>Edit<a></td>"+"<td><a id='"+k+"' onclick='DelData(this.id)'  href=''>Delete<a></td></tr>");
});


//data remove from MenuList firebase 

function DelData(id){

  console.log(id);

    var rootRef = firebase.database().ref().child("menulist/"+id);
    rootRef.remove().then(function() {
      var x = document.getElementById("myDIV");
      var m = document.getElementById("login_div")
      x.style.display = "block";
      m.style.display = "none";
      //alert("delete successfully");  
      console.log("remove successed");
    }); 
  }
 


// data edit form menulist
     function edit(id){

     // console.log(id);
   
      // itemid =  x.parentNode.parentNode.rowIndex+1;
       var rootRef = firebase.database().ref('/menulist/'+id);
          rootRef.on("value", function(snapshot) {
        //  console.log( snapshot.val());
          document.getElementById('itemname').value = snapshot.val().itemname;
          document.getElementById('shortcode').value = snapshot.val().shortcode;
          document.getElementById('onlinedisplayname').value = snapshot.val().onlinedisplayname;
          document.getElementById('subcategory').value = snapshot.val().subcategory;
          document.getElementById('price').value = snapshot.val().price;
          document.getElementById('minimumpreparationtime').value = snapshot.val().minimumpreparationtime;
          document.getElementById('hsncode').value = snapshot.val().hsncode;
          document.getElementById('description').value = snapshot.val().description;
          document.getElementById('available').value = snapshot.val().available;
          document.getElementById('mealtype').value = snapshot.val().mealtype;
          document.getElementById('category').value = snapshot.val().category;
       
       });
      }


      function MenuListUpdate(id){

        //  console.log(id);
         
        var rootRef = firebase.database().ref();
        itemname = document.getElementById('itemname').value
        shortcode = document.getElementById('shortcode').value
        onlinedisplayname = document.getElementById('onlinedisplayname').value
        subcategory = document.getElementById('subcategory').value
        price = document.getElementById('price').value
        minimumpreparationtime = document.getElementById('minimumpreparationtime').value
        hsncode = document.getElementById('hsncode').value
        description = document.getElementById('description').value
        available = document.getElementById('available').value
        mealtype = document.getElementById('mealtype').value
        category = document.getElementById('category').value
    
        data = {itemname,shortcode,onlinedisplayname,subcategory,price,minimumpreparationtime,hsncode,description,available,mealtype,category}
       // itemid =  x.parentNode.parentNode.rowIndex+1;
        rootRef.child('menulist/10').update(data);

        console.log(id);
    
      }

 

  //menuLiat add 
     
    function MenuListAdd(){

      var rootRef = firebase.database().ref().child("menulist/");
    
      var newPostRef = rootRef.limitToLast(1).on('child_added', function(childSnapshot) {

         snap = childSnapshot.key;
         snap++; 
  
});
    
  var x = snap;

  itemname = document.getElementById('itemnameadd').value
  shortcode = document.getElementById('shortcodeadd').value
  onlinedisplayname = document.getElementById('onlinedisplaynameadd').value
  subcategory = document.getElementById('subcategoryadd').value
  price = document.getElementById('priceadd').value
  minimumpreparationtime = document.getElementById('minimumpreparationtimeadd').value
  hsncode = document.getElementById('hsncodeadd').value
  description = document.getElementById('descriptionadd').value
  available = document.getElementById('availableadd').value
  mealtype = document.getElementById('mealtypeadd').value
  category = document.getElementById('categoryadd').value
  data = {itemname,shortcode,onlinedisplayname,subcategory,price,minimumpreparationtime,hsncode,description,available,mealtype,category}
 // itemid =  x.parentNode.parentNode.rowIndex+1;
  var rootRef = firebase.database().ref().child("menulist/").child(snap).set(data);
  
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
  //table add
  function TableListAdd(){

    var rootRef = firebase.database().ref().child("tables/");

    var newPostRef = rootRef.push();

    console.log(newPostRef);
  

status = document.getElementById('status').value
tableid = document.getElementById('tableid').value
tablename = document.getElementById('tablename').value
totalprice = document.getElementById('totalprice').value
data = {status,tableid,tablename,totalprice}
// itemid =  x.parentNode.parentNode.rowIndex+1;
newPostRef.set(data);

}










// for caption table list


var rootRef = firebase.database().ref().child("tables");

rootRef.on("child_added", snap => { 
  // var myjson = JSON.stringify(snap.val());
  // console.log(myjson);
  //var itemid = snap.apiKey().val();
  var key = snap.key;
 // console.log(key)
  var status = snap.child("status").val();
  var tableid  = snap.child("tableid").val();
  var tablename  = snap.child("tablename").val();
  var totalprice  = snap.child("totalprice").val();
 $("#table_body1").append("<tr><td><button id= '"+key+"'  onclick='mybutton(this.id)' href=''>"+tablename +"</button></td></tr>");

//  $( "button" ).click(function() {
//   $( "#d2" ).empty();
// });
 
});

function mybutton(id){

  console.log(id);

   //var row= captain_table_details.rows.lenght;
 //  captain_table_details.deleteRow(0);
     var rootRef = firebase.database().ref('tables/'+id);
      rootRef.on("value", function(snap) {

      var status = snap.child("status").val();
      var tableid  = snap.child("tableid").val();
      var tablename  = snap.child("tablename").val();
      var totalprice  = snap.child("totalprice").val();
      $("#captain_table_details").append("<tr><td>"+status +"</td><td>"+tableid +"</td><td>"+tablename +"</td><td>"+totalprice +"</td></tr>");

     // captain_table_details.deleteRow(0);
   });

  }




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

  var tablename  = snap.child("tablename").val();
  console.log(tablename);

  var rootRef = firebase.database().ref().child("bookedmain/"+tablename);
  rootRef.on("child_added", snap => {
    var k = snap.key;
  
    var rootRef = firebase.database().ref().child("bookedmain/"+tablename).child(""+k);
    rootRef.on("child_added", snap => {
      var captainName = snap.child("captainName").val();
       itemPrice  = snap.child("itemPrice").val();
       var itemQuantity  = snap.child("itemQuantity").val();
       var searchItem = snap.child("searchItem").val();
       var tableNo = snap.child("tableNo").val();
     
      $("#table_body2").append("<tr id='col'><td>"+captainName +"</td><td>"+itemPrice +"</td><td>"+itemQuantity +"</td><td>"+searchItem +"</td><td>"+ tableNo  +"</td></tr>");
      }
      );
    }
  );
}) 




