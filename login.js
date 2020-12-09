const { Callbacks } = require("jquery");

function validate(Callback) {
    if ($("#user").val() == "admin" && $("#pass").val() == "12345") {
        Callback();
    } else {
        alert("Invalid Credentials");
    }
}

function Callback() {
    $("#loginform").attr("action", "main.html");
}
// DESIGNED AND DEVELOPED BY MUHAMMED SHIYAD CM