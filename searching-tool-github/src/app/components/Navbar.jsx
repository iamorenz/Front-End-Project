"use client";

import { Box, Button, Flex, Image } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Flex justifyContent={"space-between"} py={6} alignItems={"center"}>
      <Box position={"relative"} aspectRatio={5 / 3} minHeight={20}>
        <Image
          src={"/logo.png"}
          alt="github logo"
          sx={{ filter: "invert(1)" }}
          boxSize={"110px"}
        />
      </Box>

      <Box>
        <Button size={"md"} colorScheme={"purple"}>
          Search History
        </Button>
      </Box>
    </Flex>
  );
};

export default Navbar;
