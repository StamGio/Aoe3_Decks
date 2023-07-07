import { Box, SimpleGrid, Image, HStack } from "@chakra-ui/react";
import { CivilizationsListProps } from "./CivilizationsList";

interface FlagsProps {
  backgroundImg: string;
  dlcs: CivilizationsListProps["dlcs"];
}

const Flags: React.FC<FlagsProps> = ({ backgroundImg, dlcs }) => {
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
          <Box
            key={civilization.name}
            background={`url(${backgroundImg})`}
            bg={`url(src/assets/Images/Flags/${civilization.photo})`}
            backgroundSize="cover"
            backgroundPosition="center"
            width="200px"
            height="150px"
            css={{
              backgroundSize: "100% 100%",
              opacity: 0.5,
              backgroundRepeat: "no-repeat",
            }}
            borderRadius="md"
          ></Box>
        ))
      )}
    </SimpleGrid>

    // <SimpleGrid minChildWidth="120px" spacing="40px">
    //   {dlcs.map((dlc) => (
    //     <Box key={dlc.name} height="100px">
    //       {dlc.civilizations.map((civilization) => (
    //         <Image
    //           key={civilization.name}
    //           src={`src/assets/Images/Flags/${civilization.photo}`}
    //           alt={civilization.name}
    //           boxSize="100px"
    //           objectFit="cover"
    //         />
    //       ))}
    //     </Box>
    //   ))}
    // </SimpleGrid>
  );
};

export default Flags;
