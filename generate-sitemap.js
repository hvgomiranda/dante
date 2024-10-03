const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

// Crear el stream del sitemap
const sitemap = new SitemapStream({ hostname: 'https://perinidante.com.ar/' });

// Añadir las rutas manualmente
sitemap.write({ url: '/', changefreq: 'monthly', priority: 1.0 });
sitemap.write({ url: '/contact', changefreq: 'monthly', priority: 0.9 });
sitemap.write({ url: '/about', changefreq: 'monthly', priority: 0.8 });
sitemap.write({ url: '/section/film-tv-series', changefreq: 'monthly', priority: 0.7 });
sitemap.write({ url: '/section/music-videos', changefreq: 'monthly', priority: 0.7 });
sitemap.write({ url: '/section/commercials', changefreq: 'monthly', priority: 0.7 });

// Terminar de escribir el sitemap
sitemap.end();

// Escribir el archivo sitemap.xml
streamToPromise(sitemap)
  .then((data) => createWriteStream('./public/sitemap.xml').write(data))
  .then(() => console.log('Sitemap generado exitosamente!'))
  .catch((err) => console.error(`Error generando el sitemap: ${err}`));
