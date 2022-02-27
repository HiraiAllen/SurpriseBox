//Constantes
const btn_confirm_password = document.getElementById("btn-confirm-password");
const password_input = document.getElementById("password_input");
const error_message = document.getElementById("error_message");
const icon_ayuda = document.getElementById("icon_ayuda");
const mensaje_ayuda = document.getElementById("mensaje_ayuda");
const close_mensaje_ayuda = document.getElementById("close_ayuda");
const password_container = document.getElementById("password_box");
const cards_presentation = document.getElementById("cards_presentation");
const popup_container = document.getElementById("popup_container");
const close_popup = document.getElementById("close_popup");
const popup_text = document.getElementById("popup_text");
const popup_link = document.getElementById("popup_link");
//Cajas de colores
const red = document.getElementById("red");
const green = document.getElementById("green");
const yellow = document.getElementById("yellow");
const blue = document.getElementById("blue");
const purple = document.getElementById("purple");
const black = document.getElementById("black");

btn_confirm_password.addEventListener('click', function(){
    error_message.style.display = "none";

    if(password_input.value != "Xayah"){
        error_message.style.display = "block";
    } else {
        password_container.style.display = "none";
        cards_presentation.classList.toggle("cards_presentation_active");
        alert("Abre las cajas");
    }
});

icon_ayuda.addEventListener('click', function(){
    mensaje_ayuda.style.display = 'flex';
});


close_mensaje_ayuda.addEventListener('click', function(){
    mensaje_ayuda.style.display = 'none';
});

close_popup.addEventListener('click', function(){
    popup_container.classList.toggle("popup_container_active");
});

red.addEventListener('click', function(){
    popup_container.classList.toggle("popup_container_active");
    popup_text.innerHTML = "";
    popup_link.innerHTML = "";
    popup_link.href = "";

    popup_text.innerHTML = "Te amo, je t'aime, Ti amo, I love you, Eu te amo, wo ai ni. Te lo puedo decir en mil idiomas pero el sentimiento es el mismo.";
});

green.addEventListener('click', function(){
    popup_container.classList.toggle("popup_container_active");
    popup_text.innerHTML = "";
    popup_link.innerHTML = "";
    popup_link.href = "";

    popup_text.innerHTML = "Un lindo poema...";
    popup_link.innerHTML = "Ver poema";
    popup_link.href = "https://www.culturagenial.com/es/poema-dame-la-mano-de-gabriela-mistral/";
});

yellow.addEventListener('click', function(){
    popup_container.classList.toggle("popup_container_active");
    popup_text.innerHTML = "";
    popup_link.innerHTML = "";
    popup_link.href = "";

    popup_text.innerHTML = "Una linda canción...";
    popup_link.innerHTML = "Escuchar canción";
    popup_link.href = "https://open.spotify.com/track/4ROdFnoZNn2RTmwct0cVpx?si=b90e630c778a4192";
});

//3.4359868216580414, -76.54561047527751
blue.addEventListener('click', function(){
    popup_container.classList.toggle("popup_container_active");
    popup_text.innerHTML = "";
    popup_link.innerHTML = "";
    popup_link.href = "";

    popup_text.innerHTML = "3.4359868216580414, -76.54561047527751 <br> 7.110953312742497, -73.10773485865133";
});


purple.addEventListener('click', function(){
    popup_container.classList.toggle("popup_container_active");
    popup_text.innerHTML = "";
    popup_link.innerHTML = "";
    popup_link.href = "";

    popup_text.innerHTML = "Why you? Because you are the most important person in my life, Because you fill my days with joy, I love you.";
});

black.addEventListener('click', function(){
    popup_container.classList.toggle("popup_container_active");
    popup_text.innerHTML = "";
    popup_link.innerHTML = "";
    popup_link.href = "";

    popup_text.innerHTML = "¿Tortugas?";
    popup_link.innerHTML = "Ver";
    popup_link.href = "https://www.pinterest.es/search/pins/?q=Tortugas%20lindas&rs=srs&b_id=BMs80O2xrdgPAAAAAAAAAABj4ioq8jZbsUhtrIiEL5zEmC7ZBt5qNnw6LsCJ9bcGvwMb4LRxZuHCLtaKGllpJJQ&source_id=mjW177vC";
});
