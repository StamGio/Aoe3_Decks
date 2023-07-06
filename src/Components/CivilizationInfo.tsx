import { Box, Heading, Text, Image } from "@chakra-ui/react";
import woodImage from "../assets/Images/wood.png";
import React from "react";

// Interface of Cicilization Data
interface CivilizationData {
  History: string;
  Characteristics: string;
  CivilizationBonus: string;
  RoyalGuardUnits: string;
  UniqueUnits: string;
  UniqueBuildings?: string;
}

// Object Generator
const generateCivilizationData = (
  History: string,
  Characteristics: string,
  CivilizationBonus: string,
  RoyalGuardUnits: string,
  UniqueUnits: string,
  UniqueBuildings?: string // ? : Not necessery parameter
): CivilizationData => ({
  History,
  Characteristics,
  CivilizationBonus,
  RoyalGuardUnits,
  UniqueUnits,
  UniqueBuildings,
});

// Civ Data
const civilizationData: Record<string, CivilizationData> = {
  British: generateCivilizationData(
    "In the New World, they were one of the most powerful colonizers, defeating multiple European powers. They eventually established thirteen colonies, which later revolted against the British Empire to form the United States of America",
    "The British civilization has a strong focus on economy and naval power",
    "Manor spawns a settler when built",
    "Musketeer (Redcoat), Hussar (King's Life Guard)",
    "Longbowman, Rocket",
    "Manor House"
  ),
  Dutch: generateCivilizationData(
    "Replacing the Spanish as the wealthiest nation in the 18th century, the Dutch were a key proponent in managing the resources and profits gained from colonial North and South America",
    "The Dutch civilization thrives as an economic powerhouse with a focus on trade, while also maintaining a strong naval presence",
    "Trains Merchants, unique villagers that cost coin instead of food and have lower train limit, but gather coin 15% faster. Begins with an Envoy",
    "Halberdier (Stadswacht) and Ruyter (Carabineer)",
    "Merchant, Envoy, Ruyter, Fluyt",
    "Can build Banks to automatically produce coin"
  ),
  French: generateCivilizationData(
    "Descendants of the Franks who inhabited regions in France. They held large areas in the New World until the late 1700s. They famously supported the American revolution after the Battle of Saratoga in 1777",
    "The French civilization is known for its strong defensive playstyle and powerful artillery",
    "Begins with a Native Scout. Trains Coureurs des Bois instead of Settlers",
    "Skirmisher (Voltigeurs), Cuirassier (Gendarmes)",
    "Coureurs des Bois, Cuirassier",
    "None"
  ),
  Spanish: generateCivilizationData(
    "One of the greatest colonizers of North and South America was known for having acquired great wealth from the colonies during the 17th century. While Spain focused primarily on South America, developments in Europe often entangled it in the affairs of other colonizing nations",
    "The Spanish civilization is known for its strong military presence and powerful gunpowder units",
    "Faster shipments from home city/n Trains 20% faster. Unique units receive a 15% hit point bonus. Begins with a Ship-of-the-Line",
    "Pikeman (Tercios), Rodelero (Espadachins), Lancer (Garrochistas)",
    "War Dog, Missionary, Rodelero, Lancer",
    "Can build Missions that provide various bonuses"
  ),
  Portuguese: generateCivilizationData(
    "Portuguese Empire was a global empire originating from the European nation of Portugal that possessed multiple overseas colonies. In the New World, the Portuguese controlled a large amount of land in the eastern parts of South America until 1822 which is now known as Brazil",
    "The Portuguese civilization has an Economic versatility, naval dominance and Map control with their free Town Halls",
    "Receives a free Covered Wagon with every Age and starts with 7 Settlers",
    "Crossbowman (Ordinance Besteiro), Musketeer (Legionario), Dragoon (Legion Dragoon)",
    "Cassador and Organ Gun",
    "Town Hall"
  ),
  Germans: generateCivilizationData(
    "Germans ruled territories in South America in the 1500s, such as Venezuela. They were short lived until were able to successfully colonize in the late 1800s",
    "The German civilization in Age of Empires III excels in establishing a booming economy,utilizing their troops for early aggression",
    "Receives Uhlans with every home city shipment. Begins with three Settler Wagons",
    "Skirmisher (Prussian Needle Gun) and Uhlan (Czapka Uhlan)",
    "Settler Wagon, Doppelsoldner, Uhlan and War Wagon",
    "German Church , Towers"
  ),
  // Add data for other civilizations
};

// Main Part

const CivilizationInfo: React.FC<{ civilization: string }> = ({
  civilization,
}) => {
  const data = civilizationData[civilization];

  return (
    <Box padding="30px" ml="100px" mr="80px" color="whiteAlpha.800">
      {data && Object.keys(data).length > 0 ? (
        <>
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
                src={`./src/assets/Images/Flags/${civilization}.png`}
                alt="Civ Flag"
                boxSize="100px"
                width="200px"
                objectFit="cover"
                boxShadow="0px 0px 10px rgba(0, 0, 0, 0.4)"
              />
            </Box>
            <Box flex="1" mr="50px" textAlign="right">
              <Text as="h1" fontSize="5xl">
                {""}
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
            {Object.entries(data).map(([key, value]) => (
              <React.Fragment key={key}>
                <Text
                  fontSize="16px"
                  lineHeight="1.5"
                  display="inline"
                  color="#ebc837"
                >
                  {key
                    .split(/(?=[A-Z])/)
                    .join(" ")
                    .trim()}{" "}
                  :
                </Text>
                <Text fontSize="16px" lineHeight="1.5">
                  {value}
                </Text>
              </React.Fragment>
            ))}
          </Box>
        </>
      ) : (
        <Text fontSize="16px" lineHeight="1.5">
          No information available for this civilization.
        </Text>
      )}
    </Box>
  );
};

export default CivilizationInfo;
