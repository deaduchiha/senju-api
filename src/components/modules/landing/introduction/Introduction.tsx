import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import Kurama from "./parts/Kurama";

const Introduction = () => {
  return (
    <>
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

      <VStack mt={{ base: 10, md: 0 }}>
        <Heading as={"h3"} fontSize={"1.5rem"}>
          Get tired of Lorem ipsum data?!
        </Heading>
        <Heading as={"h4"} fontSize={"1.2rem"}>
          {"didn't"} you find any anime API!?!
        </Heading>
        <Text
          textAlign={"center"}
          color={"#808080"}
          px={{ base: "60px", md: "100px" }}
        >
          SENJU fake api is a free online REST API that you can use whenever you
          need. {"It's"} awesome for teaching purposes, sample codes, tests,
          etc.
        </Text>
      </VStack>
    </>
  );
};

export default Introduction;
