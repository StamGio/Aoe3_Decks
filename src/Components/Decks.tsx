import { Box, Heading, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import woodImage from "../assets/Images/wood.png";

type Civilization = "British" | "Germans" | "Dutch";

interface CivPhoto {
  title: string;
  deck: string;
}

interface CivPhotos {
  [key: string]: CivPhoto[];
}
// Objects List

const civPhotos: CivPhotos = {
  British: [
    { title: "Treaty No Grenadiers", deck: "TreatyNoGrenadiers.png" },
    { title: "Treaty Grenadiers", deck: "TreatyGrenadiers.png" },
    { title: "Treaty Sheeps", deck: "TreatySheeps.png" },
    { title: "Treaty Stonemasons", deck: "Treatystonemasons.png" },
    { title: "1 vs 1", deck: "1vs1.png" },
    { title: "1 vs 1 Grenadier (Outdated)", deck: "1vs1Grenadier.png" },
    { title: "Late Game Water", deck: "LateGameWater.png" },
  ],
  Germans: [
    { title: "1 vs 1 Standard", deck: "1vs1std.png" },
    { title: "Germany Late Game", deck: "germanylategame.png" },
    { title: "Mercenaries Late Game", deck: "germanyMercenarieslategame.png" },
  ],
  Dutch: [
    { title: "1 vs 1 Standard", deck: "1vs1std.png" },
    { title: "1 vs 1 Modern", deck: "1vs1modern.png" },
    { title: "1 vs 1 Old School", deck: "1vs1oldschool.png" },
    {
      title: "1 vs 1 Treaty Mercenaries Only",
      deck: "treatymercenariesonly.png",
    },
    { title: "1 vs 1 Late Game Natives", deck: "lategamenatives.png" },
  ],
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

      {/* Decks Photos */}

      <VStack>
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
                padding={2}
              >
                <Text className="styled-h4">{photo.title}</Text>{" "}
                <Image
                  src={`../src/assets/Images/Decks/${civilization}/${photo.deck}`}
                  alt={`Photo ${index + 1}`}
                  mb="3rem"
                />
              </Box>
            ))}
        </Box>
      </VStack>
    </Box>
  );
};

export default Decks;
