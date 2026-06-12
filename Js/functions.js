const nombre = document.getElementById("nombreInput");
const correo = document.getElementById("emailInput");
const telefono = document.getElementById("telInput");
const mensaje = document.getElementById("mensajeInput");

const formButton = document.getElementById("formButton");
const seccionAlerta = document.getElementById("alertaSitio");

//Para validar nombre y email
const expName =/^[a-zA-Z]{3,}$/;
const expEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

//Para añadir la alerta
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

    seccionAlerta.append(wrapper)
}


formButton.addEventListener("click", (e)=>{

    e.preventDefault();
    //Validar nombre
    if(
    nombre.value.length === 0 ||
    !expName.test(nombre.value) ||
    correo.value.length === 0 ||
    !expEmail.test(correo.value) ||
    mensaje.value.length === 0
    ){
        appendAlert('Uno o más datos erroneos, revise su información.', 'warning');
    } 
    else{
        //FUNCIÓN DEL CORREO
        const templateParams = {
            nombre: nombre.value,
            correo: correo.value,
            telefono: telefono.value,
            mensaje: mensaje.value
        };

        emailjs.send(
            "service_bk7k02h",
            "template_sgnb35o",
            templateParams
        )
        .then(() => {

            appendAlert(
                'Datos válidos. Su mensaje ha sido enviado',
                'success'
            );

            nombre.value = "";
            correo.value = "";
            telefono.value = "";
            mensaje.value = "";

        })
        .catch((error) => {

            appendAlert(
                'Error al enviar el correo',
                'danger'
            );

            console.error(error);

        });
    }
    
});