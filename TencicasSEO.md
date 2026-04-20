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

---

## 5. Capa de Metadatos y Visibilidad Social
Para maximizar la tasa de clics (CTR) y la interpretación de la IA:
* **Etiquetas Open Graph:** Implementar `<meta property="og:title">`, `og:description` y `og:image` en el `<head>`.
* **Favicons y Manifest:** Asegurar un archivo `manifest.json` y favicons en múltiples resoluciones para mejorar la identidad visual en dispositivos móviles.

## 6. Configuración de Rastreo (Crawling)
* **Sitemap dinámico:** Generar `sitemap.xml` para asegurar que todas las rutas (incluyendo dinámicas) sean descubiertas.
* **Optimización de Robots.txt:** Configurar directivas `Disallow` para rutas privadas, APIs y entornos de staging.
* **Canonical Tags:** Usar `rel="canonical"` para evitar penalizaciones por contenido duplicado.

## 7. SEO Local y Autoridad de Marca
* **Geo-Tagging:** Incluir metadatos de ubicación si el mercado objetivo es regional (ej. Guatemala).
* **Menciones de Marca:** Fomentar la presencia en foros y comunidades (Reddit, StackOverflow) para que la IA asocie la marca con soluciones específicas en su nicho.

## 8. UX & Accesibilidad (A11y)
* **Atributos Alt:** Obligatorios en todas las imágenes para indexación en Google Images.
* **Semántica HTML5:** Uso de `<main>`, `<article>`, `<section>` y `<footer>` para facilitar el "scrapping" de la IA.

---

## 9. Estándares de Datos Estructurados (JSON-LD)
Para asegurar que la IA de Google identifique correctamente el software, se debe mantener el siguiente esquema en el `<head>` de la página principal:

### Esquema de Aplicación (SoftwareApplication)
* **Objetivo:** Definir la naturaleza del software, precio y categoría.
* **Ubicación:** `index.html` o componente de SEO dinámico.
* **Campos Requeridos:** `name`, `applicationCategory`, `operatingSystem`.

> **Nota:** Cada vez que se agregue una funcionalidad principal, actualizar el JSON-LD para incluir `featureList` y mejorar la interpretación de los modelos de lenguaje (GEO).
