const popup = document.querySelector('.pop-up');
const overlay = document.getElementById('overlay')

window.onload = function(){
  setTimeout(function(){
    popup.style.display = "none";
    overlay.style.display = "none";
  }, 4000)
}





function validateEmail(){
    var email = document.getElementById('#email');
    var error = document.getElementById('#error-email');
    
    if(!email.checkValidity()){
      error.innerHTML = "Please Enter Valid Email";  
    }
     
  }
  
  function resetMsg(){
    var error = document.querySelector('#error-email');
    if (error.innerHTML == "Please Enter Valid Email"){
      error.innerHTML = "";
    }
  }

