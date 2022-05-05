import {
  Heading,
  Text,
  SimpleGrid,
  Box,
  HStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FunctionComponent, useState } from "react";
import { ICharacter } from "../interfaces";
import Character from "./Character";

interface CharactersProps {
  characters: ICharacter[];
}

const Characters: FunctionComponent<CharactersProps> = ({ characters }) => {
  const [value, setValue] = useState<number>(12);
  const [isThereMore, setIsThereMore] = useState<boolean>(true);

  const headingSize = useBreakpointValue({ base: "md", sm: "lg" });

  const handleShowMore = () => {
    if (value + 12 >= characters.length) {
      setIsThereMore(false);
    }

    setValue(value + 12);
  };

  return (
    <Box as="section" id="characters" p={{ base: 4, sm: 8 }}>
      <Heading mb={{ base: 6, sm: 12 }} size={headingSize}>
        CHARACTERS
      </Heading>
      <SimpleGrid
        width="100%"
        columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
        spacing={10}
      >
        {characters.map(
          (character, index) =>
            index < value && (
              <Character character={character} key={character.id} />
            )
        )}
      </SimpleGrid>
      <HStack justifyContent="center" pt={{ base: 6, sm: 12 }}>
        {isThereMore && (
          <Text
            variant="hover-red"
            onClick={handleShowMore}
            cursor="pointer"
            fontSize="2xl"
          >
            Show More
          </Text>
        )}
        {!isThereMore && (
          <Text fontSize="2xl" color="whites.accent">
            No More
          </Text>
        )}
      </HStack>
    </Box>
  );
};

export default Characters;
