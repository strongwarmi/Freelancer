var lastScrollTop = 0;
window.addEventListener("scroll", function(){
     var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
     if (currentScroll > lastScrollTop){
       document.getElementById("nav-header").classList.add("header-in");
     }
     else {
       document.getElementById("nav-header").classList.add("header-in");
       if(currentScroll<=3){
         document.getElementById("nav-header").classList.remove("header-in");
       }
     }
     lastScrollTop = currentScroll;
} ,false);
