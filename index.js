var x=document.querySelectorAll(".drum").length;


  document.addEventListener("keydown",function (event){
    
    var buttonhtml=event.key;
    makesound(buttonhtml);
    animation(buttonhtml);
  });

for(let i=0;i<x;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function (){
    
    var buttonhtml=this.innerHTML;
    makesound(buttonhtml);
    animation(buttonhtml);
  });
}
function animation(key){
 var activebtn=document.querySelector("."+key);
  activebtn.classList.add("pressed");

  setTimeout(function(){
    activebtn.classList.remove("pressed");
  },100);

}
function makesound(buttonhtml){
  switch (buttonhtml) {
    case "w":var tom1=new Audio("./sounds/tom-1.mp3");
    tom1.play(); 
      break;
    case "a":var tom2=new Audio("./sounds/tom-2.mp3");
    tom2.play();
    break;
    case "s":var tom3=new Audio("./sounds/tom-3.mp3");
    tom3.play();
    break;
    case "d":var tom4=new Audio("./sounds/tom-4.mp3");
    tom4.play();
    break;
    case "j":var snare=new Audio("./sounds/snare.mp3");
    snare.play();
    break;
    case "k":var crash=new Audio("./sounds/crash.mp3");
    crash.play();
    break;
    case "l":var kick=new Audio("./sounds/kick-bass.mp3");
    kick.play();
    break;
    default: console.log(buttonhtml);
  }
}
// document.addEventListener("keydown",function(event){
//   var key=event.key;
//   alert("the presed key is "+key);
// });
