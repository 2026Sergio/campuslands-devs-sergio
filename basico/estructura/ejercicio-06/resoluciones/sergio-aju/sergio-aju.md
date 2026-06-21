# Resolución: App de Reservas Turísticas

## Autor 

Sergio Ajú

## Razonamiento del Problema
He organizado la aplicación bajo el principio de **Separación de Responsabilidades (SoC)**. 
- Los **datos** se encuentran aislados en formato JSON para facilitar futuras integraciones con APIs externas.
- La **lógica de negocio** se abstrae en `services/` para que los componentes sean "tontos" (solo presentacionales).
- La **interfaz** se divide en `pages` y `components` para permitir la reutilización de elementos como la `card-destino`.

## Estructura de carpetas
[Insertar aquí el árbol de archivos mostrado arriba]

## Cómo crecería el proyecto
Para escalar, implementaría:
1. **State Management**: Usaría un contexto global o Redux para manejar las reservas en tiempo real.
2. **Validación de tipos**: Implementaría TypeScript para asegurar la integridad de los datos en `destinos.json`.
3. **Lazy Loading**: Dividiría las rutas (`pages`) para optimizar el tiempo de carga inicial.

## Validación
- Caso Normal: El componente `card-destino` recibe un objeto de destino válido y renderiza correctamente.
- Caso Límite: El servicio maneja un archivo JSON vacío retornando un array vacío en lugar de un error.

sergio-aju/
├── sergio-aju.md            # Explicación del proyecto y razonamiento
├── data/
│   └── destinos.json    # Datos estáticos de los lugares turísticos
├── components/
│   ├── card-destino.js  # Lógica del componente
│   └── card-destino.md  # Documentación técnica del componente
├── services/
│   └── api-service.js   # Lógica para consumir los datos
└── pages/
    └── home.js          # Vista principal que ensambla todo