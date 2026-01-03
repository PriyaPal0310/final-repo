function checkEmail() {
    let email = document.getElementById("userEmail").value;
    let res = document.getElementById("response");

    if (email === "") {
        res.innerText = "Please enter a valid email.";
        res.style.color = "red";
        return false;
    } else {
        res.innerText = "Message sent successfully!";
        res.style.color = "green";
        return false;
    }
}

function scrollDown() {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
}