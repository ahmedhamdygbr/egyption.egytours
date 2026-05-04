
// 1. تحديد العناصر من الـ DOM
const loginForm = document.querySelector('.login-form');
const usernameInput = document.querySelector('input[type="text"]');
const passwordInput = document.querySelector('input[type="password"]');

// 2. إضافة حدث عند الضغط على زرار السابمت
loginForm.addEventListener('submit', function(e) {
    // منع الصفحة من التحميل (Refresh)
    e.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    // --- أولاً: الـ Local Validation (التأكد من البيانات محلياً) ---
    if (username === "" || password === "") {
        alert("يا ريس لازم تكتب اليوزر نيم والباسورد الأول!");
        return; // وقف الكود هنا ومكملش
    }

    if (password.length < 6) {
        alert("الباسورد ضعيف، لازم يكون 6 حروف على الأقل.");
        return;
    }

    // --- ثانياً: الـ Local Storage (تخزين البيانات في المتصفح) ---
    // بنخزن اسم المستخدم عشان نرحب بيه بعدين أو نفتكره
    localStorage.setItem('user_name', username);
    
    alert("تم تسجيل الدخول بنجاح يا " + username);

    // تحويل المستخدم لصفحة تانية مثلاً
    // window.location.href = "dashboard.html";
});



