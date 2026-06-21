# Resolución: Pull antes de modificar tabla de fútbol

## Autor

Sergio Ajú

## Proceso seguido
1. He cambiado a la rama `dev` y ejecutado `git pull` para integrar los últimos cambios del repositorio remoto.
2. He creado mi rama de trabajo aislada: `feature/actualizacion-tabla-futbol-barca`.
3. He documentado los comandos utilizados para validar la actualización.

## ¿Por qué el 'git pull' reduce conflictos?
Hacer `git pull` antes de comenzar a trabajar permite que mi rama local de `dev` esté alineada con el estado actual del proyecto. Si no lo hiciera, comenzaría a programar sobre una "foto" antigua del proyecto, lo que obligaría a Git a realizar integraciones mucho más complejas (y propensas a errores) cuando intente subir mis cambios. Es, en esencia, **trabajar sobre los cimientos actuales** en lugar de sobre cimientos obsoletos.

## Evidencia de validación
```bash

git checkout dev
git pull origin dev


git checkout -b feature/tabla-futbol-barca
git status
