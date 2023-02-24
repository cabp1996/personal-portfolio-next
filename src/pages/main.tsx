import { Header, Profile } from "@/components";
import Head from "next/head";
import React from "react";
import styles from "../styles/MainPage.module.scss";

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

      <main className={styles.main}>
        <Profile />
      </main>
    </div>
  );
};

export default MainPage;
