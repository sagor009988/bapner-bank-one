// add click handler 
document.getElementById("btn-submit" ).addEventListener('click',function(){
    
    const emailField=document.getElementById("user-email");
    const email=emailField.value;
   
   const passwordField=document.getElementById('user-pass');
   const password=passwordField.value
//   verify email and ppassword
     if(email=='sohel@gmail.com' && password=='love'){
       window.location.href='bank.html'
     }else{
        console.log('invalid');
     }
})