const btn = document.querySelector('.btn');
const sidebar = document.querySelector('.sidebar');


btn.addEventListener('click' , function() {
    sidebar.classList.toggle('show');
    btn.classList.toggle('opne');
})