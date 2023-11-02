import Gallery from "@/components/Gallery";
import Head from "next/head";
import React from "react";

const Index = () => {
  return (
    <>
      <Head>
        <title>Image Gallery</title>
        <meta
          name="description"
          content="Create a responsive image gallery using React JS with the following features: reordering, deleting multiple images, and setting a feature image. The gallery should be visually appealing and provide a seamless user experience."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Gallery />
    </>
  );
};

export default Index;
