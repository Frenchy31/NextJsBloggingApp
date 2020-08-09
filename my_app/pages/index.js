import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from "next/link";
import React from "react";

export default function Home() {
  return (

    <div className={styles.container}>
      <Head>
        <title>My Next Blog</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome in my next blog
        </h1>

        <div className={styles.grid}>
        <Link href="./posts/1" >
          <a className={styles.card}>
            <h3>All posts &rarr;</h3>
            <p>You will see all my posts</p>
          </a>
        </Link>
        </div>
      </main>
    </div>
  )
}
