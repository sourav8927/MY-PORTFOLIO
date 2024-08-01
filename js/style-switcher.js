/*===========toggle style switcher===========*/
const styleSwitcherToggle=document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click",()=>{
    console.log("hii")
    document.querySelector(".style-switcher").classList.toggle("open");
})

//hide style- switcher on scroll
window.addEventListener("scroll",()=>{
    if(document.querySelector(".style-switcher").classList.contains("open")){
        document.querySelector(".style-switcher").classList.remove("open");
    }
})

/*===========theme colors===========*/
const alternateStyles= document.querySelectorAll(".alternate-style");
function setActiveStyle(color){
    alternateStyles.forEach((style)=>{
        if(color===style.getAttribute("title")){
            style.removeAttribute("disabled");
        }else{
            style.setAttribute("disabled","true");
        }
    })
}

/*===========theme light and dark mode===========*/
const dayNight= document.querySelector(".day-night");
dayNight.addEventListener("click",()=>{
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
    const backgroundShadow=document.querySelector(".home-imgTag");
    if(document.body.classList.contains("dark")){
        backgroundShadow.style.boxShadow='0 0 20px rgba(48,46,77,9)';
    }
    else{
        backgroundShadow.style.boxShadow='none'
    }
})
window.addEventListener("load",()=>{
    if(document.body.classList.contains("dark")){
        dayNight.querySelector("i").classList.add("fa-sun");
    }else{
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})