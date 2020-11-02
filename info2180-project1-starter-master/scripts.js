/* Add your JavaScript to this file */

window.onload = function(){

    var btn = document.getElementsByTagName("button")[0];
    var message = document.getElementsByClassName("message")[0];
    var email=document.getElementById("email");


    btn.addEventListener("click", function(event) {

        event.preventDefault();
        if(email.value===""){

            message.innerHTML = " Please enter a valid email address";
        
        }else{

                message.innerHTML=" Thank You! Your email " + email.value + " has been added to our mailing list";
        }

    });
}