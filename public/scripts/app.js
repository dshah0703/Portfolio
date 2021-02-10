//IIFE - INVOKE IMMEDIATELY FILE EXPRESSION
(function(){

    function Start()
    {
        console.log("App Started...");
    }
    Window.addEventListener("loud",Start);
}

)

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
}