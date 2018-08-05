const sm = require('sitemap')
const fs = require('fs');
require('dotenv').config()
const request = require('request');
const SITE_URL = process.env.SITE_URL || 'https://cashineh.com';
const API_URL = process.env.API_URL || 'https://api.cashineh.com';

let static_urls = [{
        url: '/',
        changefreq: 'always',
        priority: 1
    },
    {
        url: '/how-to-work',
        changefreq: 'weekly',
        priority: 0.8
    },
    {
        url: '/work-with-us',
        changefreq: 'weekly',
        priority: 0.8
    },
    {
        url: '/about-us',
        changefreq: 'weekly',
        priority: 0.8
    },
    {
        url: '/contact-us',
        changefreq: 'weekly',
        priority: 0.8
    },
    {
        url: '/privacy-policy',
        changefreq: 'weekly',
        priority: 0.8
    },
    {
        url: '/terms',
        changefreq: 'weekly',
        priority: 0.8
    },
    {
        url: '/faq',
        changefreq: 'weekly',
        priority: 0.8
    },
    {
        url: '/hiring',
        changefreq: 'weekly',
        priority: 0.8
    },
]
_build_sitemap(static_urls, 'sitemap_static')
request.get({
    method: "GET",
    uri: `${API_URL}/sitemap`,
    json: true
}, (error, response, body) => {
    let temp = {
        url: '',
        changefreq: 'daily',
        priority: 0.9
    }
    let merchants_url = []
    let categories_url = []
    for (let cat of body.categories) {
        let item = JSON.parse(JSON.stringify(temp))
        item.url = `/categories/${cat.id}/${cat.url}`
        categories_url.push(item)
    }
    let all_category = JSON.parse(JSON.stringify(temp))
    all_category.url = `/categories/all`
    all_category.priority = 1;
    all_category.changefreq = 'always';
    categories_url.push(all_category);
    _build_sitemap(categories_url, 'sitemap_categories')
    for (let merchant of body.merchants) {
        let item = JSON.parse(JSON.stringify(temp))
        item.url = `/merchants/${merchant.id}/${merchant.name}`
        merchants_url.push(item)
    }
    _build_sitemap(merchants_url, 'sitemap_merchants')
})

function _build_sitemap(urls, sitemap_name) {
    var sitemap = sm.createSitemap({
        hostname: SITE_URL,
        cacheTime: 600000, //600 sec (10 min) cache purge period
        urls: urls
    });
    fs.writeFileSync(`./public/${sitemap_name}.xml`, sitemap.toString());
}