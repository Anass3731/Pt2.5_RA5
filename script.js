// SELECCION DE ELEMENTOS DEL DOM
// Guardamos en constantes los botones del menu superior
const bontonLista = document.getElementById('botonLlista');
const bontonGestiona = document.getElementById('botonGestiona');

// Guardamos los contenedores (secciones "div") que vamos a mostrar u ocultar
const seccioLlista = document.getElementById('seccioLlista');
const seccioGestiona = document.getElementById('seccioGestiona');


// GESTIÓN DE EVENTOS (CLICS EN EL MENÚ)
// Evento para cuando el usuario hace clic en el botón "Llista"
bontonLista.addEventListener("click", function() {    
    // Mostramos la sección de lista cambiando su display a "block"
    seccioLlista.style.display = "block";
    
    // Ocultamos la sección de gestiona poniendo su display a "none"
    seccioGestiona.style.display = "none";
});

// Evento para cuando el usuario hace clic en el botón "Gestiona"
bontonGestiona.addEventListener("click", function() {    
    // Mostramos la sección de gestiona
    seccioGestiona.style.display = "block";
    
    // Ocultamos la sección de lista
    seccioLlista.style.display = "none";
});


const tipusVideojocs = ["acció", "aventura", "rol", "estratègia", "simulació", "altres"];

// 1. Creamos el elemento <select>
const select = document.createElement("select");

// 2. Recorremos el array para crear una opción por cada tipo
tipusVideojocs.forEach(function(tipus) {
    let option = document.createElement("option"); // Creamos la opción
    option.textContent = tipus;                    // Le ponemos el texto (ej: "acció")
    select.appendChild(option);                    // Metemos la opción dentro del select
});

// 3. Añadimos el select ya completo dentro de nuestra sección de la lista en el HTML
seccioLlista.appendChild(select);

const videojocs = ["GTA6", "Pubg Mobile", "Aparcar Coches", "Parkour"];

const juegos = [
    {id:1, tipus:"rol", nom:"GTA6", consola:"Play5", preu:89.99, disponible: true, companyia:"Rockstar"},
    {id:2, tipus:"acció", nom:"Pubg Mobile", consola:"Play4", preu:0, disponible: true, companyia:"LightSpeed"}
];
