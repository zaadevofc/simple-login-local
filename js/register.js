const register_name = document.getElementById('name');
const register_email = document.getElementById('email');
const register_sandi = document.getElementById('sandi');
const register_button = document.getElementById('register-btn');


const cek_reg_name = localStorage.getItem('register_name')
const cek_reg_email = localStorage.getItem('register_email')
const cek_reg_sandi = localStorage.getItem('register_sandi')
const cek_log_email = localStorage.getItem('login_email')
const cek_log_sandi = localStorage.getItem('login_sandi')

if (cek_reg_name, cek_reg_email, cek_reg_sandi, cek_log_email, cek_log_sandi != null) {
    window.location = 'home.html'
}

register_button.addEventListener('click', function () {

    const valid_name = localStorage.getItem('register_name')
    const valid_email = localStorage.getItem('register_email')
    const valid_sandi = localStorage.getItem('register_sandi')

    if (register_name.value === valid_name || register_email.value === valid_email || register_sandi.value === valid_sandi) {
        alert('Your account has been actived! Login Now!!')
        return false
    }

    if (register_name.value, register_email.value, register_sandi.value === '') {
        alert('Data not valid ❌')
        localStorage.removeItem('register_name')
        localStorage.removeItem('register_email')
        localStorage.removeItem('register_sandi')
        return false
    } else {
        localStorage.setItem('register_name', register_name.value)
        localStorage.setItem('register_email', register_email.value)
        localStorage.setItem('register_sandi', register_sandi.value)
        alert('Register success ✅')
        window.location = 'login.html'
    }

})