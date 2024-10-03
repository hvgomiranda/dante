const SitemapGenerator = require('sitemap-generator');

const generator = SitemapGenerator('https://perinidante.com.ar/', {
  stripQuerystring: false,
  filepath: './public/sitemap.xml', 
  maxEntriesPerFile: 50000,
  lastMod: true,
  url: [
    { url: '/', changefreq: 'monthly', priority: 1.0 },
    { url: '/contact', changefreq: 'monthly', priority: 0.9 },
    { url: '/about', changefreq: 'monthly', priority: 0.8 },
    { url: '/section/film-tv-series', changefreq: 'monthly', priority: 0.7 },
    { url: '/section/music-videos', changefreq: 'monthly', priority: 0.7 },
    { url: '/section/commercials', changefreq: 'monthly', priority: 0.7 }
  ]
});

generator.start();

generator.on('done', () => {
  console.log('Sitemap generado exitosamente!');
});

generator.on('error', (error) => {
  console.log(`Error generando el sitemap: ${error}`);
});
