const nombre = document.getElementById("nombreInput");
const correo = document.getElementById("correoInput");
const telefono = document.getElementById("telInput");
const mensaje = document.getElementById("mensajeInput");

const formButton = document.getElementById("formButton");

//Para validar nombre y email
const expName =/^[a-zA-Z]{3,}$/;
const expEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

