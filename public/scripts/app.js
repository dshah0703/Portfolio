//IIFE - INVOKE IMMEDIATELY FILE EXPRESSION
(function(){

    function Start()
    {
      console.log("App Started...");

       let deleteButtons = document.querySelectorAll('.btn-danger')

       for(button of deleteButtons)
       {
         button.addEventListener('click', (event) => 
         {
           if(!confirm("Are you sure you want to Delete?"))
           {
             event.preventDefault();
             window.location.assign('/business-list');
           }
         });
       }

    }
    window.addEventListener("loud",Start);
})();

window.onscroll = function() {scrollFunction()};

function scrollFunction()
{
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
} 