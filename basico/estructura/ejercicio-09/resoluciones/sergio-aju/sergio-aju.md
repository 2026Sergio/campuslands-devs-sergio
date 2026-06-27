# Ejercicio 09: Organización de Estudio de Tatuajes

**Alumno:** Sergio Ajú

## Razonamiento del problema
Para organizar este estudio, el proceso fue:
1. **Categorización:** Dividir las necesidades en áreas administrativas (agenda, clientes) y creativas (diseños, referencias).
2. **Nomenclatura:** Utilizar nombres en minúsculas y sin espacios para evitar conflictos en sistemas de archivos o Git.
3. **Escalabilidad:** Crear subcarpetas (como `plantillas/` dentro de `disenos/`) para que el proyecto pueda crecer sin desordenarse.

## Privacidad y Ética de Datos
Este proyecto cumple con la política de manejo de datos sensibles:
- No se utilizan datos reales de clientes.
- Los archivos en `/clientes` contienen únicamente **placeholders** (datos de prueba).
- Se prohíbe el uso de esta estructura para almacenar información médica o personal real sin encriptación.

## Plantilla de Ficha de Diseño
Ubicada en: `disenos/plantillas/ficha_de_diseno.md`
- ID Cliente: [placeholder]
- Estilo: [ej. Neotradicional]
- Ubicación: [ej. Brazo]
- Notas técnicas: [ej. Requiere línea fina]

## Validación
- La estructura cumple con el formato `nombre-apellido/`.
- Todos los archivos están dentro de la ruta `resoluciones/sergio-aju/`.
- El flujo respeta las reglas de no modificar archivos base.

## Arquitectura

```
basico/estructura/ejercicio-09/resoluciones/sergio-aju/
├── sergio-aju.md
├── agenda/
│   └── cronograma.txt
├── clientes/
│   └── ficha_cliente_placeholder.txt
├── disenos/
│   ├── plantillas/
│   │   └── ficha_de_diseno.md
│   └── bocetos/.gitkeep
└── referencias/
    └── estilo_y_tecnica/.gitkeep
``` 