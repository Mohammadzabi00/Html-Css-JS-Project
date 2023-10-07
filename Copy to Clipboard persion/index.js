const copybtn = document.querySelector('button');
const textarea  = document.querySelector('textarea');

copybtn.addEventListener('click' , ()=> {
    textarea.select();
    let textvalue = textarea.value;
    navigator.clipboard.writeText(textvalue);
    copybtn.innerHTML = 'کپی شد';
    copybtn.style.backgroundColor = '#03a9f4'

    setTimeout(() => {
    copybtn.innerHTML = 'کپی کن';
    copybtn.style.backgroundColor = '#b3e5fc'
    }, 1500);
})

