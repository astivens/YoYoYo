# Portafolio Profesional - Anuar Stiven Sierra Royero

Una página web visualmente atractiva que presenta el perfil profesional, análisis DAFO, plan de acción y visión personal.

## Características

- **Diseño Moderno**: Interfaz visualmente atractiva con gradientes y animaciones suaves
- **Responsive**: Optimizado para dispositivos móviles, tablets y escritorio
- **Animaciones**: Efectos de scroll, hover y transiciones fluidas
- **Navegación Suave**: Scroll suave entre secciones
- **Tema Oscuro**: Diseño elegante con paleta de colores oscura

## Secciones

1. **Hero Section**: Presentación principal con nombre y visión a 3-5 años
2. **Perfil Personal y Profesional**: Descripción personal y profesional
3. **Matriz DAFO**: Análisis de Fortalezas, Oportunidades, Debilidades y Amenazas
4. **Estrategias DAFO**: Estrategias derivadas del análisis (FO, FA, DO, DA)
5. **Plan de Acción**: Timeline con objetivos y acciones clave
6. **Visión y Lema**: Frase motivacional personal

## Publicar en GitHub Pages

### Opción 1: Desde la Interfaz de GitHub

1. **Sube los archivos a GitHub**:
   - Crea un nuevo repositorio en GitHub
   - Sube todos los archivos del proyecto (`index.html`, `styles.css`, `script.js`)

2. **Habilita GitHub Pages**:
   - Ve a la configuración del repositorio (Settings)
   - Navega a la sección "Pages" en el menú lateral
   - En "Source", selecciona la rama `main` (o `master`)
   - Selecciona la carpeta `/ (root)`
   - Haz clic en "Save"

3. **Accede a tu sitio**:
   - Tu sitio estará disponible en: `https://[tu-usuario].github.io/[nombre-repositorio]`
   - Puede tardar unos minutos en estar disponible

### Opción 2: Desde la Línea de Comandos

```bash
# Inicializa git (si no lo has hecho)
git init

# Agrega todos los archivos
git add .

# Haz commit
git commit -m "Initial commit: Portafolio profesional"

# Agrega el repositorio remoto (reemplaza con tu URL)
git remote add origin https://github.com/[tu-usuario]/[nombre-repositorio].git

# Sube los archivos
git branch -M main
git push -u origin main
```

Luego sigue los pasos 2 y 3 de la Opción 1 para habilitar GitHub Pages.

## Estructura del Proyecto

```
YoYoYo/
├── index.html      # Página principal
├── styles.css      # Estilos y animaciones
├── script.js       # Interactividad y efectos
└── README.md       # Este archivo
```

## Personalización

### Colores

Los colores principales están definidos en variables CSS al inicio de `styles.css`:

```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    --accent-color: #ec4899;
    /* ... más variables */
}
```

### Fuentes

Las fuentes utilizadas son:
- **Inter**: Para texto general
- **Playfair Display**: Para títulos principales

Ambas se cargan desde Google Fonts.

## Tecnologías Utilizadas

- HTML5
- CSS3 (con variables CSS, animaciones, gradientes)
- JavaScript (Vanilla JS, sin dependencias)
- Google Fonts

## Compatibilidad

- ✅ Chrome/Edge (últimas versiones)
- ✅ Firefox (últimas versiones)
- ✅ Safari (últimas versiones)
- ✅ Navegadores móviles modernos

## Notas

- El sitio no requiere ningún servidor o build process
- Todos los archivos son estáticos
- No se requiere Node.js, npm o ninguna herramienta adicional
- Compatible con GitHub Pages sin configuración adicional

## Solución de Problemas

### El sitio no se actualiza en GitHub Pages

- Espera unos minutos (puede tardar hasta 10 minutos)
- Verifica que los archivos estén en la rama correcta
- Limpia la caché del navegador (Ctrl+Shift+R o Cmd+Shift+R)

### Las animaciones no funcionan

- Verifica que `script.js` esté correctamente vinculado en `index.html`
- Abre la consola del navegador para ver errores
- Asegúrate de que JavaScript esté habilitado

### El diseño se ve roto

- Verifica que `styles.css` esté correctamente vinculado
- Asegúrate de que las fuentes de Google se carguen correctamente
- Revisa la consola del navegador para errores de carga

## Licencia

Este proyecto es personal y está destinado para uso en GitHub Pages.

---

**Desarrollado por**: Anuar Stiven Sierra Royero  
**Lema**: "Innovar, liderar y dejar una huella medible."

