function add_user(){
    addUser = document.getElementById("username").value;
    localStorage.setItem("username",addUser);
    window.location="kwitter_room.html";
}