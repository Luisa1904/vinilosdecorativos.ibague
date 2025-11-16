
Vinilos Decorativos Ibagué — Plantilla GSAP animada (local)
==========================================================

Contenido del paquete:
- index.html
- catalogo.html
- servicios.html
- proyectos.html
- nosotros.html
- blog.html
- faq.html
- contacto.html
- assets/css/styles.css
- assets/js/app.js
- assets/images/* (imágenes SVG de ejemplo)

INSTRUCCIONES:
1) Descomprime el archivo.
2) Coloca tus imágenes reales en la carpeta 'assets/images/' respetando los nombres indicados (o actualiza las rutas en los HTML):
   - assets/images/hero.svg
   - assets/images/wall1.svg
   - assets/images/wall2.svg
   - assets/images/kidroom.svg
   - assets/images/office.svg
   - assets/images/team.svg
   - assets/images/project1.svg
   - assets/images/project2.svg
   - assets/images/cat-home.svg
   - assets/images/cat-business.svg
   - assets/images/cat-auto.svg
   - assets/images/cat-kids.svg

   Si prefieres rutas absolutas locales en tu equipo, puedes reemplazar en los HTML las rutas relativas por rutas tipo:
   C:\Users\TuUsuario\Pictures\vinilos\hero.jpg  (Windows)
   /home/tuusuario/Pictures/vinilos/hero.jpg         (Linux/Mac)

3) Abre index.html en tu navegador local. Todos los archivos son estáticos; no se requiere servidor, aunque es recomendable usar un servidor local (Live Server, python -m http.server) para evitar restricciones de algunos navegadores.

4) Para producción:
   - Reemplaza las imágenes SVG por JPG/WEBP optimizados.
   - Conecta formularios a tu backend o Zapier (ver comentarios en HTML).
   - Añade SEO meta tags y etiquetas hreflang si vas a tener versión EN.

PERSONALIZACIÓN:
- El archivo assets/js/app.js contiene las animaciones basadas en GSAP (CDN usado en HTML).
- styles.css contiene estilos base; si quieres usar Tailwind o un framework, te entrego la versión.

NOTA SOBRE IMÁGENES LOCALES:
- Incluir rutas absolutas a imágenes del computador funcionará localmente pero **no** cuando subas el sitio a un hosting. Para hosting deberás subir las imágenes al servidor y usar rutas relativas o URLs públicas.

