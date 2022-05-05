import { Flex, Heading } from "@chakra-ui/react";
import { NextPage } from "next";

interface NotFoundProps {}

const NotFound: NextPage<NotFoundProps> = () => {
  return (
    <Flex h="100vh" justifyContent="center" alignItems="center">
      <Heading textAlign='center'>An unexpected error occurred</Heading>
    </Flex>
  );
};

export default NotFound;
