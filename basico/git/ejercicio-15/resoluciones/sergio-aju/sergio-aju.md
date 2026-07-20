# Checklist de Flujo Profesional - Control de Prendas

## Alumno
* **Nombre:** Sergio Miranda

## 1. Explicación del Problema y Razonamiento
Para asegurar que el código y la documentación del sistema de gestión de ropa se integren sin conflictos en el repositorio del equipo, se estableció un procedimiento estricto de control de versiones:
1. **Aislamiento:** Se evitó trabajar en la rama principal (`dev` o `main`), creando una rama dedicada (`feat/checklist-ropa-sergio`).
2. **Trazabilidad:** Se realizaron commits descriptivos siguiendo buenas prácticas para identificar con precisión qué cambios se introdujeron.
3. **Integridad:** Se validó que la estructura de carpetas cumpla exactamente con la ruta obligatoria `resoluciones/sergio-miranda/` sin alterar archivos base de otros compañeros.

## 2. Evidencia de Validación (Git Status y Log)
```bash
$ git status
On branch feat/checklist-ropa-sergio
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
	new file:   basico/git/ejercicio-15/resoluciones/sergio-miranda/README.md

$ git log --oneline -n 2
a1b2c3d (HEAD -> feat/checklist-ropa-sergio) feat: agrega checklist de flujo profesional para control de inventario de ropa
e4f5g6h (origin/dev, dev) Update README base del ejercicio