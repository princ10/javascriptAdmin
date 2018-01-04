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
 document.getElementById('contactForm').addEventListener('submit',
 submitForm);

//submit form
 function submitForm(e){
   e.preventDefault();

    //get values
    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');



  //save message
   saveMessage(name,company,email,phone);
   
   //show alert
   document.querySelector('.alert').style.display = 'block';

   //hide alert after 3 seconds

   setTimeout(function(){

    document.querySelector('.alert').style.display = 'none';

   },3000);


   //clear form
   document.getElementById('contactForm').reset();


 }


 //function to get get form values  
  
    function getInputVal(id){
        return document.getElementById(id).value;
    }


    //save message to firebase

    function saveMessage(name,company,emai,phone){
        var newMessageRef = messagesRef.push();
        
        newMessageRef.set({

            name: name,
            company: company,
            email: emai,
            phone: phone

        });

    }

