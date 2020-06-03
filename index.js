$(document).ready(function(){
    $(".rocket").click(function(){
      $(".rocket").animate({
        left: '2500px'
        
        
      });
    });
  });




document.querySelector(".anthem-img").addEventListener("click",youclick);

function youclick(){
    var audio = new Audio("music/backgroundmus.mp3");
    audio.play();
}

