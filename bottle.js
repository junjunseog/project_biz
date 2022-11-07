const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const login_button = document.querySelector(".login-button");

hamburger.addEventListener('click', ()=>{
   //링크 애니메이션
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //햄버거 이벤트
    hamburger.classList.toggle("toggle");
});
