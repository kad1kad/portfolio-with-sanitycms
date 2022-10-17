import type { AppProps } from "next/app";

import "../styles/globals.css";
import "../styles/locomotive-scroll.css";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const containerRef = useRef(null);

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        multiplier: 1.5,
        smoothMobile: 0,
        reloadOnContextChange: true,
        smartphone: {
          smooth: false,
          lerp: 0.1,
          breakpoint: 450,
          touchMultiplier: 2,
        },
        tablet: {
          smooth: 1,
          breakpoint: 1024,
        },
      }}
      watch={
        [
          //..all the dependencies you want to watch to update the scroll.
          //  Basicaly, you would want to watch page/location changes
          //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
        ]
      }
      containerRef={containerRef}
    >
      <main data-scroll-container ref={containerRef}>
        <Component {...pageProps} />
      </main>
    </LocomotiveScrollProvider>
  );
}

export default MyApp;
