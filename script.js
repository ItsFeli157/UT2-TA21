const campoTexto = document.getElementById('campoTexto');

//Evento para cambiar el borde cuando el campo está enfocado
campoTexto.addEventListener('focus', function() {
    campoTexto.style.border = '2px solid #333'; //Cambia el borde a un color más oscuro
});

//Evento para restaurar el borde original
campoTexto.addEventListener('blur', function() {
    campoTexto.style.border = '2px solid #ccc';
});
