window.onload = pageLoad;

function pageLoad() {
    document.getElementById('myForm').onsubmit = validateForm
}

function validateForm() {
    let myForm = document.forms["myForm"]
    console.log(myForm.password.value)
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
   // check password and re password
   const password = myForm.password.value
   const repassword = myForm.repassword.value
   console.log(password, repassword)
   
   if(password != repassword)
   {
       alert("not same try one more")
       return false
   }

   if(password == repassword )
   {
    alert("Ok")   
    return true
   } 

}