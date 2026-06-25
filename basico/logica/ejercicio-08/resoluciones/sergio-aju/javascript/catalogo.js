const autos = [
    { marca: "Bugatti", modelo: "Chiron", ceroACien: 2.4, precioUSD: 3000000, unidades: 500 },
    { marca: "Rimac", modelo: "Nevera", ceroACien: 1.85, precioUSD: 2400000, unidades: 150 },
    { marca: "Koenigsegg", modelo: "Jesko", ceroACien: 2.5, precioUSD: 2800000, unidades: 125 },
    { marca: "McLaren", modelo: "P1", ceroACien: 2.8, precioUSD: 1300000, unidades: 375 },
    { marca: "Ferrari", modelo: "LaFerrari", ceroACien: 2.9, precioUSD: 1500000, unidades: 499 }
];

const rapidos = autos.filter(auto => auto.ceroACien < 3);

console.log("--- Análisis de Hiperdeportivos ---");
autos.forEach(auto => {
    const exclusividad = auto.unidades < 500 ? "Extrema" : "Alta";
    console.log(`${auto.marca} ${auto.modelo}: Exclusividad ${exclusividad}`);
});

const totalPrecio = autos.reduce((sum, auto) => sum + auto.precioUSD, 0);
const promedio = totalPrecio / autos.length;
console.log(`\nPrecio promedio del catálogo: $${promedio.toLocaleString()}`);

const top3Aceleracion = [...autos]
    .sort((a, b) => a.ceroACien - b.ceroACien)
    .slice(0, 3);

console.log("\nTop 3 por aceleración:");
top3Aceleracion.forEach((auto, index) => {
    console.log(`${index + 1}. ${auto.marca} ${auto.modelo} (${auto.ceroACien}s)`);
});