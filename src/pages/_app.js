import "../styles/globals.css";
import { AnimatePresence, motion } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  return (
    <div>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={router.route}
          initial="pageInitial"
          animate="pageAnimate"
          variants={{
            pageInitial: {
              opacity: 0,
            },
            pageAnimate: {
              opacity: 1,
              transition: {
                duration: 1,
              },
            },
            pageExit: {
              opacity: 0,
            },
          }}
          exit="pageExit"
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default MyApp;
