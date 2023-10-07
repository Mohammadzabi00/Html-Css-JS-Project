const acc = document.querySelector(".accordion");
const panel = document.querySelector(".panel");

acc.addEventListener('click' , function() {
    acc.classList.toggle("active");
    if(panel.style.maxHeight){
        panel.style.maxHeight = null;
    }
    else {
        panel.style.maxHeight = panel.scrollHeight + 'px';
    }
})