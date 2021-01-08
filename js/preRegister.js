

$(document).ready(function(){
  $("#userSubmit").click(function(){

    var Username = document.getElementById('userName').value; 
    var Password = document.getElementById('userPassword').value;
    var Phone = document.getElementById('userPhone').value;
    var Email = document.getElementById('userEmail').value; 

    if(Username=='' || Password=='' || Phone=='' || Email==''){
        alert("All Field Required")
    }
    else { 
        if(Username.length < 4) {
          alert("Username must contain at least 4 characters!")
        }

        if(Password.length < 6) {
          alert("Password must contain at least 6 characters!")
        }

        else {
          $(".preRegister").hide();
          $(".postRegister").show();
        }
    }
    
  });
});