import { Link } from "@chakra-ui/next-js";
import { Flex, HStack } from "@chakra-ui/react";
import Image from "next/image";

const Header = () => {
  const PAGES = ["docs", "blogs", "github"];

  return (
    <Flex justifyContent={"space-between"} w={"full"} py={4}>
      <Link href={"/"} pos={"relative"} w={"90px"} h={"50px"}>
        <Image src={"/senju.svg"} alt="senju" fill priority />
      </Link>

      <HStack spacing={10}>
        {PAGES.map((p) => (
          <Link
            fontSize={"1.1rem"}
            key={p}
            href={`/${p}`}
            _hover={{ textDecor: "none" }}
          >
            {p}
          </Link>
        ))}
      </HStack>
    </Flex>
  );
};

export default Header;
