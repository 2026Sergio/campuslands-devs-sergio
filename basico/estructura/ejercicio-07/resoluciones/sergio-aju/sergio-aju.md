# Biblioteca de Ciencia Ficción

## Autor

Sergio Ajú

## Razonamiento
Para garantizar la escalabilidad de la biblioteca, he aplicado las siguientes reglas:
1. **Separación de responsabilidades**: Los datos (JSON) están aislados de los recursos visuales (coberturas) y los documentos narrativos (reseñas).
2. **Convención de nomenclatura**: Las portadas siguen la regla `slug-del-titulo + -cover`, asegurando que el código pueda encontrar una imagen automáticamente si conoce el título del libro.
3. **Escalabilidad**: El uso de carpetas dedicadas permite que, si el proyecto crece a miles de libros, se puedan implementar subcarpetas por autor o década sin romper la estructura principal.

## Instrucciones de nombrado (Portadas)
- Formato: `[slug-del-titulo]-cover.[ext]`
- Ejemplo: `fundacion.jpg` -> `fundacion-cover.jpg`

## Validación
- **Caso Normal**: Un archivo JSON completo con todos los campos requeridos.
- **Caso Límite**: Una reseña vacía o con calificación 0, la cual el sistema debería manejar como "Reseña pendiente".

nombre-apellido/
├── sergio-aju.md          # Documentación del proyecto
├── books/
│   ├── data/
│   │   └── dune.json      # Datos estructurados del libro
│   └── covers/
│       └── dune-cover.jpg # Convención
└── reviews/
    └── dune-review.md     # Plantilla de reseña