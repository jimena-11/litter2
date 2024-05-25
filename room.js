// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyD06YK1SE8E0kmuHy9laV9Pji_0P5HUJI0",
  authDomain: "kwitter93-37229.firebaseapp.com",
  databaseURL: "https://kwitter93-37229-default-rtdb.firebaseio.com",
  projectId: "kwitter93-37229",
  storageBucket: "kwitter93-37229.appspot.com",
  messagingSenderId: "160195328483",
  appId: "1:160195328483:web:8f9bda3f36ba4915e408d6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
nombre= localStorage.getItem("user")
room_name=localStorage.getItem("cuarto")
document.getElementById("user_name").innerHTML="hola "+ nombre

function add_room(){
room= document.getElementById("room_name").value
localStorage.setItem("cuarto",room)
firebase.database().ref("/").child(room).update({
  claveprueba:"estoesunvalordeprueba"
})
window.location="page.html"
}
function logout(){
  localStorage.removeItem("cuarto")
localStorage.removeItem("user")
window.location="index.html"
}
