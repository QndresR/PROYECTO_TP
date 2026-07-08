const linkToLogin = document.getElementById('already-have-account');
const linkToRegister = document.getElementById('not-have-account');

const sectionRegister = document.getElementById('form-register');
const sectionLogin = document.getElementById('form-login');

linkToRegister.addEventListener('click', (e) => {
    e.preventDefault();
    sectionLogin.classList.add('hidden');
    sectionRegister.classList.remove('hidden');
});

linkToLogin.addEventListener('click', (e) => {
    e.preventDefault();
    sectionRegister.classList.add('hidden');
    sectionLogin.classList.remove('hidden');
});