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

// array d’objectes
// Lista de videojuegos disponibles en la tienda.

const videojocs = [
  { id: 1, tipus: "acció", nom: "GTA VI", consola: ["Play5", "XBOX Series X"], preu: 79.99, disponible: true, companyia: "Rockstar Games" },
  { id: 2, tipus: "aventura", nom: "The Legend of Zelda: Tears of the Kingdom", consola: ["Nintendo Switch", "Nintendo Switch2"], preu: 69.99, disponible: true, companyia: "Nintendo" },
  { id: 3, tipus: "rol", nom: "Elden Ring", consola: ["Play5", "Play4", "XBOX Series X"], preu: 59.99, disponible: true, companyia: "Bandai Namco" },
  { id: 4, tipus: "estratègia", nom: "Civilization VI", consola: ["Nintendo Switch", "Play4"], preu: 39.99, disponible: false, companyia: "2K" },
  { id: 5, tipus: "simulació", nom: "Fifa 26", consola: ["Play5", "XBOX Series X", "XBOX Series S", "Nintendo Switch"], preu: 69.99, disponible: true, companyia: "EA Sports" }
];

// Creamos el párrafo para avisos y la tabla para mostrar los resultados
const p = document.createElement("p");
const tabla = document.createElement("table");


// Añadimos ambos elementos dentro de la sección de lista en el HTML
seccioLlista.appendChild(p);
seccioLlista.appendChild(tabla);

// Función que construye y dibuja la tabla dinámica con los videojuegos recibidos
function pintarTaula(llistaJocs) {
    // Limpiamos mensajes y filas de búsquedas anteriores
    p.textContent = "";
    tabla.innerHTML = "";

    // 1. Creamos la fila de cabeceras (th) con los nombres de las columnas
    const filaCapcalera = document.createElement("tr");
    const columnes = ["ID", "Tipus", "Nom", "Consola", "Preu", "Disponible", "Companyia"];

    columnes.forEach(function(titol) {
        const th = document.createElement("th");
        th.textContent = titol;
        filaCapcalera.appendChild(th);
    });
    tabla.appendChild(filaCapcalera);

    // 2. Recorremos los videojuegos y creamos una fila (tr) por cada uno
    llistaJocs.forEach(function(joc) {
        const tr = document.createElement("tr");

        // Preparamos los valores de cada columna para este videojuego
        const valors = [
            joc.id,
            joc.tipus,
            joc.nom,
            joc.consola.join(", "),            // Convertimos el array de consolas en texto separado por comas
            joc.preu,
            joc.disponible ? "Sí" : "No",     // Convertimos true/false en "Sí" o "No"
            joc.companyia
        ];

        // Creamos una celda (td) por cada valor y la metemos en la fila (tr)
        valors.forEach(function(valor) {
            const td = document.createElement("td");
            td.textContent = valor;
            tr.appendChild(td);
        });

        // PISTA 1: Añadimos la fila completa a la tabla
        tabla.appendChild(tr);
    });
}

// Escuchamos cuando cambia la opción seleccionada en el desplegable <select>
select.addEventListener("change", function() {
    // 1. Guardamos el tipo elegido por el usuario
    const tipusSeleccionat = select.value;

    // 2. Filtramos los videojuegos que coincidan con ese tipo
    const filtrats = videojocs.filter(function(joc) {
        return joc.tipus === tipusSeleccionat;
    });

    // 3. Si no hay videojuegos de ese tipo, mostramos el mensaje; si hay, pintamos la tabla
    if (filtrats.length === 0) {
        tabla.innerHTML = ""; // Borramos la tabla si había una visible de antes
        p.textContent = "En aquests moments no tenim videojocs d'aquest tipus.";
    } else {
        // PISTA 2: Llamamos a la función pasando los juegos filtrados
        pintarTaula(filtrats);
    }
});