# Maratón de Películas de Miedo

**Nombre:** Sergio Ajú

## Razonamiento
Para resolver el problema, dividí el proceso en tres pasos lógicos:
1.  **Filtrado:** Utilicé el método `.filter()` para descartar películas con un `rating` menor a 7, garantizando solo contenido de alta calidad.
2.  **Selección:** Mediante un ciclo `for...of`, fui sumando la duración de las películas filtradas. Apliqué una condición (`if`) para asegurar que el `tiempoAcumulado` nunca supere los 360 minutos.
3.  **Acumulación:** Durante el ciclo, también sumé los `sustos` para obtener la intensidad total de la maratón.

## Lógica aplicada
- Se define un límite de tiempo constante de 360 minutos.
- Se procesan los datos mediante un flujo lineal: primero filtrado de calidad, luego selección por tiempo y finalmente cálculo de métricas.

## Validación
- **Entrada:** Catálogo de 5 películas.
- **Caso Normal:** El algoritmo selecciona las películas que cumplen el filtro y ajusta el tiempo límite, descartando las que excedan las 6 horas.
- **Resultado esperado:**
  - Películas: "El Conjuro", "Hereditary", "Saw", "El Exorcista" (dependiendo del orden y la suma total).
  - Tiempo total: Debe ser <= 360 minutos.