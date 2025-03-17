const form=document.querySelector('.form');

form.addEventListener('submit',function(event){
  event.preventDefault();  // preventDefault function submission behaviour


  // geting the value of username & password

  const userName=document.querySelector('.userName').value;
  const password=document.querySelector('.password').value;

  // checking the username & password

  let isValid=true;

      document.querySelector('.userName-alert').textContent="";
      document.querySelector('.passWord-alert').textContent="";
      
      // check username
      const username="raja67";
      if(!username.match(userName)){
         document.querySelector('.userName-alert').textContent="Please check your userName";
         isValid=false;
   }

   // check password
   const passWord="Ra$$$6";
   if(!passWord.match(password)){
      document.querySelector('.passWord-alert').textContent="Please Enter correct password";
      isValid=false;
   }



//   if(userName==="raja67"&& password==="Ra@$$$a6"){
//    alert("succfully loged in");
//   }
//   else{
//    alert("Plese enter the correct userName or password");
//   }

});