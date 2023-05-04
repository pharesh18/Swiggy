var sidebar = document.querySelector(".sidebar-login");
var open_sidebar = document.querySelector(".login");
var close_sidebar = document.querySelector(".close-sidebar");

var signup_sidebar = document.querySelector(".sidebar-sign-up");
var open_signup_sidebar = document.querySelector(".sign-up")
var close_signup_sidebar = document.querySelector(".close-signup-sidebar");


open_sidebar.onclick = function () {
    if (signup_sidebar.style.right == "0px") {
        signup_sidebar.style.right = "-470px"
    }
    sidebar.style.right = "0px";
}

close_sidebar.onclick = function () {
    sidebar.style.right = "-470px";
}


open_signup_sidebar.onclick = function () {
    if (sidebar.style.right == "0") {
        sidebar.style.right = "-470px";
    }
    signup_sidebar.style.right = "0px";
}

close_signup_sidebar.onclick = function () {
    signup_sidebar.style.right = "-470px";
}



var text = ["Unexpected guests?", "Cooking gone wrong?", "Movie marathon?", "Game night?", "Late night at office?", "Hungry?"];
var counter = 0;
var elem = document.querySelector(".ChangeText");
var inst = setInterval(change, 3000);

function change() {
    elem.innerHTML = text[counter];
    counter++;
    if (counter >= text.length) {
        counter = 0;
    }
}