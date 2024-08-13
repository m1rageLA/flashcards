import type { AppProps } from "next/app";
import Head from "next/head";
import "@/app/styles/main.scss";

export default function FlashCards({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Flashcards</title>
        <meta name="description" content="A description of my app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

// Ctrl + U - проверка SSR или meta