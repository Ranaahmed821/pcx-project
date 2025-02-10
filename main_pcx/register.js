const nameInput = document.getElementById("fname");
const emailInput = document.getElementById("email");
const phoneNumberInput = document.getElementById("pNumber");
const passwordInput = document.getElementById("password");
function register() {
    if (nameInput.value.trim().length == 0 || emailInput.value.trim().length == 0 || phoneNumberInput.value.trim().length == 0 || passwordInput.value.trim().length == 0) {
        alert("please enter all the following inputs")
    } else {
        fetch(registerURL + `?name=${nameInput.value.trim()}&email=${emailInput.value.trim()}&phoneNumber=${phoneNumberInput.value.trim()}&password=${passwordInput.value}`)
            .then(req => req.json())
            .then(res => {
                if (res['status'] == "fail") {
                    alert(res['message'])
                } else {
                    alert("account created")
                    window.location.href = "/login"
                }
                resetInput()
            })

    }
}

function resetInput() {
    nameInput.value = "";
    emailInput.value = "";
    phoneNumberInput.value = "";
    passwordInput.value = "";
}
