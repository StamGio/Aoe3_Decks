import { Box, SimpleGrid, Header } from "@chakra-ui/react";

const Flags = () => {
  return (
    <>
      <Header>Vanilla</Header>
      <SimpleGrid minChildWidth="120px" spacing="40px">
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>

        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
      </SimpleGrid>
    </>
  );
};

export default Flags;
