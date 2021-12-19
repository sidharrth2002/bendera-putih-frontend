import React from "react";
import {
  Box,
  Container,
  Heading,
  VStack,
  Button,
  Text,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function OpenSource() {
  return (
    <Box padding="4rem" backgroundColor="#2d2d2d" color={"white"}>
      <Container maxw="container.sm" fontWeight={200}>
        <VStack spacing={5}>
          <Heading>Sambal SOS is open source.</Heading>
          <Button
            colorScheme="teal"
            onClick={() =>
              window.open(
                "https://github.com/sidharrth2002/sambal-sos-app",
                "_blank"
              )
            }
          >
            <Text>
              <FontAwesomeIcon icon={faGithub} size="1x" /> Check out the code
            </Text>
          </Button>
        </VStack>
      </Container>
    </Box>
  );
}