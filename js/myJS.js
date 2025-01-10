var signUpName = document.getElementById("NameUp")
var signUpEmail = document.getElementById("EmailUp")
var signUpPass = document.getElementById("PassUp")

var SignUp = [];
if (localStorage.getItem("Array") !== null) {
    SignUp = JSON.parse(localStorage.getItem('Array'));
}
var btnUp = document.getElementById("btnUp");
var alert = document.querySelector(".alert");
var EAlert = document.querySelector(".E-alert");
var SAlert = document.querySelector(".S-alert");
var Up = document.querySelector(".bigOneSignUp");
var In = document.querySelector(".bigOneSignIn");
var change = document.querySelectorAll(".left button")
var x = true;

var signInEmail = document.getElementById("EmailIn")
var signInPass = document.getElementById("PassIn")
var btnIn = document.getElementById("btnIn");

var inAlr = document.getElementById("inAlert")
var E_inAlr = document.getElementById("E-inAlert")
var nav = document.getElementById("nav")
var welPage = document.getElementById("welPage")
var logOut = document.getElementById("logOut");
var outName;
var namePage = document.querySelector("#welPage h2");






btnUp.addEventListener('click', function(e) {
    e.preventDefault();
    if (signUpName.value == "" || signUpEmail.value == "" || signUpPass.value == "") {
        EAlert.classList.remove("d-none")
        setTimeout(() => {
            EAlert.classList.add('d-none');
        }, 1500);

    } else if (ExistUp() && isValidEmail() && isValidPass()) {
        SignUp.push({
            name: signUpName.value,
            Email: signUpEmail.value,
            pass: signUpPass.value
        })
        localStorage.setItem('Array', JSON.stringify(SignUp))
        alert.classList.add("d-none")
        EAlert.classList.add("d-none")
        SAlert.classList.remove("d-none")
        setTimeout(() => {
            SAlert.classList.add('d-none');
            EAlert.classList.add('d-none');
            alert.classList.add('d-none');
        }, 1500);
    } else {}
    signUpEmail.classList.remove("is-valid")
    signUpEmail.classList.remove("is-invalid")
    signUpPass.classList.remove("is-valid")
    signUpPass.classList.remove("is-invalid")
    signUpName.classList.remove("is-valid")
    signUpName.classList.remove("is-invalid")



    signUpName.value = "";
    signUpEmail.value = "";
    signUpPass.value = "";

    console.log(SignUp);

})


function ExistUp() {
    for (var i = 0; i < SignUp.length; i++) {
        if (signUpEmail.value == SignUp[i].Email || signUpName.value == SignUp[i].name || signUpPass.value == SignUp[i].pass) {
            return false;
        }
    }

    return true;
}

function ExistIn() {
    for (var i = 0; i < SignUp.length; i++) {
        if (signInEmail.value == SignUp[i].Email && signInPass.value == SignUp[i].pass) {

            outName = SignUp[i].name;
            return true;
        }
    }

    return false;
}

for (var i = 0; i < change.length; i++) {
    change[i].addEventListener('click', function() {

        if (x) {
            Up.classList.remove("d-none");
            In.classList.add("d-none");
            x = false;
        } else {
            In.classList.remove("d-none");
            Up.classList.add("d-none");
            x = true;
        }

    })
}

btnIn.addEventListener('click', function() {
    if (signInEmail.value == "" || signInPass.value == "") {
        E_inAlr.classList.remove("d-none")
        setTimeout(() => {
            E_inAlr.classList.add('d-none');
        }, 1500);


    } else if (ExistIn()) {
        nav.classList.remove("d-none")
        welPage.classList.remove("d-none");
        namePage.innerHTML = `Hello, ${outName}`
        In.classList.add("d-none")
        inAlr.classList.add("d-none")

    } else {

        inAlr.classList.remove("d-none")
        setTimeout(() => {
            inAlr.classList.add('d-none')
        }, 1500);

    }

    signInEmail.value = "";
    signInPass.value = "";

})

logOut.addEventListener('click', function() {
    nav.classList.add("d-none")
    welPage.classList.add("d-none");
    In.classList.remove("d-none")
})

//validation by regax
function isValidEmail() {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (emailRegex.test(signUpEmail.value)) {
        signUpEmail.classList.remove("is-invalid")
        signUpEmail.classList.add("is-valid")
        return true;
    }

    signUpEmail.classList.add("is-invalid")
    signUpEmail.classList.remove("is-valid")
    return false;
}

function isValidPass() {
    const passwordRegex = /^.{8,}$/;

    if (passwordRegex.test(signUpPass.value)) {

        signUpPass.classList.remove("is-invalid")
        signUpPass.classList.add("is-valid")
        return true;
    }

    signUpPass.classList.add("is-invalid")
    signUpPass.classList.remove("is-valid")
    return false;
}

function isValidName() {
    const nameRegex = /^[A-Za-z]{4,}$/;

    if (nameRegex.test(signUpName.value)) {

        signUpName.classList.remove("is-invalid")
        signUpName.classList.add("is-valid")
        return true;
    }

    signUpName.classList.add("is-invalid")
    signUpName.classList.remove("is-valid")
    return false;
}