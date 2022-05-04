import {
  Heading,
  HStack,
  VStack,
  Text,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
// import Image from "next/image";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | Star Wars</title>
      </Head>
      <HStack justifyContent="space-between" alignItems="center" p={8}>
        <Link href="/">
          <a>
            <VStack justifyContent="center">
              <Heading variant="logo">STAR</Heading>
              <Heading variant="logo">WARS</Heading>
            </VStack>
          </a>
        </Link>
        <Link href="#characters">
          <a>
            <Text variant="hover-red">CHARACTERS</Text>
          </a>
        </Link>
      </HStack>
    </>
  );
};

export default Home;
