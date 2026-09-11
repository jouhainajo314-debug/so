let isOn = false;

function toggleLamp() {
    isOn = !isOn;
    
    // تشغيل صوت الكليك
    const sound = document.getElementById("clickSound");
    if (sound) {
        sound.currentTime = 0;
        sound.play().catch(e => console.log("Audio blocked"));
    }

    // تفعيل حالة الاشتعال أو الإطفاء في الصفحة
    document.body.setAttribute("data-on", isOn ? "1" : "0");
}

// دالة خاصة بالصوت للأزرار الأخرى مثل قوقل
function playClickSound() {
    const sound = document.getElementById("clickSound");
    if (sound) {
        sound.currentTime = 0;
        sound.play().catch(e => console.log("Audio blocked"));
    }
}

// دالة تخزين المعلومات والانتقال للمتجر مباشرة
function handleStoreLogin() {
    // تشغيل صوت الكليك أولاً
    playClickSound();

    // قراءة البيانات اللي عمرها الزبون
    const name = document.getElementById('username').value.trim();
    const email = document.getElementById('useremail').value.trim();
    const pass = document.getElementById('userpass').value.trim();

    // حفظ البيانات في الذاكرة المحلية (تتخبا برك كيما طلبتي)
    const userData = {
        name: name,
        email: email,
        pass: pass
    };
    localStorage.setItem('gigi_store_user', JSON.stringify(userData));

    // الانتقال المباشر لصفحة المتجر بعد جزء من الثانية باش يسمع الصوت
    setTimeout(() => {
        window.location.href = "https://es-d-31273303020260912-01a08ae2-4892-712b-bdad-56f2cb42ea70.codepen.dev/";
    }, 300);
}

// استرجاع البيانات المخزنة تلقائياً إذا عاد الزبون لصفحة التسجيل
window.addEventListener('DOMContentLoaded', () => {
    const savedUser = localStorage.getItem('gigi_store_user');
    if (savedUser) {
        try {
            const userData = JSON.parse(savedUser);
            if(document.getElementById('username')) document.getElementById('username').value = userData.name || '';
            if(document.getElementById('useremail')) document.getElementById('useremail').value = userData.email || '';
            if(document.getElementById('userpass')) document.getElementById('userpass').value = userData.pass || '';
        } catch (e) {
            console.log("Error loading user data");
        }
    }
});