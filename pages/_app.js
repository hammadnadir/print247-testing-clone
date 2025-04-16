import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.scss";
import "../styles/custom-quote.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-toastify/dist/ReactToastify.css";
import "aos/dist/aos.css";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import "react-phone-input-2/lib/style.css";
import { ToastContainer } from "react-toastify";
import Loader from "@/components/common/loaders";
import {
  excludedPaths,
  getDeviceIdFromLocalStorage,
  getUserIdFromLocalStorage,
  setUserIdToLocalStorage,
  useDeviceId
} from "@/utils";
import { wrapper } from "@/store";
import "@radix-ui/themes/styles.css";
import WhatsappIcon from "@/components/common/whatsappIcon";
import ClarityScript from "@/components/common/clarity";
import AppWrapper from "@/components/AppWrapper";
import { Provider } from "react-redux";
import CustomHead from "@/components/CustomHead";


function App({ Component, pageProps }) {
  const router = useRouter();
  const deviceId = getDeviceIdFromLocalStorage();
  const { store } = wrapper.useWrappedStore(pageProps);

  const [isSSR, setIsSSR] = useState(true);
  const [show, setShow] = useState(false)

  useEffect(() => {
    const id = getUserIdFromLocalStorage();
    if (!id) {
      setUserIdToLocalStorage();
    } else {
    }
  }, []);

  useEffect(() => {
    if (router.pathname !== "/category/[id]") {
      localStorage.setItem("scrollY", "0");
    }
  }, [router.pathname]);

  useEffect(() => {
    if (!deviceId) {
      useDeviceId();
    }
  }, [deviceId]);

  useEffect(() => {
    if (typeof localStorage !== "undefined" && router.pathname !== "/unavailable") {
      localStorage.setItem("ActiveConsole", "0");
    }
  }, []);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  if (isSSR) {
    return null;
  }


  return (
    <>
      <Provider store={store}>
        <CustomHead />
        {!excludedPaths.includes(router.pathname) && <>
          <WhatsappIcon />
        </>}
        <Loader />
        <div style={{ backgroundColor: router.pathname === "/user/cart" ? "#F1F1F1" : "" }}>
          {!excludedPaths.includes(router.pathname) && <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-M3VFRZ4W"
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            ></iframe>
          </noscript>}
          {!excludedPaths.includes(router.pathname) && <ClarityScript />}
          {/* {!excludedPaths.includes(router.pathname) && show && <TopLine />} */}
          <AppWrapper show={show} setShow={setShow}>
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar
              newestOnTop
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
            <Component {...pageProps} />
          </AppWrapper>
        </div>
      </Provider>
    </>
  );
}

export default App
