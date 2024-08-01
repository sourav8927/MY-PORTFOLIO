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


