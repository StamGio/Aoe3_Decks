import React from "react";
import { Box, Heading } from "@chakra-ui/react";

// Components
import Navbar from "./Navbar";
import backgroundImg from "../assets/Images/Background.jpg";

interface CivilizationPageProps {
  name: string;
}

const CivilizationsPage: React.FC<CivilizationPageProps> = ({ name }) => {
  return (
    <>
      <Navbar />
      <Box
        bgImage={`url(${backgroundImg})`}
        // bgSize="cover"
        bgPosition="center"
        // filter="blur(1px) brightness(63%)"
      >
        <Heading as="h1" size="xl" textAlign="center">
          Hi, {name}!
        </Heading>
      </Box>
    </>
  );
};

export default CivilizationsPage;
