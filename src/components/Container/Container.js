import React from "react";
import Footer from "../Footer/Footer";
import Contact from "@components/Contact/Contact";
import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "@components/Navbar/Navbar";
import { AnimatePresence, motion } from "framer-motion";

const Container = ({ children, ...customMeta }) => {
  const router = useRouter();
  

  const meta = {
    title:
      "Viable Knowledge Masters - Modern, seamless solutions at record time",
    description: `With our strong and creative workforce, we customize and implement projects in extremely short time interval.`,
    image: "/vkm_logo.png",
    type: "website",
    ...customMeta,
  };

  return (
    <>
      <Head>
        <link rel="icon" href="/vkm_logo.png" />
        <link rel="apple-touch-icon" href="/vkm_logo.png" />
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://www.viableknowledgemasters.com${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://www.viableknowledgemasters.com${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Viable Knowledge Masters" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content="/vkm_logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@viablekm" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content="/vkm_logo.png" />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}

        <meta name="application-name" content="Viable Knowledge Masters" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta
          name="apple-mobile-web-app-title"
          content="Viable Knowledge Masters"
        />

        <meta name="format-detection" content="+234(0)- 906-413-7838" />
        <meta name="mobile-web-app-capable" content="yes" />

        <meta name="msapplication-TileColor" content="#2B5797" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#ffffff" />

        <link rel="apple-touch-icon" href="/vkm_logo.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/vkm_logo.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/vkm_logo.png" />
        <link rel="apple-touch-icon" sizes="167x167" href="/vkm_logo.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" type="image/jpg" sizes="32x32" href="/vkm_logo.png" />
        <link rel="icon" type="image/jpg" sizes="16x16" href="/vkm_logo.png" />

        <link rel="mask-icon" href="/vkm_logo.png" color="#5bbad5" />
        <link rel="shortcut icon" href="/vkm_logo.png" />

        <meta
          name="twitter:url"
          content="https://www.viableknowledgemasters.com"
        />
        <meta
          name="twitter:title"
          content="Viable Knowledge Masters - Modern, seamless solutions at record time"
        />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content="/vkm_logo.png" />
        <meta name="twitter:creator" content="@viablekm" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Viable Knowledge Masters" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:site_name" content="viableknowledgemasters.com" />
        <meta property="og:url" content="https://viableknowledgemasters.com" />
        <meta property="og:image" content="/vkm_logo.png" />
      </Head>
      <Navbar />
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={router.route}
          initial="pageInitial"
          animate="pageAnimate"
          variants={{
            pageInitial: {
              opacity: 0,
              duration: 1,
            },
            pageAnimate: {
              opacity: 1,
              transition: {
                duration: 1,
              },
            },
            pageExit: {
              opacity: 0,
              duration: 2,
            },
          }}
          exit="pageExit"
        >
          <main>{children}</main>
          <Contact />
          <Footer />
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Container;
