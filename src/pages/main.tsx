import { Footer, Header, Main } from "@/components";
import { GetStaticProps } from "next";
import Head from "next/head";
import React from "react";

export const MainPage = () => {
  return (
    <div>
      <Head>
        <title>Andrés Balcázar</title>
        <meta name="description" content="CV for Andres Balcazar" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default MainPage;

export const getStaticProps: GetStaticProps = async (_) => {
  return {
    props: {},
  };
};
