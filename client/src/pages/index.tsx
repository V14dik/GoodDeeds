import Head from "next/head";
import MainLayout from "@/layouts/MainLayout";
import DeedsList from "@/components/DeedsList";
import SearchUser from "@/components/UserSearch";
import { useState } from "react";

export default function Home() {
  const [isFriend, setIsFriend] = useState(false);
  const [friendId, setFriendId] = useState(NaN);

  return (
    <>
      <Head>
        <title>Good Deeds</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <SearchUser />
        <DeedsList isFriendList={isFriend} />
      </MainLayout>
    </>
  );
}
