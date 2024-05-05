"use client";

import { Box, Button, Heading, useClipboard } from "@chakra-ui/react";
import { CopyIcon } from "@chakra-ui/icons";
import { CodeBlock } from "react-code-block";

import { getAnime } from "@/constants/anime";

const CodeSnip = () => {
  const { hasCopied, setValue, onCopy } = useClipboard("");

  return (
    <Box mt={10} mb={20}>
      <Heading as={"h4"} mb={4}>
        simple usage
      </Heading>

      <CodeBlock code={getAnime} language={"tsx"}>
        <Box
          pos={"relative"}
          as={CodeBlock.Code}
          bg={"blackAlpha.900"}
          borderRadius={10}
          p={4}
          className="bg-black"
        >
          <CodeBlock.LineContent>
            <CodeBlock.Token />
          </CodeBlock.LineContent>

          <Button
            onClick={() => {
              setValue(getAnime);
              onCopy();
            }}
            pos={"absolute"}
            top={2}
            right={2}
          >
            {hasCopied ? "Copied!" : <CopyIcon />}
          </Button>
        </Box>
      </CodeBlock>
    </Box>
  );
};

export default CodeSnip;
