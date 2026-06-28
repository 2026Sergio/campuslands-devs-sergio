// Definición de las películas disponibles
const catalogoPeliculas = [
    { titulo: "El Conjuro", duracionMin: 112, sustos: 8, rating: 7.5 },
    { titulo: "Hereditary", duracionMin: 127, sustos: 6, rating: 7.3 },
    { titulo: "Saw", duracionMin: 103, sustos: 4, rating: 7.6 },
    { titulo: "Smile", duracionMin: 115, sustos: 9, rating: 6.5 }, // Menor a 7, se filtrará
    { titulo: "El Exorcista", duracionMin: 122, sustos: 7, rating: 8.0 }
];

function seleccionarPeliculasParaMaraton(peliculas) {
    const LIMITE_TIEMPO = 360; // 6 horas
    let tiempoAcumulado = 0;
    let totalSustos = 0;
    let maratonFinal = [];
    const peliculasAprobadas = peliculas.filter(p => p.rating >= 7);

    for (let pelicula of peliculasAprobadas) {
        if (tiempoAcumulado + pelicula.duracionMin <= LIMITE_TIEMPO) {
            maratonFinal.push(pelicula.titulo);
            tiempoAcumulado += pelicula.duracionMin;
            totalSustos += pelicula.sustos;
        }
    }

    return {
        maratonFinal,
        tiempoTotal: tiempoAcumulado,
        totalSustos
    };
}

const resultado = seleccionarPeliculasParaMaraton(catalogoPeliculas);
console.log("Películas seleccionadas:", resultado.maratonFinal);
console.log("Tiempo total:", resultado.tiempoTotal, "minutos");
console.log("Total de sustos:", resultado.totalSustos);