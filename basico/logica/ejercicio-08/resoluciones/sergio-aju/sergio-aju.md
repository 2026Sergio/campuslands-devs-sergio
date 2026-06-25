# Ejercicio: Catálogo de Hiperdeportivos

## Autor

Sergio Ajú

## Razonamiento
Para resolver este problema, decidí representar cada vehículo como un **objeto** dentro de un arreglo. Esto facilita el uso de métodos de alto nivel de JavaScript:
- `filter()`: Para obtener los autos que cumplen con el límite de aceleración.
- `reduce()`: Para sumar los precios y obtener el promedio de forma eficiente.
- `sort()`: Para ordenar los vehículos basándome en su aceleración (0-100 km/h).

## Lógica de Clasificación
- **Exclusividad Extrema:** Se definió mediante una condición ternaria `unidades < 500`. 
- **Aceleración:** Se utilizó un ordenamiento ascendente para que los valores más bajos (más rápidos) aparezcan primero.

## Evidencia de validación
El código fue probado con 5 modelos de autos, verificando que los filtros y el cálculo de promedio devuelvan valores coherentes con la data ingresada.