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
cuarto=localStorage.getItem("cuarto")




function send(){
   mensaje= document.getElementById("msg").value
   firebase.database().ref(cuarto).push({
    name:nombre,
    mesage:mensaje,
    like:0
   })
   document.getElementById("msg").value=""
   
}
function salir(){
localStorage.removeItem("cuarto")
localStorage.removeItem("user")
window.location="index.html"
}
send()
