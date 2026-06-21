# Resolución: Comparador de Motos Deportivas

## Autor

Sergio Ajú

## Análisis del problema
Para resolver este problema, he descompuesto la lógica en tres etapas:
1. **Modelado**: Uso de un array de objetos donde cada moto tiene propiedades claras (evitando abreviaturas ambiguas).
2. **Transformación**: Cálculo de la `relación peso-potencia` mediante `.map()`.
3. **Filtrado y Clasificación**: Uso de `.filter()` para excluir motos fuera del presupuesto de mantenimiento y `.sort()` para identificar la mejor opción técnica y económica.

## Estructura de la solución
- `comparador.js`: Contiene la lógica y la base de datos de pruebas.

## Casos de validación
- **Caso Normal**: Se comparan 3 motos, dos cumplen el filtro. Se identifica correctamente la de mayor relación y la de menor costo.
- **Caso Límite**: Si todas las motos superan el costo de mantenimiento, el filtro devuelve un array vacío, lo cual he previsto manejando el retorno de la función.

## Explicación técnica

La relación peso-potencia es fundamental en el rendimiento de una moto, ya que determina la capacidad de aceleración. Al ordenar por esta métrica, garantizamos que la moto "mejor para pista" sea la que ofrece mejor respuesta dinámica.