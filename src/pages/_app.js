import "@styles/globals.css";

function MyApp({ Component, pageProps, router }) {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
