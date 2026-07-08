function login(){

let username=document.getElementById("username").value.trim();

let password=document.getElementById("password").value.trim();

if(username==""){

alert("Enter Username");

return;

}

if(password=="12345"){

window.location.href="prank.html";

}
else{

alert("❌ Wrong Password");

}

}