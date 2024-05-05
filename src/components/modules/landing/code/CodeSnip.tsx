"use client";
import { Box, Heading } from "@chakra-ui/react";
import { CodeBlock, CopyBlock, hybrid, sunburst } from "react-code-blocks";

const CodeSnip = () => {
  const code = `const getAnime = async () => {
  const res = await fetch("/api/anime");
  const data = await res.json();

  console.log(data);
};

getAnime();`;

  return (
    <Box mt={10} mb={20}>
      <Heading as={"h4"} mb={4}>
        simple usage
      </Heading>

      <CopyBlock
        text={code}
        language={"tsx"}
        showLineNumbers
        theme={hybrid}
        customStyle={{ fontFamily: "dank mono" }}
      />
    </Box>
  );
};

export default CodeSnip;
