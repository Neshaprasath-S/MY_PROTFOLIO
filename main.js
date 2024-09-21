var typed=new Typed (".text",{
       strings:["Web Developer","Full Stack Developer","Front-end Developer"],
       typeSpeed:100,
       backSpeed:100,
       backDelay:1000,
       loop:true
})

const menuIcon = document.getElementById('menu-icon');
const navbarLinks = document.querySelectorAll('.navbar a');

menuIcon.onclick = () => {
  navbarLinks.forEach(link => {
    link.classList.toggle('show-navbar');
  });
};