function validation() {
    var form = document.getElementById("form");
    var email = document.getElementById("email").value;
    var text = document.getElementById("text");
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email.match(pattern)){
        form.classList.add("valid")
        form.classList.remove("invalid")
    }
    else {
        form.classList.remove("valid")
        form.classList.add("invalid")
        text.innerHTML = "Please provide email address"
        text.style.color = "#FF0000"
    }
    if (email == "") {
        form.classList.remove("valid")
        form.classList.remove("invalid")
        text.innerHTML = "";
    }
}
