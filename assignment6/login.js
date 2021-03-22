window.onload = loginLoad;
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const usernameURL = urlParams.get("username")
const passwordURL = urlParams.get("password")
window.onload = loginLoad;
function loginLoad() 
{
   var  validateForm = document.getElementById("myLogin")
   validateForm.onsubmit = checkLogin;
}

function checkLogin() {
    let myLogin = document.forms["myLogin"]

    var password = document.forms["myLogin"]["password"]
    var username = document.forms["myLogin"]["username"]
    //var username = myLogin.username.value
    //ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
    if (username.value != usernameURL || password.value != passwordURL) 
    {
        alert("not same try one more")
        return false
    }

    if (username.value == usernameURL || password.value == passwordURL) 
    {
        alert("login complete");
        return true;
    }
    else
    {
        alert("try again")
        return false
    }

}

