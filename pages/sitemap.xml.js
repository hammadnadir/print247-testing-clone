import { industries } from "@/data/industries";
import { politicalSignsProducts } from "@/data/politicalSignsProducts";
import { blogDataRequest } from "@/redux/blog";
import { siteMapDataRequest } from "@/redux/sitemap";
import { wrapper } from "@/store";

const EXTERNAL_DATA_URL = 'https://print247.us';

function generateSiteMap(siteMapData, blogData) {
    const allIndustries = Object.keys(industries)?.map((data) => data?.toLowerCase())
    const products = siteMapData?.payload?.catgeory
    // ?.filter((data)=>!allIndustries.includes(data?.slug?.toLowerCase()))
    const blogs = blogData?.payload?.data

    const staticUrls = [
        'about-us',
        'contact-us',
        'post',
        'faq',
        'privacy-policy',
        'terms-and-conditions',
        'political-campaign-supplies',
        'catalogue'
    ];

    return `<urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
      http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  
      <url>
          <loc>${EXTERNAL_DATA_URL}</loc>
      </url>
      ${staticUrls
            .map((url) => {
                return `
            <url>
                <loc>${`${EXTERNAL_DATA_URL}/${url}`}</loc>
            </url>
          `;
            })
            .join('')}
  
      ${products && products
            // .filter((data)=>data.slug !== "political-campaign-supplies")
            .map((cat) => {
                const mainSlug = cat?.page_slug;
                const slug = cat?.slug;

                const productUrls = cat?.category_products?.map((product) => {
                    const slug2 = product?.slug;
                    return `
              <url>
                  <loc>${`${EXTERNAL_DATA_URL}/${slug2}`}</loc>
              </url>
            `;
                }).join('') || '';

                return `
            <url>
                <loc>${`${EXTERNAL_DATA_URL}/category/${mainSlug}-${slug}`}</loc>
            </url>
            ${productUrls}
          `;
            })
            .join('')}
     ${Object.values(industries)
            .map((data) => {
                return `
            <url>
                <loc>${`${EXTERNAL_DATA_URL}${data?.links}`}</loc>
            </url>
          `;
            })
            .join('')}
     ${Array.isArray(blogs) && blogs
            .map((data) => {
                return `
            <url>
                <loc>${`${EXTERNAL_DATA_URL}/post/${data?.slug}`}</loc>
            </url>
          `;
            })
            .join('')}
             ${politicalSignsProducts
            .map((data) => {
                return `
            <url>
                <loc>${`${EXTERNAL_DATA_URL}/political-campaign-supplies/${data?.slug}`}</loc>
            </url>
          `;
            })
            .join('')}
    </urlset>`;
}

function SiteMap() {
    return null; // getServerSideProps will handle the sitemap generation
}

export const getServerSideProps = wrapper.getServerSideProps(
    (store) => async (ctx) => {
        const siteMapData = await store.dispatch(siteMapDataRequest())
        const blogData = await store.dispatch(blogDataRequest("all"))

        const sitemap = generateSiteMap(siteMapData, blogData);

        ctx.res.setHeader('Content-Type', 'text/xml');
        ctx.res.write(sitemap);
        ctx.res.end();

        return {
            props: {},
        };
    }
);

export default SiteMap;
