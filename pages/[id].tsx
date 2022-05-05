import { AspectRatio, Box, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import { ICharacter } from "../interfaces";
import Image from "next/image";
import { useState } from "react";
import { TField } from "../types";

interface CharacterDetailsProps {
  character: ICharacter;
}

const CharacterDetails: NextPage<CharacterDetailsProps> = ({ character }) => {
  const [src, setSrc] = useState<string>(character.image);

  return (
    <>
      <Head>
        <title>{character.name} | Star Wars</title>
      </Head>
      <VStack minH="100vh">
        <Navbar />
        <Box px={{ base: 4, sm: 8 }} py={{ base: 6, sm: 12 }} w="100%">
          <Flex
            flexDirection={{ base: "column", md: "row" }}
            gap={{ base: 4, md: 12 }}
            w={{ base: "100%", sm: "85%", md: "80%" }}
            m="auto"
            bg="blacks.accent"
            borderRadius={8}
            px={{ base: 4, md: 0 }}
          >
            <AspectRatio
              w="50%"
              ratio={0.75}
              mt={{ base: 6, md: 0 }}
              sx={{
                "> span": {
                  borderLeftRadius: 8,
                  borderRightRadius: { base: 8, md: 0 },
                },
              }}
            >
              <Image
                alt={character.name}
                src={src}
                layout="fill"
                onError={() => setSrc("/unknown.jpg")}
              />
            </AspectRatio>
            <VStack
              w={{ base: "100%", md: "50%" }}
              alignItems="flex-start"
              gap={2}
              py={2}
            >
              <>
                <Text fontSize="3xl" mb={{ base: 3, md: 6 }}>
                  {character.name}
                </Text>
                {[
                  "gender",
                  "height",
                  "species",
                  "eyeColor",
                  "skinColor",
                  "homeworld",
                ].map((value, index) => {
                  const field = value as TField;

                  return (
                    <HStack key={index} gap={3}>
                      <Text fontSize="lg" fontWeight="bold">
                        {field.toUpperCase()}:
                      </Text>
                      <Text fontSize="lg" variant="hover-red" cursor="pointer">
                        {character[field] ?? "Nil"}
                      </Text>
                    </HStack>
                  );
                })}
                <VStack alignItems="flex-start">
                  <Text fontSize="lg" fontWeight="bold">
                    Affiliations
                  </Text>
                  {character.affiliations.length === 0 ? (
                    <Text fontSize="lg" variant="hover-red" cursor="pointer">
                      No Affiliations
                    </Text>
                  ) : (
                    character.affiliations.map((affiliation, index) => (
                      <Text
                        fontSize="lg"
                        variant="hover-red"
                        cursor="pointer"
                        key={index}
                      >
                        {affiliation}
                      </Text>
                    ))
                  )}
                </VStack>
                <HStack gap={3} pb={8} w="100%">
                  <Text fontSize="lg" fontWeight="bold">
                    WIKI:
                  </Text>
                  <a href={character.wiki} target="_blank">
                    <Text fontSize="lg" variant="hover-red" cursor="pointer">
                      About Character
                    </Text>
                  </a>
                </HStack>
              </>
            </VStack>
          </Flex>
        </Box>
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
