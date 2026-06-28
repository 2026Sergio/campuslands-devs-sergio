# Ejercicio 10: Revertir idea sin borrar historial (Autos)

**Alumno:** Sergio Ajú

## Objetivo
Demostrar el uso de `git revert` para deshacer un cambio incorrecto manteniendo la integridad del historial de commits.

## Explicación del Proceso
1. **Simulación de error:** Se creó un archivo `lista_autos.txt` agregando un "auto incorrecto" (ej: una bicicleta) y se hizo un commit.
2. **Reversión:** Se utilizó `git revert <id-del-commit>` para crear un **nuevo commit** que aplica los cambios inversos al commit erróneo.
3. **Análisis:** A diferencia de `git reset` (que elimina historial), `git revert` registra la corrección como un paso adicional, permitiendo auditoría completa del proyecto.

## Comandos Utilizados (Evidencia)
```bash

git add lista_autos.txt
git commit -m "feat: agregar auto incorrecto (bicicleta)"

git log --oneline

git revert <id-del-commit>

git log --oneline