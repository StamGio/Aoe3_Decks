import React from "react";
import { Box, Heading } from "@chakra-ui/react";

// Components
import Navbar from "./Navbar";
import Footer from "./Footer";
import backgroundImg from "/background.jpg";
import CivilizationInfo from "./CivilizationInfo";
import Decks from "./Decks";

interface CivilizationPageProps {
  name: string;
  showCivilizationInfo?: boolean;
}

const CivilizationsPage: React.FC<CivilizationPageProps> = ({
  name,
  showCivilizationInfo = true,
}) => {
  return (
    <Box display="flex" flexDirection="column">
      <Navbar />

      <Box
        flexGrow={1}
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="relative"
      >
        <Box
          background={{
            base: `url(${backgroundImg}) no-repeat center center / cover`,
          }}
          bgSize="cover"
          bgPosition="center"
          position="absolute"
          top={0}
          bottom={0}
          left={0}
          right={0}
          filter="blur(1px) brightness(63%)"
        />

        <Heading
          as="h1"
          size={{ base: "lg", md: "xl" }}
          textAlign="center"
          zIndex={1}
        >
          {showCivilizationInfo ? (
            <>
              <CivilizationInfo civilization={name} />
            </>
          ) : (
            <Decks civilization={name} />
          )}
        </Heading>
      </Box>

      <Footer />
    </Box>
  );
};

export default CivilizationsPage;
