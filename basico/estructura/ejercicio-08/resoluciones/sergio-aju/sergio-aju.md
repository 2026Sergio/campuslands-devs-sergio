# Ejercicio 08: Gestión de Menú Urbano

## Autor

Sergio Ajú

## Razonamiento del Problema
Para organizar este proyecto, he aplicado el principio de **Separación de Responsabilidades**:
1. **Datos vs. Assets:** Los archivos `.json` contienen exclusivamente la estructura de datos. Las imágenes residen en `assets/photos` para evitar que el repositorio de código sea pesado y difícil de navegar.
2. **Modularización:** Dividir el menú en `platos.json`, `bebidas.json` y `combos.json` permite que si el menú crece, los archivos sigan siendo legibles y fáciles de editar individualmente.
3. **Documentación:** El uso de la carpeta `docs/` permite mantener las reglas de negocio (precios, impuestos, etc.) separadas de la estructura técnica.

## Estructura
- `menu/`: Contiene la lógica de datos.
- `assets/photos/`: Contiene el contenido visual referenciado por nombre en los JSON.
- `docs/reglas-precios.md`: Define la política de precios del establecimiento.

sergio-aju/
├── README.md           # Explicación del proyecto y razonamiento
├── menu/               # Archivos de datos (JSON)
│   ├── platos.json
│   ├── bebidas.json
│   └── combos.json
├── assets/             # Recursos estáticos
│   └── photos/
│       ├── platos/
│       └── bebidas/
├── docs/               # Documentación adicional
│   └── reglas-precios.md
└── scripts/            # Scripts de automatización (ej: validadores)
    └── main.js
    