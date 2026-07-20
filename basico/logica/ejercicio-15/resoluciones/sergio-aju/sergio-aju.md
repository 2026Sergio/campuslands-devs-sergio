# Ejercicio: Presupuesto de Producción de Animación 3D

## Alumno
Sergio Miranda

## Descripción del problema
El objetivo es automatizar el cálculo de costos de producción para un estudio de animación 3D. El sistema debe calcular el costo individual por escena basándose en horas de trabajo y personal asignado, identificar las escenas que superan el presupuesto crítico (1,000,000) y calcular el costo total del proyecto.

## Razonamiento y solución
1. **Modelado**: Cada escena se representa con `nombre`, `horasModelado`, `horasRender` y `artistas`.
2. **Lógica de negocio**: 
   - Se aplica la fórmula: `(horasModelado * 40000) + (horasRender * 25000) + (artistas * 120000)`.
   - Se utiliza `.reduce()` para sumar el costo total del proyecto.
   - Se utiliza `.filter()` para aislar escenas de alto costo.
   - Se utiliza `.sort()` para encontrar la escena más costosa.
3. **Escalabilidad**: El código es modular, permitiendo agregar nuevas escenas al arreglo original sin alterar el flujo de cálculo.

## Evidencia de validación
*   **Caso Normal**: 10h modelado, 8h render, 3 artistas.
    - Cálculo: (10*40k) + (8*25k) + (3*120k) = 400k + 200k + 360k = 960,000.
*   **Escena Costosa**: Detectada automáticamente al superar el umbral de 1,000,000.
