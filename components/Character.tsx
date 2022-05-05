import { FunctionComponent, useState } from "react";
import { ICharacter } from "../interfaces";
import { VStack, Text, Box, AspectRatio } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

interface CharacterProps {
  character: ICharacter;
}

const Character: FunctionComponent<CharacterProps> = ({ character }) => {
  const [src, setSrc] = useState<string>(character.image);

  return (
    <Link href={`/${character.id}`}>
      <a>
        <Box
          border="2px solid"
          borderColor="blacks.accent"
          borderRadius={10}
          transition="400ms"
          _hover={{
            transform: "scale(105%)",
          }}
        >
          <VStack w="100%">
            <AspectRatio
              width="100%"
              ratio={0.75}
              sx={{
                "> span": {
                  borderTopRadius: 8,
                },
              }}
            >
              <Image
                alt={character.name}
                layout="fill"
                src={src}
                onError={() => setSrc("/unknown.jpg")}
              />
            </AspectRatio>
            <Box bg="reds.base" w="100%" h={0.5} marginTop="0px !important" />
            <Box
              bg="blacks.accent"
              marginTop="0px !important"
              w="100%"
              borderBottomRadius={8}
              p={1.5}
            >
              <Text textAlign="center" fontSize="lg">
                {character.name.toUpperCase()}
              </Text>
            </Box>
          </VStack>
        </Box>
      </a>
    </Link>
  );
};

export default Character;
