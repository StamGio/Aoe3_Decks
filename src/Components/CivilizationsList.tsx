import React from "react";
import {
  List,
  VStack,
  Text,
  Avatar,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

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
      <VStack align="flex-start" spacing={4}>
        {dlcs.map((dlc, index) => (
          <React.Fragment key={index}>
            <Text as="h4" className="styled-h4">
              {dlc.name}
            </Text>
            <List color="white" fontFamily="TrajanPro" colorScheme="#ebc837">
              {dlc.civilizations.map((civilization, civIndex) => (
                <ChakraLink
                  key={civIndex}
                  to={`/${civilization.name}`}
                  as={Link}
                  // href={`/${civilization.name}`}
                  display="flex"
                  alignItems="center"
                  fontSize="xl"
                  _hover={{ color: "#ebc837", textDecoration: "underline" }}
                >
                  <Avatar
                    size="md"
                    src={`src/assets/Images/Flags/${civilization.photo}`}
                    borderRadius="md"
                    mr={4}
                    mb={4}
                    css={{
                      width: "50px",
                      height: "30px",
                    }}
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
