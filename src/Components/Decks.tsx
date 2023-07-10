import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import woodImage from "../assets/Images/wood.png";

type Civilization = "British" | "Germans";

interface CivPhoto {
  title: string;
  deck: string;
}

interface CivPhotos {
  [key: string]: CivPhoto[];
}

const civPhotos: CivPhotos = {
  British: [
    { title: "Treaty no grenadiers", deck: "TreatyNoGrenadiers.png" },
    { title: "Treaty grenadiers", deck: "aoe3_logo.png" },
    { title: "Treaty sheeps", deck: "aoe3_logo.png" },
    { title: "1 vs 1", deck: "aoe3_logo.png" },
    { title: "Treaty stonemasons", deck: "aoe3_logo.png" },
    { title: "1 vs 1 grenadier (outdated)", deck: "aoe3_logo.png" },
    { title: "Late game water", deck: "aoe3_logo.png" },
  ],
  Germans: [{ title: "Main", deck: "germans_logo.png" }],
};

interface DecksProps {
  civilization: Civilization;
}

const Decks: React.FC<DecksProps> = ({ civilization }) => {
  const civilizationPhotos = civPhotos[civilization];

  return (
    <Box padding="30px" ml="100px" mr="80px" color="whiteAlpha.800">
      {/* Rest of your code */}
      <Heading
        display="flex"
        alignItems="center"
        fontFamily="TrajanPro"
        bg={`url(${woodImage})`}
        borderBottom="1px solid rgb(235, 200, 55)"
        borderTop="1px solid rgb(235, 200, 55)"
        className="bordercolor"
      >
        <Box textAlign="left">
          <Image
            src={`/src/assets/Images/Flags/${civilization}.png`}
            alt="Civ Flag"
            boxSize="130px"
            width="200px"
            objectFit="cover"
            boxShadow="0px 0px 10px rgba(0, 0, 0, 0.4)"
            mr="500px"
          />
        </Box>

        <Box flex="1" mr="50px" textAlign="right">
          <Text as="h1" fontSize="5xl">
            {" "}
            {civilization}
          </Text>
        </Box>
      </Heading>
      <Box
        textAlign="left"
        maxWidth="980px"
        padding="20px"
        bg={`url(${woodImage})`}
        borderBottom="1px solid rgb(235, 200, 55)"
        borderTop="1px solid rgb(235, 200, 55)"
        className="bordercolor"
      >
        {civilizationPhotos &&
          civilizationPhotos.map((photo, index) => (
            <Box
              key={index}
              display="flex"
              flexDirection="column"
              alignItems="center"
              mb="10px"
            >
              <span>{photo.title}</span>{" "}
              <Image
                src={`../src/assets/Images/Decks/${photo.deck}`}
                alt={`Photo ${index + 1}`}
              />
            </Box>
          ))}
      </Box>
    </Box>
  );
};

export default Decks;
