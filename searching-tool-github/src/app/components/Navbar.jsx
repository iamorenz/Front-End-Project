"use client";

import { Box, Button, Flex, Image, useDisclosure } from "@chakra-ui/react";
import HistoryModal from "./HistoryModal";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Flex justifyContent={"space-between"} py={6} alignItems={"center"}>
      <Box >
        <Image
          src={"/logo.png"}
          alt="github logo"
          sx={{ filter: "invert(1)" }}
          boxSize={"110px"}
        />
      </Box>

      <Box>
        <Button size={"md"} colorScheme={"purple"} onClick={onOpen}>
          Search History
        </Button>
      </Box>

      {isOpen && <HistoryModal isOpen={isOpen} onClose={onClose} />}
    </Flex>
  );
};

export default Navbar;
