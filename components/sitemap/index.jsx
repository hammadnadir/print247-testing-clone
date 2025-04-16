const generateSitemap = (siteMapData) => {
    const baseUrl = 'https://print247-testing-clone.vercel.app';

    const lastmod = '2023-08-21'; // You can set this as needed.
    const products = siteMapData?.catgeory ? siteMapData?.catgeory : []

    let sitemap = `<urlset
    xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
          http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
    `

    // Add the static URLs
    sitemap += `<url><loc>${baseUrl}</loc><lastmod>${lastmod}</lastmod></url>`;
    sitemap += `<url><loc>${baseUrl}/about-us</loc><lastmod>${lastmod}</lastmod></url>`;
    sitemap += `<url><loc>${baseUrl}/contact-us</loc><lastmod>${lastmod}</lastmod></url>`;
    sitemap += `<url><loc>${baseUrl}/post</loc><lastmod>${lastmod}</lastmod></url>`;
    sitemap += `<url><loc>${baseUrl}/faq</loc><lastmod>${lastmod}</lastmod></url>`;
    sitemap += `<url><loc>${baseUrl}/privacy-policy</loc><lastmod>${lastmod}</lastmod></url>`;
    sitemap += `<url><loc>${baseUrl}/terms-and-conditions</loc><lastmod>${lastmod}</lastmod></url>`;

    // category page and product Page
    for (let i = 0; i < products?.length; i++) {
        const mainSlug = products?.[i]?.page_slug
        const slug = products?.[i]?.slug
        const url = `${baseUrl}/category/${mainSlug}-${slug}`
        sitemap += `<url><loc>${url}</loc><lastmod>${lastmod}</lastmod></url>`

        for (let y = 0; y < products?.[i]?.category_products?.length; y++) {
            const slug2 = products?.[i]?.category_products?.[y]?.slug
            const url = `${baseUrl}/${slug2}`
            sitemap += `<url><loc>${url}</loc><lastmod>${lastmod}</lastmod></url>`
        }
    };

    sitemap += `</urlset>`
    return sitemap;
}

export default generateSitemap;