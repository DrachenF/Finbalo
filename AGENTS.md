# AGENTS.md

## Proyecto
Este repositorio corresponde a la web de **Finbalo**, una startup enfocada en **software a medida, sitios web y automatización de procesos** para negocios.

## Objetivo principal
Construir una web que comunique en pocos segundos estas ideas:
1. Finbalo entiende problemas reales de negocio.
2. Finbalo construye soluciones digitales claras, sobrias y bien pensadas.
3. Finbalo tiene una forma profesional, ordenada y confiable de iniciar un proyecto.
4. La marca debe sentirse premium, tecnológica y controlada, no genérica ni exagerada.

## Prioridad general del sitio
Toda decisión de UX, diseño, copy o estructura debe priorizar, en este orden:
1. **Claridad**
2. **Credibilidad**
3. **Conversión**
4. **Consistencia visual**
5. **SEO útil**

Si una idea se ve llamativa pero empeora claridad, confianza o conversión, no debe usarse.

---

## Público objetivo
- Pymes y empresas en crecimiento.
- Negocios que necesitan digitalizar, ordenar, automatizar o mejorar su presencia digital.
- Dueños o responsables que no necesariamente dominan lenguaje técnico.
- Clientes que valoran imagen profesional, orden, claridad y buena comunicación.

No está dirigido a un público informal ni a marcas que buscan una estética experimental, juvenil o excesivamente creativa.

---

## Qué debe transmitir la web
La web debe sentirse:
- premium
- tecnológica
- sobria
- moderna
- clara
- confiable
- orientada a negocio

No debe sentirse:
- improvisada
- recargada
- exagerada
- juvenil en exceso
- “cripto”
- demasiado institucional
- dominada por lenguaje técnico innecesario

---

## Estructura objetivo de la homepage
La homepage debe seguir este flujo:
1. Hero
2. A quién ayudamos
3. Problemas que resolvemos
4. Servicios
5. Qué necesitas
6. Por qué trabajar con nosotros
7. Proceso
8. Tecnologías
9. FAQ
10. Contacto

### Reglas de navegación
En el navbar deben existir únicamente estas pestañas:
- Servicios
- Qué necesitas
- Proceso
- Tecnologías
- Contacto

Además debe existir un CTA destacado:
- Hablemos

### No colocar en el navbar
- Inicio
- Problemas
- Soluciones
- Nosotros
- Misión y Visión
- Valores
- FAQ
- Demos

### Aclaraciones importantes
- **FAQ sí debe existir como sección**, pero no como pestaña del navbar.
- **No usar “Demos”** como nombre de sección principal.
- **No presentar portafolio falso ni proyectos inventados**.
- La web puede mostrar capacidades y escenarios de uso, pero no debe fingir casos reales si no existen.
- Si hay componentes legacy como `About`, `MisionVision`, `Values` o `Solutions`, no deben dominar el flujo principal si ya no responden a esta dirección.

---

## Reglas de contenido
### Sí comunicar
- Qué problemas resolvemos.
- Qué servicios ofrecemos.
- Cómo trabajamos.
- Qué tecnologías usamos.
- Qué siguiente paso debe tomar el usuario.
- Qué tipo de solución podría necesitar según su negocio.

### No comunicar de forma engañosa
- Testimonios falsos.
- Logos de clientes inexistentes.
- Casos de éxito inventados.
- Frases que impliquen experiencia pública no demostrada.
- Lenguaje que haga parecer que ya existe un portafolio visible si no es cierto.

### Tono del contenido
El texto debe ser:
- directo
- claro
- profesional
- comercial sin exageración
- orientado a solución
- fácil de entender por clientes no técnicos

Evitar:
- humo de marketing
- frases grandilocuentes
- tecnicismo innecesario
- lenguaje genérico tipo “somos líderes” o “revolucionamos la industria”

---

## Regla para la sección “Qué necesitas”
Esta sección reemplaza la lógica antigua de una sección separada llamada “Soluciones” en el navbar.
Debe funcionar como una **guía orientativa tipo catálogo sin precios**, pensada para ayudar al visitante a reconocerse en una necesidad concreta.

### Objetivo de la sección
La sección debe responder a la pregunta:
**“¿Qué quiero lograr en mi negocio?”**
No a la pregunta:
**“¿Qué nombre técnico tiene el sistema?”**

### Naming de las tarjetas
El nombre principal de cada tarjeta debe estar en lenguaje simple, comercial y humano.
Debe entenderlo una persona que no sabe de tecnología.

Ejemplos correctos de enfoque:
- Quiero una web para mi negocio
- Quiero captar más clientes
- Quiero ordenar mi operación
- Quiero ver ventas y métricas claras
- Quiero automatizar tareas repetitivas
- Quiero un área para mis clientes
- Quiero una app para mi servicio
- Quiero una solución hecha para mi negocio

El término técnico puede quedar como subtítulo pequeño opcional, pero **no como título principal**.

### Regla de comportamiento
Cada tarjeta debe tener un botón tipo `Ver solución`.
Al hacer clic:
- solo una solución debe quedar abierta a la vez
- en desktop, el detalle debe aparecer **debajo de la fila de la tarjeta activa**
- en mobile, el detalle debe aparecer **debajo de la tarjeta tocada**
- el detalle debe quedar visible con un scroll corto, limpio y natural
- no usar modales invasivos si no hace falta

### El detalle expandido debe explicar
- para quién aplica
- qué necesidad o problema resuelve
- qué puede incluir
- cuándo conviene
- CTA final hacia `#formulario-contacto`

### Regla visual del expandible
- la tarjeta activa y el panel abierto deben sentirse conectados como una sola experiencia
- el estado activo debe verse claro, elegante y premium
- el cambio de solución debe tener transición suave
- el botón activo no debe decir solo “Ocultar solución” si se puede expresar mejor el estado

---

## UX y conversión
### Regla general
Cada bloque de la página debe acercar al usuario al siguiente paso sin fricción.

### CTA principal
La web debe repetir con claridad CTAs como:
- Hablemos
- Empecemos juntos
- Solicitar propuesta
- Agendar una reunión
- WhatsApp

### Reglas UX
- Reducir fricción al máximo.
- Mantener jerarquía visual clara.
- No dejar botones muertos.
- No dejar anchors a IDs inexistentes.
- El usuario debe entender rápido qué hace Finbalo, para quién es y cómo contactarlo.
- El menú móvil debe funcionar correctamente.
- El logo del navbar debe llevar al inicio y cerrar el menú móvil si está abierto.
- El navbar debe resaltar la sección activa según scroll de manera clara pero sobria.
- En `#inicio` no debe marcarse una pestaña incorrecta como activa.

### Regla de navegación entre Contacto y Hablemos
- `Contacto` es una sección del sitio y debe llevar al inicio de la sección de contacto.
- `Hablemos` es un CTA destacado y debe llevar directamente a `#formulario-contacto`.
- `Contacto` y `Hablemos` no deben competir entre sí ni sentirse redundantes.
- El CTA del hero `Empecemos juntos` también debe llevar a `#formulario-contacto`.

### Regla de scroll por navbar
- El navbar fijo no debe tapar los títulos de sección.
- La compensación del scroll debe ser corta y precisa.
- Al hacer clic en una pestaña, la sección debe quedar visualmente justo debajo del navbar, sin un hueco exagerado.

---

## SEO y visibilidad
### Objetivo SEO realista
El sitio debe tener una base sólida de SEO técnico y de contenido, sin sacrificar claridad de marca.

### Requisitos mínimos
- `title` útil y claro
- `meta description` sólida
- Open Graph básico (`og:title`, `og:description`, `og:image` si está disponible)
- jerarquía correcta de headings (`H1 > H2 > H3`)
- HTML semántico (`main`, `section`, `footer`, etc.)
- textos pensados para intención de búsqueda comercial

### Buenas prácticas recomendadas
- `canonical`
- Twitter Cards
- `robots.txt`
- `sitemap.xml`
- texto con intención local si aplica, por ejemplo Guatemala
- atributos `alt` útiles en imágenes
- rendimiento razonable y buena carga visual

### GEO / IA
El contenido debe ayudar también a sistemas de respuesta con IA.
Priorizar:
- lenguaje claro y directo
- respuestas concretas a preguntas comunes
- consistencia temática
- datos estructurados cuando sea razonable

### Schema recomendado
Si se implementa JSON-LD, priorizar:
- `Organization`
- `FAQPage`
- `ProfessionalService` o equivalente útil para el sitio

No meter schema por meterlo.

---

## Diseño e identidad visual
### Regla general de marca
La identidad debe sentirse sobria, premium y tecnológica.
El sitio debe funcionar muy bien en claro y en oscuro, pero no debe perder coherencia de marca en ninguno de los dos temas.

### Color principal del logo
- `#0B0F14`

### Uso del logo oscuro
Usarlo sobre:
- `#F8F6F2`
- `#F4F0EB`
- `#F1F5F9`
- `#FFFFFF`

### Uso de versión invertida
Usarla en:
- footer oscuro
- bloques oscuros puntuales
- navbar oscura o translúcida en dark mode
- contextos donde el logo oscuro pierda contraste

### No usar el logo oscuro sobre
- negro
- azul oscuro
- gris medio
- fondos cercanos a `#0B0F14`
- fondos muy saturados

---

## Sistema de color
### Neutrales base
**Texto / logo principal**
- `#0B0F14`

**Fondos principales**
- `#F8F6F2`
- `#F4F0EB`
- `#F1F5F9`
- `#FFFFFF`

**Texto secundario**
- `#5B6572`

**Bordes / divisores**
- `#DCE3EA`

**Cards / superficies**
- `#FCFBF9`

**Fondos alternos**
- `#EEF2F6`

**Acento suave**
- `#C7D0DA`

**Hover neutro / interactivo suave**
- `#95A4B5`

### Azul acento oficial
**Azul de marca oficial**
- HEX: `#3B82F6`
- RGB: `59, 130, 246`

Este azul es un **acento visual secundario**.
No debe convertirse en el color dominante del sistema.

### Uso correcto del azul `#3B82F6`
Usarlo principalmente en:
- frase o fragmento destacado dentro del hero
- estados activos de navegación
- `focus`, `pressed` o `active` de elementos interactivos
- bordes activos, indicadores y detalles de selección
- hover sutil de botones secundarios cuando tenga sentido
- tarjeta activa o elemento expandido seleccionado

### No usar el azul `#3B82F6` como
- color base de toda la interfaz
- fondo dominante de secciones grandes
- color principal de párrafos largos
- relleno permanente del CTA principal en todas las pantallas
- sustituto del contraste principal entre claro y oscuro
- excusa para volver la web demasiado brillante, gamer o saturada

### Regla obligatoria para el hero
En el H1 principal del hero debe mantenerse explícitamente esta lógica visual:
- frase principal en color principal del tema
- frase final de énfasis en azul de marca `#3B82F6`

Ejemplo de intención:
- “Construimos el software” → color principal
- “que tu negocio necesita.” → `#3B82F6`

Esta regla no es opcional: en refactors de layout o estilo, el énfasis azul del hero debe conservarse.

### Regla para CTAs
El CTA principal debe sentirse sobrio, fuerte y premium.
Por defecto debe apoyarse más en el contraste oscuro/claro del sistema que en un botón azul permanente.
El azul `#3B82F6` funciona mejor como:
- acento de estado
- énfasis interactivo
- feedback visual
- detalle selectivo de jerarquía

---

## Tema claro / oscuro
Si existe selector de tema:
- conservar persistencia en `localStorage`
- si no hay preferencia guardada, respetar preferencia del sistema
- no forzar dark mode en cada recarga
- no romper contraste del logo ni de CTAs

### Regla de temas
- El sitio debe verse elegante, legible y coherente en ambos modos.
- Light y dark mode deben compartir estructura, espaciado, jerarquía y tono visual.
- Ninguno de los dos modos debe sentirse improvisado.
- El azul `#3B82F6` debe mantener el mismo rol semántico en ambos modos: acento, énfasis y estado interactivo.

### Paleta sugerida para dark mode
Usar como referencia si se trabaja modo oscuro:
- fondo principal: `#0B0F14`
- superficies / cards: `#151C25`
- fondo alterno: `#1A222C`
- texto principal: `#F8F6F2`
- texto secundario: `#8A96A3`
- bordes / divisores: `#2A3441`
- acento permitido: `#3B82F6`

Reglas del modo oscuro:
- conservar sensación premium, limpia y sobria
- evitar negro puro como base total salvo detalles puntuales
- usar logo invertido en fondos oscuros
- mantener CTAs claramente distinguibles, con contraste alto y sin colores chillones
- no convertir dark mode en una estética gamer, cripto o futurista agresiva

---

## Reglas visuales
- Navbar clara con logo oscuro en modo claro.
- Navbar oscura o translúcida con logo invertido en modo oscuro.
- Cards limpias, espaciadas y sobrias.
- Footer oscuro con logo invertido.
- Evitar gradientes chillones.
- Evitar apariencia de agencia informal.
- Evitar sobrecarga visual.
- El azul de marca debe sentirse selectivo, elegante y controlado.
- La sección “Qué necesitas” debe sentirse entendible para clientes no técnicos y visualmente más memorable que un simple grid plano.

---

## Tipografía
Priorizar:
- **Lato** para interfaz y lectura general.
- **Sora** o equivalente solo donde tenga sentido como acento de marca.

Regla práctica:
- no mezclar demasiadas familias
- mantener consistencia
- favorecer legibilidad sobre “personalidad visual”

---

## Código y mantenimiento
### Reglas de implementación
- No romper componentes existentes sin necesidad.
- No dejar imports muertos.
- No dejar secciones obsoletas colgando si ya no forman parte del flujo final.
- Si hay contenido útil en secciones antiguas, integrarlo de forma limpia en secciones vigentes.
- Verificar navegación, responsive, CTA y anchors al terminar.

### Antes de dar un cambio por terminado
Comprobar:
- que el navbar funciona
- que el menú móvil funciona
- que los botones visibles funcionan
- que los anchors existen
- que el footer no tenga links rotos
- que el tema no se haya roto
- que el `H1` siga siendo correcto
- que no se haya degradado el SEO base
- que la sección “Qué necesitas” sea clara para clientes no técnicos
- que el detalle expandido quede visible y conectado con la tarjeta activa

---

## Restricciones
- No hacer una web genérica.
- No recargar con colores.
- No usar gradientes chillones.
- No usar lenguaje exagerado.
- No diseñar como agencia creativa informal.
- No usar fondos que maten el contraste del logo.
- No inventar prueba social.
- No usar dark mode con estética gamer, cripto o futurista agresiva.
- No convertir el azul en el color dominante del sistema.
- No depender de lenguaje técnico como título principal en tarjetas pensadas para clientes comunes.

---

## Criterio de terminado
Un cambio está bien hecho cuando:
- respeta la identidad de Finbalo
- mejora claridad y conversión
- mantiene el logo visible y bien contrastado
- conserva una estética SaaS premium y sobria
- no inventa prueba social
- no confunde al usuario
- no rompe navegación ni estructura
- deja la web más útil comercialmente que antes
- usa el azul `#3B82F6` como acento con intención y no como exceso decorativo
