let search = document.querySelector(".search-box");

document.querySelector("#search-icon").onclick= () => {
    search.classList.toggle("active");
    menu.classList.remove("active");
}

 let menu = document.querySelector('.navbar')

 document.querySelector("#menu-icon").onclick= () => {
    menu.classList.toggle("active");
    search.classList.remove("active");
 }
 //hidden Menu And Search Box On Scroll
 window.onscroll=()=>{
    menu.classList.remove("active");
    search.classList.remove("active");
 }

  //header
 window.addEventListener('scroll' , ()=>{
header.classList.toggle('shadow', window.scrollY>o);

 });