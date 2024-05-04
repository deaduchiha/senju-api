import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import Kurama from "./parts/Kurama";

const Introduction = () => {
  return (
    <Flex
      h={{ base: "auto", md: "70svh" }}
      gap={{ base: 10, md: 0 }}
      alignItems={"center"}
      justifyContent={{ base: "center", md: "space-between" }}
      flexDir={{ base: "column-reverse", md: "row" }}
    >
      <VStack spacing={0} alignItems={{ base: "center", md: "flex-start" }}>
        <Heading as={"h1"}>SENJU </Heading>
        <Heading as={"h2"}>Fake anime api</Heading>
        <Text variant={"senjuMode"} as={"p"}>
          fake anime api for testing and prototyping
        </Text>
      </VStack>

      <Box pos={"relative"}>
        <Kurama />
      </Box>
    </Flex>
  );
};

export default Introduction;
