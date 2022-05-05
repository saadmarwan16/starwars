import {
  AspectRatio,
  Box,
  Flex,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import { ICharacter } from "../interfaces";
import Image from "next/image";

interface CharacterDetailsProps {
  character: ICharacter;
}

const CharacterDetails: NextPage<CharacterDetailsProps> = ({ character }) => {
  return (
    <>
      <Head>
        <title>{character.name} | Star Wars</title>
      </Head>
      <VStack minH="100vh">
        <Navbar />
        <Flex>
          <AspectRatio w="100%" ratio={0.75}>
            <Image alt={character.name} src={character.image} layout="fill" />
          </AspectRatio>
          <Box>
            <Text>{character.id}</Text>
            <Text>{character.name}</Text>
            <Text>{character.gender}</Text>
            <Text>{character.height}</Text>
            <Text>{character.species}</Text>
            <Text>{character.eyeColor}</Text>
            <Text>{character.skinColor}</Text>
            <Text>{character.homeworld}</Text>
            <Text>{character.wiki}</Text>
          </Box>
        </Flex>
        {/* <Box flexGrow='1'>
          <Text>{character.id}</Text>
          <Text>{character.name}</Text>
          <Text>{character.gender}</Text>
          <Text>{character.height}</Text>
          <Text>{character.species}</Text>
          <Text>{character.eyeColor}</Text>
          <Text>{character.skinColor}</Text>
          <Text>{character.homeworld}</Text>
          <Text>{character.wiki}</Text>
        </Box> */}
      </VStack>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const response = await fetch(
      `https://akabab.github.io/starwars-api/api/id/${context.params?.id}.json`
    );

    const character = (await response.json()) as ICharacter;

    return {
      props: {
        character,
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
};

export const getStaticPaths: GetStaticPaths = async (_) => {
  const response = await fetch(
    "https://akabab.github.io/starwars-api/api/all.json"
  );

  const characters = (await response.json()) as ICharacter[];

  const paths = characters.map((character) => `/${character.id}`);

  return {
    paths,
    fallback: false,
  };
};

export default CharacterDetails;
