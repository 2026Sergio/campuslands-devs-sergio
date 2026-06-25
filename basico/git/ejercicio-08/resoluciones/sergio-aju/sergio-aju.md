# Ejercicio 08: Conflicto simple en playlist

## Autor

Sergio Ajú

## Razonamiento
El conflicto ocurrió porque Git detectó que en dos ramas diferentes se editó la misma línea del archivo `playlist.md`. Git, por seguridad, detiene la fusión (merge) para evitar sobrescribir el trabajo de alguien más. 

## Proceso de resolución
1. **Identificación:** Al hacer `git merge`, Git notificó el conflicto.
2. **Edición:** Abrí el archivo y decidí mantener la versión que consideré más adecuada para la "playlist".
3. **Validación:** Tras editar manualmente el archivo eliminando las marcas de conflicto (`<<<<`, `====`, `>>>>`), realicé un `git add` y un `git commit` para finalizar la fusión.

## Evidencia de validación
- `git status` mostró que el conflicto fue resuelto tras el commit final.
- El archivo `playlist.md` ahora contiene la versión final fusionada sin marcas de error.