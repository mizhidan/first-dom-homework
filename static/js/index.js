var username = document.getElementById("username").value;
var password = document.getElementById("password").value;

document.getElementById("submit").addEventListener('click',checkUserInfo)

function checkUserInfo() {
    if(username == '123' && password == '123') {
        alert('login success!');
    } else {
        document.getElementById("password").innerHTML = '';
    }
}