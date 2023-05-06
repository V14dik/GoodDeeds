import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from "@/components/Header/Header";
import MainLayout from "@/layouts/MainLayout";


export default function Home() {
  return (
    <>
      <Head>
        <title>Good Deeds</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <MainLayout>
            <h1>Main Page</h1>
        </MainLayout>
      {/*<main className={`${styles.main}`}>*/}
      {/*  <h1>Main page</h1>*/}
      {/*</main>*/}
    </>
  )
}
