function login(){

let password = document.getElementById("password").value.trim();

alert("Password Entered: " + password);

if(password === "12345"){
    window.location.href = "prank.html";
}
else{
    alert("❌ Wrong Password");
}

}

if(password=="12345"){

window.location.href="prank.html";

}
else{

alert("❌ Wrong Password");

}

}
