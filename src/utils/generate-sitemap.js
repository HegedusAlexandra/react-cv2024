const fs = require('fs');
const xmlbuilder = require('xmlbuilder');

const routes = ['/','/projects']; // List your routes here
const domain = 'https://www.alexahegedus.com';

const urlset = xmlbuilder.create('urlset', { encoding: 'UTF-8' })
  .att('xmlns', 'http://www.sitemaps.org/schemas/sitemap/0.9');

routes.forEach(route => {
  const url = urlset.ele('url');
  url.ele('loc', `${domain}${route}`);
  url.ele('changefreq', 'daily');
  url.ele('priority', 0.5);
});

const xml = urlset.end({ pretty: true });

fs.writeFileSync('public/sitemap.xml', xml);
