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
document.addEventListener('DOMContentLoaded', () => {
  const progressBar = document.querySelector('.progress');

  window.addEventListener('scroll', () => {
    const projectContainer = document.querySelector('.content');
    const projectContainerHeight = projectContainer.scrollHeight;
    const projectContainerOffsetTop = projectContainer.offsetTop;
    const windowScrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    
    const scrollPosition = windowScrollTop + windowHeight - projectContainerOffsetTop;
    const scrollPercentage = Math.min((scrollPosition / projectContainerHeight) * 100, 100);

    progressBar.style.width = `${scrollPercentage}%`;
  });
});
