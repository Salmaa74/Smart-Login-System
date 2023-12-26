var userinfo = [];
if (localStorage.getItem('UserInfo')) {
    userinfo = JSON.parse(localStorage.getItem('UserInfo'))
    console.log(userinfo)
} else {
    userinfo = [];
}
function capitalizeFirstChar(str) {
    return str.substring(0, 1).toUpperCase() + str.substring(1);
  }
var username = localStorage.getItem('Username');
document.getElementById('usernameh1').innerHTML = ('Welcome ') + capitalizeFirstChar(username);


function logout(){
    localStorage.removeItem('Username')
    window.location.href = "../index.html";
}
document.getElementById('logout').addEventListener('click',logout)