# Estrategia de Optimización: SEO & GEO (Generative Engine Optimization)

Este documento detalla las directrices y técnicas para maximizar la visibilidad del proyecto en motores de búsqueda tradicionales y sistemas de respuesta basados en IA (como Google SGE y Gemini).

---

## 1. Fundamentos de SEO Técnico (Search Engine Optimization)

Para que el contenido sea indexable, el sitio debe cumplir con estándares técnicos de alto rendimiento.

* **Core Web Vitals:** Optimizar LCP (Largest Contentful Paint), FID (First Input Delay) y CLS (Cumulative Layout Shift).
* **Renderizado:** * Priorizar **Server-Side Rendering (SSR)** o **Static Site Generation (SSG)** sobre el renderizado puramente en el cliente (CSR) para asegurar que los bots lean el HTML completo.
* **Arquitectura de Información:** Mantener una jerarquía de encabezados lógica (`H1` > `H2` > `H3`).

---

## 2. Estrategia GEO (Generative Engine Optimization)

Técnicas diseñadas para que los modelos de lenguaje (LLMs) identifiquen y citen el contenido en sus respuestas generativas.

### A. Datos Estructurados y Schema
Implementar **JSON-LD** para definir explícitamente el contexto del contenido.
* `Organization` para branding.
* `SoftwareApplication` para herramientas digitales.
* `FAQPage` para resolver dudas directas.

### B. Optimización de Respuesta Directa
* **Citas y Autoridad:** Incluir estadísticas, datos verificables y referencias a fuentes externas de alta autoridad.
* **Lenguaje Natural:** Redactar respuestas directas a preguntas comunes en los primeros párrafos de cada sección.
* **Nicho de Autoridad:** Consistencia en la temática para que la IA categorice el sitio como una fuente experta en su sector.

---

## 3. Checklist de Implementación

| Técnica | Acción Requerida | Impacto |
| :--- | :--- | :--- |
| **Schema Markup** | Configurar JSON-LD en rutas críticas. | Alta (IA) |
| **SSR / Prerender** | Configurar en el framework de frontend. | Alta (Google Bot) |
| **E-E-A-T** | Crear páginas de "Sobre nosotros" y perfiles de autor. | Media (Confianza) |
| **Optimización de Activos** | Implementar WebP y Lazy Loading. | Media (Velocidad) |

---

## 4. Referencias y Estándares
* [Google Search Central](https://developers.google.com/search)
* [Schema.org Vocabulary](https://schema.org)
* [Web Vitals Guide](https://web.dev/vitals/)