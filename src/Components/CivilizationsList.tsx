import { List, ListItem, VStack, Text, Avatar } from "@chakra-ui/react";
import React from "react";

interface CivilizationsListProps {
  vanillaCivs: string[];
  warChiefsCivs: string[];
  asianDynastiesCivs: string[];
  definitiveCivs: string[];
  definitive2Civs: string[];
  africanRoyaltesCivs: string[];
  knightsOfMedCivs: string[];
}

const CivilizationsList: React.FC<CivilizationsListProps> = ({
  vanillaCivs,
  warChiefsCivs,
  asianDynastiesCivs,
  definitiveCivs,
  definitive2Civs,
  africanRoyaltesCivs,
  knightsOfMedCivs,
}) => {
  return (
    <>
      <VStack align="flex-start">
        <Text as="h4" className="styled-h4">
          Vanilla Civilizations
        </Text>
        <List color={"white"} fontFamily={"TrajanPro"} colorScheme="#ebc837">
          {vanillaCivs.map((vanillaCiv, index) => (
            <ListItem key={index} display="flex" alignItems="center">
              {/* <Avatar
                size="sm"
                src="../src/assets/Images/Flags/english.png"
                borderRadius="md"
                mr={2}
              /> */}
              {vanillaCiv}
            </ListItem>
          ))}
        </List>
        <Text as="h4" className="styled-h4">
          The War Chiefs
        </Text>
        <List color={"white"} fontFamily={"TrajanPro"} colorScheme="#ebc837">
          {warChiefsCivs.map((warChiefsCiv, index) => (
            <ListItem key={index}>{warChiefsCiv}</ListItem>
          ))}
        </List>
        <Text as="h4" className="styled-h4">
          The Asian Dynasties
        </Text>
        <List color={"white"} fontFamily={"TrajanPro"} colorScheme="#ebc837">
          {asianDynastiesCivs.map((asianDynastiesCiv, index) => (
            <ListItem key={index}>{asianDynastiesCiv}</ListItem>
          ))}
        </List>
        <Text as="h4" className="styled-h4">
          Definitive Edition
        </Text>
        <List color={"white"} fontFamily={"TrajanPro"} colorScheme="#ebc837">
          {definitiveCivs.map((definitiveCiv, index) => (
            <ListItem key={index}>{definitiveCiv}</ListItem>
          ))}
        </List>
        <Text as="h4" className="styled-h4">
          Definitive Edition II
        </Text>
        <List color={"white"} fontFamily={"TrajanPro"} colorScheme="#ebc837">
          {definitive2Civs.map((definitive2Civ, index) => (
            <ListItem key={index}>{definitive2Civ}</ListItem>
          ))}
        </List>
        <Text as="h4" className="styled-h4">
          The African Royaltes
        </Text>
        <List color={"white"} fontFamily={"TrajanPro"} colorScheme="#ebc837">
          {africanRoyaltesCivs.map((africanRoyaltesCiv, index) => (
            <ListItem key={index}>{africanRoyaltesCiv}</ListItem>
          ))}
        </List>
        <Text as="h4" className="styled-h4">
          Knights of the Mediterranean
        </Text>
        <List color={"white"} fontFamily={"TrajanPro"} colorScheme="#ebc837">
          {knightsOfMedCivs.map((knightsOfMedCiv, index) => (
            <ListItem key={index}>{knightsOfMedCiv}</ListItem>
          ))}
        </List>
      </VStack>
    </>
  );
};

export default CivilizationsList;
