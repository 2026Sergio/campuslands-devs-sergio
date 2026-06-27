# Ejercicio 09: Ramas sobre Ramas (Sci-Fi Catalog)

**Alumno:** Sergio Ajú

## Explicación del Problema
El reto consiste en organizar el flujo de trabajo de un proyecto mediante una estructura jerárquica de ramas:
1. `feature/catalogo-sci-fi`: Rama principal de la funcionalidad.
2. `feature/catalogo-sci-fi/posters`: Rama secundaria para una tarea específica.

Al finalizar, se integra la información de forma ascendente, asegurando que los cambios atómicos se mantengan organizados antes de integrarlos al `dev` principal.

## Flujo de Trabajo
1. Creación de rama base desde `dev`.
2. Creación de rama secundaria desde la base.
3. Realización de commits independientes.
4. Fusión (merge) hacia la rama principal de la feature.
5. Fusión hacia `dev`.

## Evidencia de validación
- `git log --oneline --graph --all` muestra la bifurcación y la unión posterior de las ramas.