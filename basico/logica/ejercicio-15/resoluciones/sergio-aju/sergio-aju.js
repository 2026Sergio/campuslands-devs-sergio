const escenas = [
    { nombre: "Escena 1", horasModelado: 10, horasRender: 8, artistas: 3 },
    { nombre: "Escena 2", horasModelado: 20, horasRender: 15, artistas: 5 },
    { nombre: "Escena 3", horasModelado: 5, horasRender: 2, artistas: 1 }
];
function calcularPresupuesto(listaEscenas) {
    const escenasConCosto = listaEscenas.map(e => ({
        ...e,
        costo: (e.horasModelado * 40000) + (e.horasRender * 25000) + (e.artistas * 120000)
    }));
    const totalProyecto = escenasConCosto.reduce((acc, e) => acc + e.costo, 0);

    const costosas = escenasConCosto.filter(e => e.costo > 1000000);

    const masCostosa = [...escenasConCosto].sort((a, b) => b.costo - a.costo)[0];

    return { totalProyecto, costosas, masCostosa };
}
const resultado = calcularPresupuesto(escenas);
console.log("Presupuesto Total:", resultado.totalProyecto);
console.log("Escenas Críticas:", resultado.costosas);
console.log("Escena más cara:", resultado.masCostosa.nombre);
