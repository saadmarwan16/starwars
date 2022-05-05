import { HStack, VStack } from "@chakra-ui/react";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Characters from "../components/Characters";
import Navbar from "../components/Navbar";
import { ICharacter } from "../interfaces";

interface HomeProps {
  characters: ICharacter[];
}

const Home: NextPage<HomeProps> = ({ characters }) => {
  return (
    <>
      <Head>
        <title>Home | Star Wars</title>
      </Head>
      <VStack minH="100vh">
        <Navbar />
        <HStack flexGrow={1} bg="reds.base" width="100%"></HStack>
      </VStack>
      <Characters characters={characters} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async (_) => {
  try {
    const response = await fetch(
      "https://akabab.github.io/starwars-api/api/all.json"
    );

    const characters = (await response.json()) as ICharacter[];

    return {
      props: {
        characters,
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
};

export default Home;
