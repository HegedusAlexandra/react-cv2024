const { SitemapStream, streamToPromise } = require("sitemap");
const { createWriteStream } = require("fs");

async function generateSitemap() {
  const sitemap = new SitemapStream({
    hostname: "https://www.alexahegedus.com",
  });

  const writeStream = createWriteStream("./public/sitemap.xml");

  sitemap.pipe(writeStream);

  sitemap.write({ url: "/", changefreq: "weekly", priority: 1.0 });

  sitemap.write({ url: "/projects", changefreq: "weekly", priority: 0.9 });

  sitemap.write({ url: "/about", changefreq: "monthly", priority: 0.8 });

  sitemap.write({ url: "/contact", changefreq: "monthly", priority: 0.7 });

  sitemap.end();

  await streamToPromise(sitemap);
  console.log("Sitemap generated!");
}

generateSitemap();