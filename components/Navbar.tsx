import { Heading, HStack, VStack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FunctionComponent } from "react";

interface NavbarProps {}

const Navbar: FunctionComponent<NavbarProps> = () => {
  const router = useRouter();

  return (
    <HStack
      w="100%"
      justifyContent="space-between"
      alignItems="center"
      px={{ base: 4, sm: 8 }}
      pt={4}
    >
      <Link href="/">
        <a>
          <VStack justifyContent="center">
            <Heading variant="logo">STAR</Heading>
            <Heading variant="logo">WARS</Heading>
          </VStack>
        </a>
      </Link>
      {router.pathname === "/" && (
        <Link href="#characters">
          <a>
            <Text
              variant="hover-red"
              fontSize={{ base: "md", sm: "lg", md: "xl" }}
            >
              CHARACTERS
            </Text>
          </a>
        </Link>
      )}
    </HStack>
  );
};

export default Navbar;
