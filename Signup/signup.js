/* SignUP page */

 var namee = document.querySelector('#username');
var email = document.querySelector('#useremail');
var password = document.querySelector('#userpassword');
var signbtn = document.querySelector('#signup');
var userinfo = [];
if (localStorage.getItem('UserInfo')) {
    userinfo = JSON.parse(localStorage.getItem('UserInfo'))
    console.log(userinfo)
} else {
    userinfo = [];
}

function existemail() {
    for (var i = 0; i < userinfo.length; i++) {
        if (userinfo[i].uEmail.toLowerCase() == email.value.toLowerCase()) {
            return false;
        }

    }
}

function validname(namme) {
    var validname = /^[A-z]{3,15}$/;
    if (validname.test(namme)) {
        return true;
    } else {
        return false
    }

}
function validemail(email) {
    var validemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (validemail.test(email)) {
        return true;
    } else {
        return false;
    }
}
function validpassword(pass) {
    var validpassword = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;
    if (validpassword.test(pass)) {
        return true;
    } else {
        return false;
    }
}
function signup() {
    var user = {
        uName: namee.value,
        uEmail: email.value,
        uPass: password.value,
    }
    if (namee.value == '' || email.value == '' || password.value == '') {
        console.log('empty')
        document.getElementById('clicked').innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
    } else if (validname(namee.value) && validemail(email.value) && validpassword(password.value) && existemail() == false) {
        console.log('varr');
        clearform();
        document.getElementById('clicked').innerHTML = '<span class="text-danger m-3">Email is var </span>'
    } else if (validname(namee.value) && validemail(email.value) && validpassword(password.value)) {
        console.log("valid");
        document.getElementById('clicked').innerHTML = '<span class="text-success m-3">Success</span>'
        userinfo.push(user);
        clearform();
        localStorage.setItem('UserInfo', JSON.stringify(userinfo));
        goTologin();
    }
    else {
        document.getElementById('clicked').innerHTML = '<span class="text-danger m-3">Invalid Input</span>'
        document.getElementById('valid').classList.remove("d-none");

        console.log('inv')
        clearform();
    }

}

function clearform() {
    namee.value = '';
    email.value = '';
    password.value = '';
}

signbtn.addEventListener('click', signup)
function close() {
    document.getElementById('valid').classList.add("d-none");
}
document.getElementById('closebtn').addEventListener('click', close);

function goTologin(){
    var targetPage = "../index.html"; 

      window.location.href = targetPage;
}

function moveToNextInput(event, nextInputId) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById(nextInputId).focus();
    }
  }

  function clickButtonOnEnter(event, buttonId) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById(buttonId).click();
    }
  }
