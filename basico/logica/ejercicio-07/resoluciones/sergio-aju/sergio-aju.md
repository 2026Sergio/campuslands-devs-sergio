# Diagnóstico de Mecánica de Motos

## Autor

Sergio Ajú

## Razonamiento
Para resolver este problema, decidí utilizar un objeto como "diccionario" de fallas para mantener el código limpio y escalable (evitando un exceso de `if/else`). La función recorre el arreglo de síntomas proporcionado, busca la coincidencia en el diccionario y agrega la recomendación a un reporte final.

## Pasos realizados
1. Definición de la estructura de datos para mapear síntomas con soluciones.
2. Implementación de la función `diagnosticar(sintomas)` usando un ciclo `forEach`.
3. Manejo de casos de error (entrada vacía o síntoma no reconocido).
4. Formateo de salida legible para el mecánico.

## Validación
* **Caso normal:** `['vibra', 'frena poco']` -> Devuelve sugerencias de balanceo y pastillas.
* **Caso límite:** `[]` o `['ruido extraño']` -> Devuelve un mensaje de entrada inválida o síntoma no catalogado.