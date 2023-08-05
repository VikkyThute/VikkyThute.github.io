let MenuBtn=document.getElementById("MenuBtn");

MenuBtn.addEventListener('click',function(e){
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})


let typed=new Typed(".auto-input",{
    strings:['Front-End-Devloper!','Back-End Developer!','Java-Full-Stack-Developer!'],
    typeSpeed:80,
    backSpeed:60,
    // backDelay:1200
    loop:true
})

