import React from "react";
import { Box, Heading } from "@chakra-ui/react";

interface CivilizationPageProps {
  name: string;
}

const CivilizationPage: React.FC<CivilizationPageProps> = ({ name }) => {
  return (
    <Box>
      <Heading as="h1" size="xl" textAlign="center">
        Hi, {name}!
      </Heading>
    </Box>
  );
};

export default CivilizationPage;
