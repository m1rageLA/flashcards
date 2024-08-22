import type { AppProps } from "next/app";
import Head from "next/head";
import "@/app/styles/main.scss";
import { Provider } from "react-redux";
import store from "@/app/redux/store";

function FlashCards({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Flashcards</title>
        <meta name="description" content="A description of my app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default FlashCards;

// Ctrl + U - проверка SSR или meta
