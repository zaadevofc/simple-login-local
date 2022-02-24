const valid_name = localStorage.getItem('register_name')
const valid_email = localStorage.getItem('register_email')
const valid_sandi = localStorage.getItem('register_sandi')

const login_email = localStorage.getItem('login_email')
const login_sandi = localStorage.getItem('login_sandi')

const user_login = document.getElementById('user-login')
const logout_button = document.getElementById('logout-btn')
const delete_button = document.getElementById('delete-btn')

window.onload = function () {
    if (login_email, login_sandi === null) {
        alert('Login first!!')
        window.location = 'login.html'
        return false
    } else {
        logout_button.classList.remove('hidden')
        delete_button.classList.remove('hidden')
        user_login.innerHTML =
            `
        <center class="font-sans text-md font-bold mt-20">
        <h1 class="text-2xl mb-4">Kamu Berhasil Login <span class="animate-pulse">👋🏻</span></h1><br>
        <span class="hover:shadow-inner bg-slate-200 text-yellow-700 text-md font-mono px-1 shadow-lg py-0.5 rounded-md inline-block mb-3">Username : <span class="text-green-700">${valid_name}</span></span><br>
        <span class="hover:shadow-inner bg-slate-200 text-yellow-700 text-md font-mono px-1 shadow-lg py-0.5 rounded-md inline-block mb-3">Email : <span class="text-green-700">${valid_email}</span></span><br>
        <span class="hover:shadow-inner bg-slate-200 text-yellow-700 text-md font-mono px-1 shadow-lg py-0.5 rounded-md inline-block mb-3">Sandi : <span class="text-green-700">${valid_sandi}</span></span><br>
        </center>
        `
    }
}

logout_button.addEventListener('click', function () {
    localStorage.removeItem('login_email')
    localStorage.removeItem('login_sandi')
    window.location = 'login.html'
})

delete_button.addEventListener('click', function () {
    localStorage.removeItem('register_name')
    localStorage.removeItem('register_email')
    localStorage.removeItem('register_sandi')
    localStorage.removeItem('login_email')
    localStorage.removeItem('login_sandi')
    window.location = 'register.html'
})