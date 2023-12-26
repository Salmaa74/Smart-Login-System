var userinfo = [];
if (localStorage.getItem('UserInfo')) {
    userinfo = JSON.parse(localStorage.getItem('UserInfo'))
    console.log(userinfo)
} else {
    userinfo = [];
}
function clearform() {
    loginemail.value = '';
    loginpassword.value = '';
}

var loginemail = document.querySelector('#loginemail');
var loginpassword = document.querySelector('#loginpassword');
var btn=document.querySelector('#logbtn');


function exitlogin() {
    for (var i = 0; i < userinfo.length; i++) {
        if (userinfo[i].uPass == loginpassword.value&&userinfo[i].uEmail.toLowerCase() == loginemail.value.toLowerCase()) {
            localStorage.setItem('Username',userinfo[i].uName);
            return true;
        }
    }
}

function login() {
    if (loginemail.value == ''|| loginpassword.value == '') {
        console.log('empty');
        document.getElementById('clicked').innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
    } else if (exitlogin() == true ) {
        console.log('true');
        clearform();
        gotohome();
    } else {
        console.log('false');
        clearform();
        document.getElementById('clicked').innerHTML = '<span class="text-danger m-3">incorrect email or password</span>'
    }

}
function gotohome(){
    var targetPage = "Home/home.html"; 
      window.location.href = targetPage;
}
btn.addEventListener('click',login);

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


