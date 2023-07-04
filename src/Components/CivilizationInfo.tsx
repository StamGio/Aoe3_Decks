import { Box, Text } from "@chakra-ui/react";
import React from "react";

interface CivilizationData {
  History: string;
  Characteristics: string;
  CivilizationBonus: string;
  RoyalGuardUnits: string;
  UniqueUnits: string;
  UniqueBuildings?: string;
}

const generateCivilizationData = (
  History: string,
  Characteristics: string,
  CivilizationBonus: string,
  RoyalGuardUnits: string,
  UniqueUnits: string,
  UniqueBuildings?: string
): CivilizationData => ({
  History,
  Characteristics,
  CivilizationBonus,
  RoyalGuardUnits,
  UniqueUnits,
  UniqueBuildings,
});

const civilizationData: Record<string, CivilizationData> = {
  British: generateCivilizationData(
    "In the New World, they were one of the most powerful colonizers, defeating multiple European powers. They eventually established thirteen colonies, which later revolted against the British Empire to form the United States of America.",
    "The British civilization has a strong focus on economy and naval power.",
    "Manor spawns a settler when built.",
    "Musketeer (Redcoat), Hussar (King's Life Guard).",
    "Longbowman, Rocket.",
    "Manor House"
  ),
  Dutch: generateCivilizationData(
    "Replacing the Spanish as the wealthiest nation in the 18th century, the Dutch were a key proponent in managing the resources and profits gained from colonial North and South America.",
    "The Dutch civilization thrives as an economic powerhouse with a focus on trade, while also maintaining a strong naval presence.",
    "Trains Merchants, unique villagers that cost coin instead of food and have lower train limit, but gather coin 15% faster. Begins with an Envoy.",
    "Halberdier (Stadswacht) and Ruyter (Carabineer).",
    "Merchant, Envoy, Ruyter, Fluyt.",
    "Can build Banks to automatically produce coin."
  ),
  French: generateCivilizationData(
    "Descendants of the Franks who inhabited regions in France. They held large areas in the New World until the late 1700s. They famously supported the American revolution after the Battle of Saratoga in 1777.",
    "The French civilization is known for its strong defensive playstyle and powerful artillery",
    "Begins with a Native Scout. Trains Coureurs des Bois instead of Settlers.",
    "Skirmisher (Voltigeurs), Cuirassier (Gendarmes).",
    "Coureurs des Bois, Cuirassier",
    "None"
  ),
  Spanish: generateCivilizationData(
    "One of the greatest colonizers of North and South America was known for having acquired great wealth from the colonies during the 17th century. While Spain focused primarily on South America, developments in Europe often entangled it in the affairs of other colonizing nations.",
    "The Spanish civilization is known for its strong military presence and powerful gunpowder units. ",
    "Faster shipments from home city/n Trains 20% faster. Unique units receive a 15% hit point bonus. Begins with a Ship-of-the-Line.",
    "Pikeman (Tercios), Rodelero (Espadachins), Lancer (Garrochistas)",
    "War Dog, Missionary, Rodelero, Lancer",
    "Can build Missions that provide various bonuses."
  ),
  // Add data for other civilizations
};

const CivilizationInfo: React.FC<{ civilization: string }> = ({
  civilization,
}) => {
  const data = civilizationData[civilization];

  return (
    <Box padding="20px">
      {data ? (
        Object.entries(data).map(([key, value]) => (
          <React.Fragment key={key}>
            <Text fontSize="16px" lineHeight="1.5" display="inline">
              {key}:
            </Text>
            <Text fontSize="16px" lineHeight="1.5">
              {value}
            </Text>
          </React.Fragment>
        ))
      ) : (
        <Text fontSize="16px" lineHeight="1.5">
          No information available for this civilization.
        </Text>
      )}
    </Box>
  );
};

export default CivilizationInfo;
