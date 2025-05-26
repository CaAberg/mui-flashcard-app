"use client";

import dynamic from "next/dynamic";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";

const FlashCard = dynamic(() => import("./components/FlashCard/Flashcard"), {
  ssr: false,
});

export default function Page() {
  return (
    <>
      <Header />
      <FlashCard />
      <Footer />
    </>
  );
}

