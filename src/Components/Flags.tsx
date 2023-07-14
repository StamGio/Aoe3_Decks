import { Box, SimpleGrid, Link as ChakraLink } from "@chakra-ui/react";
import { CivilizationsListProps } from "./CivilizationsList";
import { Link as ReactRouterLink } from "react-router-dom";
interface FlagsProps {
  dlcs: CivilizationsListProps["dlcs"];
}

const Flags: React.FC<FlagsProps> = ({ dlcs }) => {
  return (
    <SimpleGrid
      columns={5}
      spacing="40px"
      padding="2rem"
      margin="5rem"
      alignItems="center"
    >
      {dlcs.flatMap((dlc) =>
        dlc.civilizations.map((civilization) => (
          <ChakraLink
            as={ReactRouterLink}
            to={`/decks/${civilization.name.toLowerCase()}`}
            key={civilization.name}
            display="flex"
            alignItems="center"
            justifyContent="center"
            position="relative"
            className="on-hover"
            boxShadow="rgba(0, 0, 0, 0.4) 7px 5px 7px 0px"
          >
            {" "}
            <Box
              key={civilization.name}
              bg={`url(/src/assets/Images/Flags/${civilization.photo})`}
              backgroundSize="cover"
              backgroundPosition="center"
              width="180px"
              height="120px"
              css={{
                backgroundSize: "100% 100%",
                opacity: 0.3,
                backgroundRepeat: "no-repeat",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.1)",
                  opacity: 1,
                  boxShadow: "rgba(0, 0, 0, 0.6) 7px 5px 7px 0px", // Add boxShadow property
                },
              }}
            >
              <div className="shine-effect"></div>
            </Box>
          </ChakraLink>
        ))
      )}
    </SimpleGrid>
  );
};

export default Flags;
