import React from "react";
import { List, ListItem, VStack, Text, Avatar } from "@chakra-ui/react";

interface Civilization {
  name: string;
  photo: string;
}

interface DLC {
  name: string;
  civilizations: Civilization[];
}
interface CivilizationsListProps {
  dlcs: DLC[];
}

const CivilizationsList: React.FC<CivilizationsListProps> = ({ dlcs }) => {
  return (
    <>
      <VStack align="flex-start">
        {dlcs.map((dlc, index) => (
          <React.Fragment key={index}>
            <Text as="h4" className="styled-h4">
              {dlc.name}
            </Text>
            <List color="white" fontFamily="TrajanPro" colorScheme="#ebc837">
              {dlc.civilizations.map((civilization, civIndex) => (
                <ListItem key={civIndex} display="flex" alignItems="center">
                  <Avatar
                    size="sm"
                    src={`src/assets/Images/Flags/${civilization.photo}`}
                    borderRadius="md"
                    mr={2}
                  />
                  {civilization.name}
                </ListItem>
              ))}
            </List>
          </React.Fragment>
        ))}
      </VStack>
    </>
  );
};

export default CivilizationsList;
