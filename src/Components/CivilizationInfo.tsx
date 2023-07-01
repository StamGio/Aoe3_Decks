import { Box, Text } from "@chakra-ui/react";

interface Props {
  civilization: string;
}

const CivilizationInfo = ({ civilization }: Props) => {
  let text = "";

  switch (civilization) {
    case "British":
      text =
        "In the New World, they were one of the most powerful colonizers, defeating multiple European powers. They eventually established thirteen colonies, which later revolted against the British Empire to form the United States of America.\n\n" +
        "Characteristics:\n" +
        "The British civilization has a strong focus on economy and naval power. \n\n" +
        "Civilization bonus:\n" +
        "Manor spawns a settler when built.\n\n" +
        "Royal guard units:\n" +
        "Musketeer (Redcoat), Hussar (King's Life Guard).\n\n" +
        "Unique units:\n" +
        "Longbowman, Rocket\n\n" +
        "Unique buildings:\n" +
        "Manor House";
      break;

    case "Dutch":
      text =
        "Replacing the Spanish as the wealthiest nation in the 18th century, the Dutch were a key proponent in managing the resources and profits gained from colonial North and South America.\n\n" +
        "Characteristics:\n" +
        "The Dutch civilization thrives as an economic powerhouse with a focus on trade, while also maintaining a strong naval presence.\n\n" +
        "Civilization bonus:\n" +
        "Trains Merchants, unique villagers that cost coin instead of food and have lower train limit, but gather coin 15% faster. Begins with an Envoy.\n\n" +
        "Royal guard units:\n" +
        "Halberdier (Stadswacht) and Ruyter (Carabineer).\n\n" +
        "Unique units:\n" +
        "Merchant, Envoy, Ruyter, Fluyt.\n\n" +
        "Unique buildings:\n" +
        "Can build Banks to automatically produce coin.";

      break;

    case "French":
      text =
        "Descendants of the Franks who inhabited regions in France. They held large areas in the New World until the late 1700s.\n They famously supported the American revolution after the Battle of Saratoga in 1777.\n\n" +
        "Characteristics:\n" +
        "The French civilization is known for its strong defensive playstyle and powerful artillery\n\n" +
        "Civilization bonus:\n" +
        "Begins with a Native Scout. Trains Coureurs des Bois instead of Settlers.\n\n" +
        "Royal guard units:\n" +
        "Skirmisher (Voltigeurs), Cuirassier (Gendarmes).\n\n" +
        "Unique units:\n" +
        "Coureurs des Bois, Cuirassier";
      break;
    case "Spanish":
      text =
        "One of the greatest colonizers of North and South America was known for having acquired great wealth from the colonies during the 17th century. While Spain focused primarily on South America, developments in Europe often entangled it in the affairs of other colonizing nations.\n\n" +
        "Characteristics:\n" +
        "The Spanish civilization is known for its strong military presence and powerful gunpowder units. \n\n" +
        "Civilization bonus:\n" +
        "Faster shipments from home city/n Trains 20% faster. Unique units receive a 15% hit point bonus. Begins with a Ship-of-the-Line.\n\n" +
        "Royal guard units:\n" +
        "Pikeman (Tercios), Rodelero (Espadachins), Lancer (Garrochistas)\n\n" +
        "Unique units:\n" +
        "War Dog, Missionary, Rodelero, Lancer\n\n" +
        "Unique buildings:\n" +
        "Can build Missions that provide various bonuses.";
      break;

    case "Aztecs":
      text =
        "The Aztecs civilization is known for its aggressive playstyle and unique units.";
      break;

    default:
      text = "No information available for this civilization.";
      break;
  }

  return (
    <Box style={{ padding: "20px" }}>
      <Text
        style={{ fontSize: "16px", lineHeight: "1.5", whiteSpace: "pre-line" }}
      >
        {text}
      </Text>
    </Box>
  );
};

export default CivilizationInfo;
