var maill=document.getElementById('maillog');
var passs=document.getElementById('pass');
var logg=document.getElementById('log');
var namesign=document.getElementById('name1');
    var mailsign=document.getElementById('mail1');
    var passign=document.getElementById('pass1');
    var log1=document.getElementById('log1');
    var form11=document.getElementById('form1');
    var form22=document.getElementById('form2');
    var home=document.getElementById('home');
    var out=document.getElementById('out');
    var signbtn=document.getElementById('sign');

    var emailArray=[];
    var passwordArray=[];




   logg.addEventListener('click',function(){
      
     
     form11.classList.add("d-none");
     form22.classList.remove("d-none");

     login();
    
    })
    log1.addEventListener('click',function(){
      
      form22.classList.add("d-none");
     form11.classList.remove("d-none");
     register();
      
     })

   
     function login(){
      

      // var email = document.getElementById("se").value;
      // var password = document.getElementById("sp").value;

      var i = emailArray.indexOf(maill);

      if(emailArray.indexOf(maill) == -1){
          if (maill == ""){
              alert("Email required.");
              return ;
          }
          alert("Email does not exist.");
          
          
          return ;
      }
      else if(passwordArray[i] != passs){
          if (passs == ""){
              alert("Password required.");
              return ;
          }
          alert("Password does not match.");
          return ;
      }
      else {
          alert(maill + " yor are login Now  welcome to our website.");
         
          document.getElementById("maillog").value ="";
          document.getElementById("pass").value="";
          return ;
      }

  }
   
  function register(){
  
   

   if (mailsign == ""){
       alert("Email required.");
       return ;
   }
   else if (passign == ""){
       alert("Password required.");
       return ;
   }
   else if (namesign == ""){
       alert("Password required.");
       return ;
   }
   
   else if(emailArray.indexOf(mailsign) == -1){
       emailArray.push(mailsign);
       passwordArray.push(passign);

       alert("  Thanks for registration. Try to login Now");

       document.getElementById("name1").value ="";
       document.getElementById("mail1").value="";
       document.getElementById("pass1").value="";
   }
   else{
       alert(" is already register.");
       return ;
   }
}


signbtn.addEventListener('click',function(){
   home.classList.remove('d-none');
   form11.classList.add("d-none");
   form22.classList.add("d-none");
})

out.addEventListener('click',function(){
   
   form11.classList.remove("d-none");
  
})
  

      
   
  



    
    
    
    
    
    
    
   