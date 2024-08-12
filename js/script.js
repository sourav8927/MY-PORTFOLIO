document.addEventListener("dblclick",() =>{
  document.documentElement.requestFullscreen().catch((e)=>{

  console.log(e);
});
});

/*=====================typing animation====================*/
var typed= new Typed(".typing",{
  strings:["FullStack Developer ","Web Developer"],
  typedSpeed:100,
  BackSpeed:60,
  loop:true,

});


// progress bar
// document.addEventListener('DOMContentLoaded', () => {
//   const progressBar = document.querySelector('.progress');

//   window.addEventListener('scroll', () => {
//     const projectContainer = document.querySelector('.content');
//     const projectContainerHeight = projectContainer.scrollHeight;
//     const projectContainerOffsetTop = projectContainer.offsetTop;
//     const windowScrollTop = window.scrollY;
//     const windowHeight = window.innerHeight;
    
//     const scrollPosition = windowScrollTop + windowHeight - projectContainerOffsetTop;
//     const scrollPercentage = Math.min((scrollPosition / projectContainerHeight) * 100, 100);

//     progressBar.style.width = `${scrollPercentage}%`;
//   });
// });

/*=================================Aside====================================*/
const nav= document.querySelector(".nav"),
    navList=nav.querySelectorAll("li"),
    totalNavList=navList.length,
    allSection= document.querySelectorAll(".section"),
    totalSection= allSection.length;
    for(let i=0;i<totalNavList; i++){
      const a=navList[i].querySelector("a");
      a.addEventListener("click", function(){
        removeBackSection();
        for(let j=0;j<totalNavList; j++){
          if(navList[j].querySelector("a").classList.contains("active")){
            // allSection[j].classList.add("back-section");
            addBackSection();
          }
          navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active")
        showSection(this);
        if(window.innerWidth<1200){
          asideSectionTogglerBtn();
        }
      })
    }

    function removeBackSection(){
      for(let i=0;i<totalSection; i++){
        allSection[i].classList.remove("back-section");
      }
    }
    // function addBackSection(num){
    //   allSection[num].classList.add("back-section");
    // }

    function addBackSection(num) {
      if (num !== undefined && num >= 0 && num < totalSection) {
        allSection[num].classList.add("back-section");
      }
    }
    function showSection(element){

      for(let i=0;i<totalSection;i++){
        allSection[i].classList.remove("active");
      }
      const target= element.getAttribute("href").split("#")[1];
      console.log(target)
      document.querySelector("#" + target).classList.add("active")
    }
    function updateNav(element){
     for(let i=0;i<totalNavList;i++){
      navList[i].querySelector("a").classList.remove("active");
      const target= element.getAttribute("href").split("#")[1];
      if(target===navList[i].querySelector("a").getAttribute("href").split("#")[1]){
        navList[i].querySelector("a").classList.add("active");
      }
     }
    }
    document.querySelector(".hire-me").addEventListener("click",function(){
      const sectionIndex= this.getAttribute("data-section-index");
      console.log(sectionIndex); 
      showSection(this);
      updateNav(this);
      removeBackSection();
      addBackSection(sectionIndex);
    })
const navToggelerBtn= document.querySelector(".nav-toggler"),
      aside=document.querySelector(".aside");
      navToggelerBtn.addEventListener("click",()=>{
          asideSectionTogglerBtn();
      })
      function asideSectionTogglerBtn(){
      aside.classList.toggle("open");
      navToggelerBtn.classList.toggle("open");
      for(let i=0;i<totalSection;i++){
        allSection[i].classList.toggle("open");
      }
}