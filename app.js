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


//Reference messages collection
var messagesRef = firebase.database().ref('messages');

//Listen for form submit
 document.getElementById('RegisterForm').addEventListener('submit',
 submitForm);

//submit form
 function submitForm(e){
   e.preventDefault();

    //get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var company = getInputVal('password');
    var phone = getInputVal('phone');



  //save message
   saveMessage(name,email,password,phone);
   
   //show alert
   document.querySelector('.alert').style.display = 'block';

   //hide alert after 3 seconds

   setTimeout(function(){

    document.querySelector('.alert').style.display = 'none';

   },3000);


   //clear form
   document.getElementById('RegisterForm').reset();


 }


 //function to get get form values  
  
    function getInputVal(id){
        return document.getElementById(id).value;
    }


    //save message to firebase

    function saveMessage(name,emai,password,phone){
        var newMessageRef = messagesRef.push();
        
        newMessageRef.set({

            name: name,
            email: emai,
            password: password,
            phone: phone

        });


        //read data form firebase 
        var database = firebase.database();
        var messageRef = database.ref().child('messages')
        messageRef.once('value', function(snapshot){
            console.log('Key:' + JSON.stringify(snapshot.Key));
            console.log('val:' + JSON.stringify(snapshot.val()));
            console.log('numChildren:' + JSON.stringify(snapshot.numChildren()));
            snapshot.forEach(function(item){
                console.log(JSON.stringify(item.val()));
            })
        })



     
 }

