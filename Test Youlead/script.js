const popup = document.querySelector('.pop-up');
const overlay = document.getElementById('overlay')

window.onload = function(){
  setTimeout(function(){
    popup.style.display = "none";
    overlay.style.display = "none";
  }, 4000)
}

function validateEmail(){
    var email = document.querySelector('#email');
    var error = document.querySelector('#error-email');
    
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

  function validateEmailModal(){
    var email = document.querySelector('#emailmodal');
    var error = document.querySelector('#error-emailmodal');
    
    if(!email.checkValidity()){
      error.innerHTML = "Please Enter Valid Email";  
    }     
  }  
  function resetMsgModal(){
    var error = document.querySelector('#error-emailmodal');
    if (error.innerHTML == "Please Enter Valid Email"){
      error.innerHTML = "";
    }
  }

const changeimg = document.querySelector('#sayhello')

changeimg.addEventListener("mouseover", function(){
    var img1 = document.getElementById('img-card1');
    var img2 = document.getElementById('img-card2');
    var img3 = document.getElementById('img-card3');
    var imgh1 = document.getElementById('img-cardh-1');
    var imgh2 = document.getElementById('img-cardh-2');
    var imgh3 = document.getElementById('img-cardh-3');
    imgh1.classList.remove("hide");
    imgh2.classList.remove("hide");
    imgh3.classList.remove("hide");
    img1.classList.add("hide");
    img2.classList.add("hide");
    img3.classList.add("hide");
    
})