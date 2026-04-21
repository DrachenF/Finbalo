# Historial de cambios (resumen no técnico)

Este archivo explica los cambios por versión **sin mostrar código**, en formato “antes / ahora”.

## Versión actual (pestaña activa persistente por sección)

### 1) Estado activo del menú al navegar por secciones
- **Antes:** el resaltado de la pestaña del navbar podía perderse en ciertos puntos de scroll aunque aún estuvieras dentro de la misma sección.
- **Ahora:** el menú mantiene la pestaña activa mientras permanezcas en su bloque y solo cambia al entrar a la siguiente sección (o al salir de ella).

## Versión actual (consistencia visual en navegación + registro actualizado)

### 1) Efecto visual consistente en navegación
- **Antes:** algunos enlaces del menú (especialmente los nuevos) se veían más planos y no transmitían el mismo feedback visual que otros estados activos.
- **Ahora:** todos los enlaces del navbar comparten el mismo lenguaje visual en interacción (hover/realce/borde), para que “Demos”, “Problemas”, “A quién ayudamos” y demás se perciban coherentes con “Proceso”.

### 2) Registro de cambios al día
- **Antes:** se hicieron ajustes visuales recientes sin dejarlos anotados aquí.
- **Ahora:** el historial vuelve a quedar actualizado para que cualquier revisión del proyecto tenga trazabilidad funcional y visual.

## Versión actual (homepage alineada + switch visual)

### 1) Estructura de la página principal
- **Antes:** faltaban bloques explícitos como “Problemas que resolvemos” y “Proyectos demo”, y el orden general no seguía del todo la guía.
- **Ahora:** la home sigue este flujo: Hero → A quién ayudamos → Problemas → Servicios → Por qué trabajar con nosotros → Proyectos demo → Proceso → Tecnologías → FAQ → Contacto.

### 2) Modo visual
- **Antes:** el comportamiento de tema dependía de preferencia guardada/sistema.
- **Ahora:** la web inicia siempre en **modo oscuro** (como base actual), y se puede activar modo claro desde un switch superior.

### 3) Switch de tema
- **Antes:** control con icono tradicional (sol/luna).
- **Ahora:** switch tipo píldora (más visual) en la parte superior.

### 4) Tipografía
- **Antes:** tipografía principal distinta a la guía de marca.
- **Ahora:** se usa Lato como base para mejorar consistencia con lineamientos.

### 5) Footer
- **Antes:** el footer podía verse claro según el tema y el logo cambiaba por estado.
- **Ahora:** el footer queda oscuro de forma consistente y usa logo invertido para asegurar contraste.

### 6) Navegación
- **Antes:** algunos enlaces no apuntaban a los bloques solicitados.
- **Ahora:** navegación ajustada a secciones clave de la nueva estructura.

---

## Nota
Si quieres, en la próxima versión puedo mantener este mismo formato y añadir una sección por fecha:
- Qué cambió
- Por qué se cambió
- Impacto en negocio/UX
