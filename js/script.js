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
    console.log(totalNavList);
    console.log(totalSection);
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
    document.querySelector(".hire-for-sketch").addEventListener("click",function(){
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
// Function to open the form modal
function openForm() {
  document.getElementById("formModal").style.display = "block";
}

// Function to close the form modal
function closeForm() {
  document.getElementById("formModal").style.display = "none";
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
  const modal = document.getElementById("formModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
function openForm() {
  document.getElementById("formModal").style.display = "flex";
}

function closeForm() {
  document.getElementById("formModal").style.display = "none";
}


/*games*/
const backgroundElement = document.querySelector('.background');

// Array of background images
const backgroundImages = [
  "url('images/gamebackground.jpg')",
  "url('images/gamebg2.jpg')",
  "url('images/gamebg3.jpg')"
];

let currentImageIndex = 0;

// Function to change background image
function changeBackgroundImage() {
  // Update the background image
  backgroundElement.style.backgroundImage = backgroundImages[currentImageIndex];
  
  // Move to the next image, loop back to the first one
  currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
}

// Set interval to change the background image every second (1000 ms)
setInterval(changeBackgroundImage, 1000);

// Initial background image
changeBackgroundImage();

// JavaScript code to handle form submission counter

// Function to open the form modal
function openForm() {
  document.getElementById("formModal").style.display = "block";
}

// Function to close the form modal
function closeForm() {
  document.getElementById("formModal").style.display = "none";
}

// Function to increment the counter
function confirmSubmission() {
  // Select the counter element
  const counterElement = document.querySelector(".workshop-schedule-text");
  // Parse the current counter value as an integer
  let currentCount = parseInt(counterElement.textContent);
  // Increment the count
  currentCount += 1;
  // Update the counter element with the new count
  counterElement.textContent = currentCount;
}

// Add an event listener to the window to close the modal when clicking outside it
window.onclick = function(event) {
  const modal = document.getElementById("formModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
