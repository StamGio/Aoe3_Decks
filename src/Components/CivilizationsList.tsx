import React from "react";
import {
  List,
  VStack,
  Text,
  Avatar,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

// Interfaces
interface Civilization {
  name: string;
  photo: string;
}

interface DLC {
  name: string;
  civilizations: Civilization[];
}
export interface CivilizationsListProps {
  dlcs: DLC[];
}

const CivilizationsList: React.FC<CivilizationsListProps> = ({ dlcs }) => {
  return (
    <>
      <VStack
        align="flex-start"
        spacing={4}
        overflowY="auto"
        maxHeight="1100px"
      >
        {dlcs.map((dlc, index) => (
          <React.Fragment key={index}>
            <Text as="h4" className="styled-h4">
              {dlc.name}
            </Text>
            <List
              color="whiteAlpha.800"
              fontFamily="TrajanPro"
              colorScheme="#ebc837"
            >
              {dlc.civilizations.map((civilization, civIndex) => (
                <ChakraLink
                  key={civIndex}
                  to={`/civilizations/${civilization.name}`}
                  as={Link}
                  display="flex"
                  alignItems="center"
                  fontSize="xl"
                  _hover={{ color: "#ebc837" }}
                >
                  <Avatar
                    size="md"
                    src={`src/assets/Images/Flags/${civilization.photo}`}
                    borderRadius="md"
                    mr={4}
                    mb={4}
                    css={{
                      width: "60px",
                      height: "43px",
                    }}
                    boxShadow="0px 0px 10px rgba(0, 0, 0, 0.4)"
                  />
                  {civilization.name}
                </ChakraLink>
              ))}
            </List>
          </React.Fragment>
        ))}
      </VStack>
    </>
  );
};

export default CivilizationsList;
