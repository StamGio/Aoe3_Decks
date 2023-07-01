import React from "react";
import { Box, Heading } from "@chakra-ui/react";

// Components
import Navbar from "./Navbar";
import Footer from "./Footer";
import backgroundImg from "../assets/Images/Background.jpg";
import CivilizationInfo from "./CivilizationInfo";

interface CivilizationPageProps {
  name: string;
}

const CivilizationsPage: React.FC<CivilizationPageProps> = ({ name }) => {
  return (
    <>
      <Box minHeight="100vh" display="flex" flexDirection="column">
        <Navbar />

        <Box
          flexGrow={1}
          display="flex"
          alignItems="center"
          justifyContent="center"
          position="relative"
        >
          <Box
            bgImage={`url(${backgroundImg})`}
            bgSize="cover"
            bgPosition="center"
            position="absolute"
            top={0}
            bottom={0}
            left={0}
            right={0}
            filter="blur(1px) brightness(63%)"
          />

          <Heading as="h1" size="xl" textAlign="center" zIndex={1}>
            Hi, {name}!
            <CivilizationInfo civilization={name} />
          </Heading>
        </Box>

        <Footer />
      </Box>
    </>
  );
};

export default CivilizationsPage;
