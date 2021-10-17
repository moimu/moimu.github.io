
const email = document.getElementById("inputemail");
const smserror = document.querySelector("#smserror");
const reg = /^([a-zA-Z0-9]+([a-zA-Z0-9]*[_.-]?)*)@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const labelimgerror = document.querySelector("#labelimgerror");

const form = document.querySelector(".formemail");
form.addEventListener('submit', function verifica(eventoEnvio) {


    if( !email.value  ){
        smserror.innerHTML ='campo email vacio';
        smserror.style.display= "block";
        labelimgerror.style.display= "block";
        eventoEnvio.preventDefault();
    }
    else{
        if( !reg.test(email.value) ){
            smserror.innerHTML ='Please provide a valid email';
            smserror.style.display= "block";
            labelimgerror.style.display= "block";
            eventoEnvio.preventDefault();
        }
    }
    
    
});

// header min-width 956  pintar en main

// button.addEventListener('click' , verifica);
/**
 *  Mensaje de error si la email no tiene formato correcto.
 */