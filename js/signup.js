/* PROFILE CONFIGURATION */
function ToggleEmail() {
    var email = document.getElementById("email")
    email.classList.toggle("visible");
}

function ToggleRealName() {
    var realName = document.getElementById("real-name")
    realName.classList.toggle("visible");
}

function ToggleBirthday() {
    var birthday = document.getElementById("birthday")
    birthday.classList.toggle("visible");
}


/* NAVIGATION */
function SignUp() {
    var signUpDiv = document.getElementById("signUpDiv")
    var confirmDiv = document.getElementById("confirmDiv")
    signUpDiv.classList.toggle("visible")
    confirmDiv.classList.toggle("visible")
}

function EmailConfirmed() {
    var confirmDiv = document.getElementById("confirmDiv")
    var configureDiv = document.getElementById("configureDiv")
    confirmDiv.classList.toggle("visible")
    configureDiv.classList.toggle("visible")
}