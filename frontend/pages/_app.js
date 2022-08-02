import "../styles/globals.css";
import { Provider, createClient } from "urql";
import Nav from "./components/Nav";
import { StateContext } from "../lib/context";
import Footer from "./components/Footer";

const client = createClient({
  url: process.env.NEXT_PUBLIC_BACKEND_API,
});

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Provider value={client}>
        <Nav />
        <Component {...pageProps} />
        <Footer />
      </Provider>
    </StateContext>
  );
}

export default MyApp;
