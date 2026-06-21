const listaMotos = [
    { marca: "Yamaha", modelo: "R1", hp: 200, pesoKg: 199, mantenimientoMensual: 450000 },
    { marca: "Kawasaki", modelo: "Ninja ZX-10R", hp: 203, pesoKg: 206, mantenimientoMensual: 550000 },
    { marca: "Honda", modelo: "CBR1000RR", hp: 190, pesoKg: 195, mantenimientoMensual: 420000 }
];

function analizarMotos(motos) {

    const motosAccesibles = motos.filter(m => m.mantenimientoMensual < 500000);

    const procesadas = motosAccesibles.map(m => ({
        ...m,
        relacionPesoPotencia: m.hp / m.pesoKg
    })).sort((a, b) => b.relacionPesoPotencia - a.relacionPesoPotencia);

    return {
        mejorParaPista: procesadas[0], 
        mejorEconomica: procesadas.sort((a, b) => a.mantenimientoMensual - b.mantenimientoMensual)[0]
    };
}