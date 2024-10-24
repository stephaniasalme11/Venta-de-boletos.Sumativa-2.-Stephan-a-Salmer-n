const imagenes = document.querySelectorAll('.imagen'); //Creamos una variable const llamada imagenes donde llamaremos a a la clase "imagen" del HTML

imagenes.forEach((img) => { //Con el bucle foreach seleccionamos la imagen de hover
    const imgHover = img.nextElementSibling;

    img.addEventListener('mouseover', () => { //Agregamos el evento Mouseover donde cambia la fuente d ela imagen de hover
        img.src = imgHover.src; 
    });

    img.addEventListener('mouseout', () => { //Agregamos el el evento mouseout para cambiar de nuevo a la imagen original
        img.src = img.getAttribute('data-original-src'); 
    });

    img.setAttribute('data-original-src', img.src); //Guardamos la fuente original en un atributo data
});