"use client";
import React, { useEffect, useState } from "react";
import { useToast, Text, Flex, Spinner, Badge, Button } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";

const Repos = ({ reposUrl }) => {
  const toast = useToast();
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showMore, setShowMore] = useState(false);
  console.log("repos here", repos);
  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true);
        const res = await fetch(reposUrl);
        const data = await res.json();
        if (data.message) throw new Error(data.message);
        setRepos(data);
      } catch (error) {
        toast({
          title: "Error",
          description: error.message,
          status: "Error",
          duration: 3000,
          isClosable: true,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [reposUrl, toast]);
  return (
    <>
      <Text
        textAlign={"center"}
        letterSpacing={1.5}
        fontSize={"3xl"}
        fontWeight={"bold"}
        color={"purple.500"}
        mt={4}
      >
        REPOS
      </Text>
      {loading && (
        <Flex justifyContent={"center"}>
          <Spinner size={"xl"} my={4} />
        </Flex>
      )}

      {repos
        .sort((a, b) => b.stargazers_count - a.stargazers_count)
        .map((repos, index) => {
          if (index > 4 && !showMore) return null;
          return (
            <Flex
              key={repos.id}
              padding={4}
              bg={"whiteAlpha.200"}
              _hover={{ bg: "whiteAlpha.400" }}
              my={4}
              px={10}
              gap={4}
              borderRadius={4}
              transition={"all 0.3s ease"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Flex flex={1} direction={"column"}>
                <Link href={repos.html_url} fontSize={"md"} fontWeight={"bold"}>
                  {repos.name}
                </Link>
                <Badge
                  fontSize={"0.7em"}
                  colorScheme={"whatsapp"}
                  w={"min-content"}
                  textAlign={"center"}
                  px={1}
                  mt={1}
                >
                  Language: {repos.language || "None"}
                </Badge>
              </Flex>

              <Flex flex={1} gap={4} ml={6}>
                <Badge
                  fontSize={"0.9em"}
                  colorScheme={"orange"}
                  flex={1}
                  textAlign={"center"}
                >
                  Stars: {repos.stargazers_count}
                </Badge>
                <Badge
                  fontSize={"0.9em"}
                  colorScheme={"pink"}
                  flex={1}
                  textAlign={"center"}
                >
                  Forks: {repos.forks_count}
                </Badge>
                <Badge
                  fontSize={"0.9em"}
                  colorScheme={"blue"}
                  flex={1}
                  textAlign={"center"}
                >
                  Watchers: {repos.watchers_count}
                </Badge>
              </Flex>
            </Flex>
          );
        })}

      {showMore && (
        <Flex justifyContent={"center"} my={4}>
          <Button
            size={"md"}
            colorScheme={"purple"}
            onClick={() => setShowMore(false)}
          >
            show less
          </Button>
        </Flex>
      )}

      {!showMore && repos.length > 5 &&(
        <Flex justifyContent={"center"} my={4}>
          <Button
            size={"md"}
            colorScheme={"purple"}
            onClick={() => setShowMore(true)}
          >
            show more
          </Button>
        </Flex>
      )}
    </>
  );
};

export default Repos;
