const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
function login() {
    if (emailInput.value.trim().length == 0 || passwordInput.value.trim().length == 0) {
        alert("please enter all the following inputs")
    } else {
        fetch(loginURL + `?email=${emailInput.value.trim()}&password=${passwordInput.value}`)
            .then(req => req.json())
            .then(res => {
                if (res['status'] == "fail") {
                    alert("check your email and password")
                } else {
                    setCookie("userId", res["data"]["id"])
                    setCookie("email", res["data"]["email"])
                    window.location.href = "/"

                }
                resetInput();
            })
    }
}

function resetInput() {
    emailInput.value = "";
    passwordInput.value = "";
}
