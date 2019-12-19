var username = document.getElementById("username");
var password = document.getElementById("password");
document.getElementById("submit").addEventListener('click',checkUserInfo)

function checkUserInfo() {

    if(username.value == '123' && password.value == '123') {
        alert('login success!');
    } else if(username.value !== '123') {
        alert('username incorrect!');
        password.value = '';
    } else {
        alert('password incorrect!');
        password.value = '';
    }
}