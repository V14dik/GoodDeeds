import Head from "next/head";
import MainLayout from "@/layouts/MainLayout";
import DeedsList from "@/components/DeedsList";
import SearchUser from "@/components/UserSearch";

export default function Home() {
  return (
    <>
      <Head>
        <title>Good Deeds</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <SearchUser />
        <DeedsList />
      </MainLayout>
    </>
  );
}
