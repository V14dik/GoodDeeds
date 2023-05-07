import Head from "next/head";
import MainLayout from "@/layouts/MainLayout";
import { useEffect, useState } from "react";
import axios from "axios";
import CreateDeed from "@/components/CreateDeed";
import DeedsList from "@/components/DeedsList";

export default function Home() {
  return (
    <>
      <Head>
        <title>Good Deeds</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <CreateDeed />
        <DeedsList />
      </MainLayout>
    </>
  );
}
