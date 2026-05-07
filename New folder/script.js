
const loginForm = document.querySelector('.login-form');
const usernameInput = document.querySelector('input[type="text"]');
const passwordInput = document.querySelector('input[type="password"]');

loginForm.addEventListener('submit', function(e) {
    
    e.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

  
    if (username === "" || password === "") {
        alert("يا ريس لازم تكتب اليوزر نيم والباسورد الأول!");
        return; 
    }

    if (password.length < 6) {
        alert("الباسورد ضعيف، لازم يكون 6 حروف على الأقل.");
        return;
    }

   
    localStorage.setItem('user_name', username);
    
    alert("تم تسجيل الدخول بنجاح يا " + username);

    
});



