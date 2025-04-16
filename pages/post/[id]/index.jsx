
import ChatTwo from "@/components/Home/chatTwo";
import Articles from "@/components/ReadMore/Articles";
import Author from "@/components/ReadMore/Author";
import DetailReadMore from "@/components/ReadMore/DetailReadMore";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import { blogDataRequest, blogDetailRequest } from "@/redux/blog";
import { headerDataRequest } from "@/redux/home";
import { wrapper } from "@/store";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

function ReadMore({ metaTitle, metaDescription }) {
  const router = useRouter();
  const { blogDetail } = useSelector((state) => state.blog);
  // Ensure that metaTitle and metaDescription are passed from the server-side props
  const { countryName, ip } = useSelector((state) => state.getCountry);

  useEffect(() => {
    const scripts =
      blogDetail?.data?.post?.script_text &&
      blogDetail?.data?.post?.script_text !== undefined &&
      JSON.parse(blogDetail?.data?.post?.script_text);

    if (scripts) {
      const allScripts = Object.values(scripts);

      if (allScripts && allScripts.length > 0) {
        allScripts.forEach((script) => {
          const isJsonLd = script?.includes("application/ld+json");

          if (isJsonLd) {
            const scriptTag = document.createElement("script");
            scriptTag.type = "application/ld+json";
            scriptTag.innerHTML = script?.match(/<script[^>]*>([\s\S]*?)<\/script>/)[1];
            document.head.appendChild(scriptTag);
          } else {
            const cleanedScript = script?.replace(/<\/?script[^>]*>/g, "").trim();

            try {
              const executeScript = new Function(cleanedScript);
              executeScript();
            } catch (error) {
              console.error("Error executing script:", error);
            }
          }
        });
      }
    }
  }, [blogDetail]);

  const blogId = parseInt(router.query.id);

  return (
    <>
      <Head>
        <title>{metaTitle || "Default Meta Title"}</title>
        <meta name="description" content={metaDescription || "Default Meta Description"} />
        <meta
          name="google-site-verification"
          content="WLnhx0lStwpvOE5GoUp3EzD_KqDQWmcqXyxHbxOCVhE"
        />
        <meta
          name="p:domain_verify"
          content="fe5b86d88716bd802bfdbfdc3a9f51fb"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-YZ0SGTQD2B"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-YZ0SGTQD2B');
            `,
          }}
        />
        <link
          rel="canonical"
          href={`https://print247.us${router?.asPath}`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/image/print247FavIcon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
          rel="stylesheet"
        ></link>
        <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"/>
      </Head>
      <main>
        <Header />
        <DetailReadMore />
        <Author blogId={blogId} />
        <Articles />
        <ChatTwo />
        <Footer />
      </main>
    </>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (ctx) => {
    try {
      const blogRes = await store.dispatch(blogDetailRequest(ctx?.params?.id));
      if (!blogRes.payload.data.post) {
        return {
          redirect: {
            destination: "/404",
            permanent: false,
          },
        };
      }
      
      const metaTitle = blogRes.payload.data.post.meta_title || "Default Meta Title";
      const metaDescription = blogRes.payload.data.post.meta_description || "Default Meta Description";

      await Promise.all([
        store.dispatch(headerDataRequest()),
        store.dispatch(blogDataRequest({page: 1, search: ""})),
      ]);

      return {
        props: {
          metaTitle,
          metaDescription,
        },
      };
    } catch (error) {
      console.error("Error in getServerSideProps:", error);
      return {
        props: {
          metaTitle: "Error loading title",
          metaDescription: "Error loading description",
        },
      };
    }
  }
);

export default ReadMore;
