const form=document.getElementById('form');

form.addEventListener('submit',function(event){
  event.preventDefault();  
const userName=document.getElementById('userName').value;
const passWord=document.getElementById('password').value;
const userError=document.querySelector('.useralert');
const passwordError=document.querySelector('.passwordalert');
const emailPattren=/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
const passwordPattren=/^[a-zA-Z0-9!@#\$%\^\&*_=+-]{8,}$/g;
var isValid=true;

if(!emailPattren.test(userName)){
   userError.innerHTML="username don't match";
   isValid=false;
   return false;
}
else{
  userError.innerHTML="";

}
if(!passwordPattren.test(passWord)){
  passwordError.innerHTML="Password don't match";
  isValid=false;
  return false;
}
else{
  passwordError.innerHTML="";
  
 
}


return true;
  
});