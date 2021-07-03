var firebaseConfig = {
    apiKey: "AIzaSyDajwpEowIJae4NoBBmY9XDu7bm3QXYp0Y",
    authDomain: "picturesque-403d7.firebaseapp.com",
    databaseURL: "https://picturesque-403d7-default-rtdb.firebaseio.com",
    projectId: "picturesque-403d7",
    storageBucket: "picturesque-403d7.appspot.com",
    messagingSenderId: "778303757676",
    appId: "1:778303757676:web:97136e7d7de597b4682749"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
usersName=localStorage.getItem("Woah");
console.log(usersName);
document.getElementById("UsaName").innerHTML="Welcome"+usersName;
function getData() 
{
      firebase.database().ref("/").on('value', function(snapshot){
       document.getElementById("FireBase_output").innerHTML = "";snapshot.forEach(function(childSnapshot) {
       childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room_names =" + Room_names);
row="<div class='room_name' id="+Room_names+"onclick='redirect(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("FireBase_output").innerHTML+=row;
      //End code
      });});}
      getData();
function Roman(){
var Adds=document.getElementById("AddsRoom").value;
firebase.database().ref("/").child(Adds).update(
      {
purpose:"Add room name"
      }
);
localStorage.setItem("AddRoom" , Adds);
window.location="picturesque.html";
}