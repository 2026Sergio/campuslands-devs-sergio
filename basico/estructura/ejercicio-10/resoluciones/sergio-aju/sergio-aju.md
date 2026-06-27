# Ejercicio 10: Pipeline de Animación 3D

**Alumno:** Sergio Ajú

## Análisis del Problema
Para organizar un entorno de animación 3D, he diseñado un pipeline que prioriza la trazabilidad y la seguridad de los archivos:
1. **Linealidad:** Uso de prefijos numéricos (01-04) para indicar el orden cronológico del proceso.
2. **Control de Versiones:** Implementación de carpetas `v01`, `v02` para asegurar que el trabajo no se pierda.
3. **Separación de Calidad:** Los archivos de prueba nunca se mezclan con los finales; estos últimos residen exclusivamente en `04-entregas/final/`.

## Gestión del Proyecto
- **Documentación:** Se incluye `docs/pipeline.md` detallando las reglas de nomenclatura.
- **Privacidad:** Las referencias externas se gestionan en la carpeta dedicada para mantener el repositorio limpio.

## Validación
- Estructura cumplida bajo el formato `sergio-aju/`.
- Uso de Git respetando la rama `dev` como base.

sergio-aju/
├── sergio-aju.md               # Explicación del pipeline y privacidad
├── docs/
│   └── .gitkeep                # Documentación de normas y versiones
├── referencias/
│   └── referencias.md          # Referencias visuales o enlaces
├── 01-modelado/                # Modelos 3D (.obj, .fbx, .blend)
│   └── .gitkeep
├── 02-texturas/                # Mapas de textura (.png, .tga, .exr)
│   └── .gitkeep
├── 03-renders/                 # Renders de previsualización
│   └── .gitkeep
└── 04-entregas/                # Archivos finales aprobados
    └── .gitkeep