import { Heading, HStack, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { FunctionComponent } from "react";

const Navbar: FunctionComponent = () => {
  return (
    <HStack
      w="100%"
      justifyContent="space-between"
      alignItems="center"
      backgroundImage="url(https://static-mh.content.disney.io/starwars/assets/navigation/navigation_stars-c6452e016c73.jpg)"
      px={{ base: 4, sm: 8 }}
      pt={4}
      pb={2}
    >
      <Link href="/">
        <a>
          <VStack justifyContent="center">
            <Heading variant="logo">STAR</Heading>
            <Heading variant="logo">WARS</Heading>
          </VStack>
        </a>
      </Link>
    </HStack>
  );
};

export default Navbar;
