
const baseDeDatosFallas = {
    'no enciende': 'Revisar bujía, batería o sistema de combustible.',
    'vibra': 'Verificar balanceo de ruedas y apriete de soportes del motor.',
    'pierde aceite': 'Inspeccionar sellos, juntas de motor y mangueras.',
    'frena poco': 'Revisar desgaste de pastillas y nivel de líquido de frenos.'
};

function diagnosticar(sintomas) {
    if (!sintomas || sintomas.length === 0) {
        return "Error: No se han proporcionado síntomas para analizar.";
    }

    let reporte = "--- REPORTE DE DIAGNÓSTICO ---\n";

    sintomas.forEach((sintoma) => {
        const recomendacion = baseDeDatosFallas[sintoma];
        
        if (recomendacion) {
            reporte += `- Síntoma (${sintoma}): ${recomendacion}\n`;
        } else {
            reporte += `- Síntoma (${sintoma}): Síntoma desconocido, requiere revisión técnica manual.\n`;
        }
    });

    return reporte;
}

// --- Validación ---
console.log(diagnosticar(['vibra', 'frena poco']));
console.log(diagnosticar([]));