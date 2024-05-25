function adduser(){
    var usuario=document.getElementById("user_name").value
    localStorage.setItem("user",usuario)
    window.location="room.html"
}