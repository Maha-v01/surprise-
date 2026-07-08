alert("Script Loaded");
function login() {

    let username = document.getElementById("user").value.trim();
    let password = document.getElementById("pass").value.trim();

    if (username === "") {
        alert("Please enter username");
        return;
    }

    if (password === "") {
        alert("Please enter password");
        return;
    }

    if (password === "12345") {
        window.location.href = "prank.html";
    } else {
        alert("❌ Wrong Password");
    }
}
