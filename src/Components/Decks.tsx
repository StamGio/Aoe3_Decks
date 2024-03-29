import { Box, Heading, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import woodImage from "/wood.png";

// type Civilization = "British" | "Germans" | "Dutch" | "United States";

interface CivPhoto {
  title: string;
  deck: string;
}

interface CivPhotos {
  [key: string]: CivPhoto[];
}
// Objects List

const civPhotos: CivPhotos = {
  // vanilla
  British: [
    { title: "Treaty No Grenadiers", deck: "treatynogrenadiers.png" },
    { title: "Treaty Grenadiers", deck: "treatygrenadiers.PNG" },
    { title: "Treaty Sheeps", deck: "treatysheeps.PNG" },
    { title: "Treaty Stonemasons", deck: "treatystonemasons.PNG" },
    { title: "1 vs 1", deck: "1vs1.PNG" },
    { title: "1 vs 1 Grenadier (Outdated)", deck: "1vs1grenadier.PNG" },
    { title: "Late Game Water", deck: "lategamewater.PNG" },
  ],
  Dutch: [
    { title: "1 vs 1", deck: "1vs1std.png" },
    { title: "1 vs 1 Modern", deck: "1vs1modern.png" },
    { title: "1 vs 1 Old School", deck: "1vs1oldschool.png" },
    {
      title: "1 vs 1 Treaty Mercenaries Only",
      deck: "treatymercenariesonly.png",
    },
    { title: "1 vs 1 Late Game Natives", deck: "lategamenatives.png" },
  ],
  French: [
    { title: "1 vs 1", deck: "french1vs1.PNG" },
    { title: "Treaty", deck: "frenchtreaty.PNG" },
    { title: "Treaty With Natives", deck: "frenchtreatynatives.PNG" },
  ],
  Germans: [
    { title: "1 vs 1 Standard", deck: "1vs1std.png" },
    { title: "Germany Late Game", deck: "germanylategame.png" },
    { title: "Mercenaries Late Game", deck: "germanymercenarieslategame.png" },
  ],
  Ottoman: [
    { title: "Treaty", deck: "ottomanlategame.png" },
    { title: "Team Play", deck: "ottomanteamplay.png" },
  ],
  Portuguese: [
    { title: "Treaty", deck: "portugaltreaty.png" },
    { title: "Treaty Water", deck: "portugalwaterlategame.png" },
  ],
  Russians: [
    { title: "Treaty", deck: "russialategame.png" },
    { title: "1 vs 1 (Before 7/23)", deck: "russia1v1beforejulypatch.png" },
  ],
  Spanish: [{ title: "Treaty", deck: "spainlategame.png" }],
  // The war chiefs
  Aztecs: [
    { title: "Treaty", deck: "treaty.PNG" },
    { title: "1 vs 1", deck: "1vs1.PNG" },
  ],
  Haudenosaunee: [],
  Lakota: [],
  // Asian Dynasties
  Chinese: [],
  Indians: [],
  Japanese: [
    { title: "Treaty", deck: "japanlategame.png" },
    { title: "1 vs 1 Water", deck: "japan1v1water.png" },
    { title: "Samurai", deck: "japansamurai.png" },
    { title: "Water Team", deck: "japanwaterteam.png" },
  ],
  // Definitive Edtion
  Incas: [],
  Swedes: [
    { title: "Treaty", deck: "swedeslategame.png" },
    { title: "Treaty Mercenaries", deck: "swedeslategamemercenaries.png" },
    { title: "1 vs 1", deck: "sweden1v1std.png" },
  ],

  // Dlc 1 and 2
  Mexicans: [],
  "United States": [
    { title: "Treaty", deck: "usalategamenotp.png" },
    { title: "Treaty with Trade Posts", deck: "usalategametp.png" },
  ],
  // African Royaltes
  Ethiopians: [],
  Hausa: [],
  // Kings of mediterranean
  Italians: [{ title: "Treaty", deck: "italylategame.png" }],
  Maltese: [{ title: "Treaty", deck: "maltalategame.png" }],
};
interface DecksProps {
  civilization: string;
}

const Decks: React.FC<DecksProps> = ({ civilization }) => {
  const civilizationPhotos = civPhotos[civilization];

  const isEmpty = civilizationPhotos.length === 0;

  return (
    // Heading
    <Box
      padding={{ base: "10px", md: "30px", lg: "30px" }}
      ml={{ base: "20px", md: "100px", lg: "100px" }}
      mr={{ base: "20px", md: "80px", lg: "80px" }}
      color="whiteAlpha.800"
    >
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
            src={`/Images/Flags/${civilization}.png`}
            alt="Civ Flag"
            boxSize={{ base: "70px", md: "130px", lg: "130px" }}
            width={{ base: "100px", md: "200px", lg: "200px" }}
            objectFit="cover"
            boxShadow="0px 0px 10px rgba(0, 0, 0, 0.4)"
          />
        </Box>

        <Box flex="1" mr="50px" textAlign="right">
          <Text as="h1" fontSize={{ base: "3xl", md: "5xl", lg: "5xl" }}>
            {""}
            {civilization}
          </Text>
        </Box>
      </Heading>

      {/* Decks Photos */}

      <VStack
        padding={{ base: "20px 0 0 0", md: "20px 0 0 0", lg: "20px 0 0 0" }}
      >
        <Box
          textAlign="left"
          padding={{ base: "10px", md: "20px", lg: "20px" }}
          bg={`url(${woodImage})`}
          borderBottom="1px solid rgb(235, 200, 55)"
          borderTop="1px solid rgb(235, 200, 55)"
          className="bordercolor"
          maxWidth="980px"
        >
          {isEmpty ? (
            // Display a text when there is no content
            <Text
              fontSize="xl"
              lineHeight="1.5"
              display="inline"
              fontFamily="TrajanPro"
            >
              There are no decks available for this civilization at the moment,
              but we are in the process of creating them and we hope to have
              them ready soon! <br /> We appreciate your patience and interest .{" "}
              <br />
              If you want to share your thoughts or opinions with us, please
              don’t hesitate to contact us!
            </Text>
          ) : (
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
                  src={`/Images/Decks/${civilization}/${photo.deck}`}
                  alt={`Photo ${index + 1}`}
                  mb="3rem"
                />
              </Box>
            ))
          )}
        </Box>
      </VStack>
    </Box>
  );
};

export default Decks;
