const loginText = document.querySelector(".title-text .login");
      const loginForm = document.querySelector("form.login");
      const loginBtn = document.querySelector("label.login");
      const signupBtn = document.querySelector("label.signup");
      const signupLink = document.querySelector("form .signup-link a");
      signupBtn.onclick = (()=>{
        loginForm.style.marginLeft = "-50%";
        loginText.style.marginLeft = "-50%";
      });
      loginBtn.onclick = (()=>{
        loginForm.style.marginLeft = "0%";
        loginText.style.marginLeft = "0%";
      });
      signupLink.onclick = (()=>{
        signupBtn.click();
        return false;
      });

      const pass_field=document.querySelector('.pass-key');
      const showbtn=document.querySelector('.lgn');
      showbtn.addEventListener('click', function(){
        if(pass_field.type==="password"){
          pass_field.type="text";
          showbtn.textContent="HIDE";
          showbtn.style.color="#3498db";
        }else{
          pass_field.type="password";
          showbtn.textContent="SHOW";
          showbtn.style.color="222";
        }
      });