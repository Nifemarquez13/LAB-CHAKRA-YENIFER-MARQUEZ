import { Box, Heading, Button, Flex, Stack } from "@chakra-ui/react";
import bgImage from "./imagenes/banner-3.png";

function App() {
  return (
    <Box
      h="40vh"
      bg="gray"
      bgImage={[`url(${bgImage})`, null, `url(${bgImage})`]}
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Flex
        direction="column"
        alignItems="center"
        justify="center"
        h="100%"
        bg="rgb(0 0 0 / 50%)"
        p={["0 10%", null, "0 20%"]}
      >
        <Heading variant="banner">Domina las plantas</Heading>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing="40px"
          mt="30px"
          w={["100%", null, "auto"]}
        >
          <Button variant="outline" size="lg">
            Ver detalles
          </Button>
          <Button variant="outline" size="lg">
            Ver Video
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
}

export default App;
