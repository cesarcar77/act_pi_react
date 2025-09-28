# Nombre del Proyecto
Proyecto Integrador: TechParts E-commerce

## Descripción
Este proyecto es una aplicación web de comercio electrónico (e-commerce) simulada, diseñada para la venta de componentes de hardware para computadoras (CPU, GPU, RAM, etc.). Su propósito principal es demostrar la colaboración efectiva en equipo utilizando el control de versiones (Git/GitHub) y la implementación de un sistema de enrutamiento dinámico en Next.js.

## Características
Este proyecto es una aplicación web de comercio electrónico (e-commerce) simulada, diseñada para la venta de componentes de hardware para computadoras (CPU, GPU, RAM, etc.). Su propósito principal es demostrar la colaboración efectiva en equipo utilizando el control de versiones (Git/GitHub) y la implementación de un sistema de enrutamiento dinámico en Next.js.

Características
Página de Inicio (Home): Muestra productos destacados y un enlace a la tienda completa.

Listado de Productos: Muestra todos los componentes disponibles obtenidos de una API simulada.

Rutas Dinámicas: Cada producto tiene una página de detalles individual accesible mediante su ID (/products/[id]).

Componentización: Uso de componentes reutilizables como ProductCard y Navbar.

Diseño Básico: Estilos implementados con Tailwind CSS para una interfaz limpia y responsiva.
-Tecnologías utilizadas
- Framework: Next.js (React Framework)
-Lenguaje: TypeScript.
-Estilos: Tailwind CSS.
-Control de Versiones: Git y GitHub.

## Registro de Avances por Clase
**Nota**: Todos los avances documentados en esta sección deben coincidir con los commits realizados en el repositorio, incluyendo el autor correspondiente de cada commit. Cada tarea completada, en progreso o pendiente debe estar respaldada por un commit asociado en el repositorio, con mensajes descriptivos que reflejen la tarea realizada y el nombre del autor.

### Clase 1
- **Fecha**: [28/08/2025]
- **Objetivos**:
  1.Configurar el repositorio base y la estructura inicial del proyecto.
  2.Definir los tipos de datos de los productos y la API simulada.
  .3Crear los componentes de diseño principales (layout y Navbar).
  
- **Avances**:
  - Configurar el repositorio base y la estructura inicial del proyecto.
  - Definir los tipos de datos de los productos y la API simulada.
  - Crear los componentes de diseño principales (layout y Navbar).

Avances:
✅ Configuración inicial del proyecto Next.js y TypeScript. - Responsable: [Cesar Cardona)] - Commit: feat: initial commit and project setup
✅ Creación del tipo de dato Product en src/types/index.ts. - Responsable: [Cesar Cardona)] - Commit: feat: define Product interface
✅ Implementación de la API simulada (src/lib/api.ts). - Responsable: [Cesar Cardona)] - Commit: feat: create mock API with product data
- **En progreso**:
  - 🔄  Implementación del componente ProductCard y su enlace dinámico. - Responsable: [Cesar Cardona)] - Commit: feat: setup ProductCard component logic
  - ⏳ [Tarea pendiente] -Implementar las páginas de listado y detalle de producto (Tareas para Colaboradores). - Responsable: [Aly Cano)]
  - Se decidió usar la ruta absoluta @/types para las importaciones en lugar de rutas relativas (../../).
  - Se definió la estructura de carpetas src/app/products/[id]/.

### Clase 2
- **Fecha**: [01/09/2025]
- **Objetivos**:
- Implementar la página de listado de productos (/products).
-Implementar la página de detalles de producto (/products/[id]).
-Resolver errores de enrutamiento y carga de módulos (Module not found). 
- **Avances**:
  - Implementación de la página de listado de productos. - Responsable: [Nombre Colaborador 1] - Commit: feat: added products listing page
✅ Implementación de la página de detalles de producto. - Responsable: [Nombre Colaborador 2] - Commit: feat: added dynamic product details page
- **En progreso**:
  - 🔄 🔄Revisar por qué la página de detalles sigue mostrando 404/errores de módulo. - Responsable: [Tu Nombre (Líder)]
  - ⏳ [Tarea pendiente] - Responsable: [Nombre]
- **Notas**:
  - [Descripción de problemas, soluciones o decisiones tomadas]

### Clase [N]
- **Fecha**: [DD/MM/YYYY]
- [Repetir estructura anterior]

## Contacto
### Información del Grupo
- **Institución**: SENA
- **Programa**: [Nombre del programa]
- **Ficha**: [Número de ficha]
- **Instructor**: [Nombre del instructor]
- **Período**: [Año - Trimestre]
