// Chakra Ui imports
import { Grid, GridItem, Show, Text } from "@chakra-ui/react";

// Components Imports
import Navbar from "./Components/Navbar";
import CivilizationsList from "./Components/CivilizationsList";

//////////////////////  Civilitations Array /////////////////////////

// Vanilla
const vanillaCivs = [
  "British",
  "Dutch",
  "French",
  "Germans",
  "Ottoman",
  "Portuguese",
  "Russians",
  "Spanish",
];

// The War Chiefs
const warChiefsCivs = ["Aztecs", "Haudenosaunee", "Lacota"];

// The Asian Dynastys

const asianDynastiesCivs = ["Chinese", "Indians", "Japanese"];

// Definitive Edition
const definitiveCivs = ["Incas", "Swedesh"];

// Definitive Edition II
const definitive2Civs = ["Mexico", "United States"];

//The  African Royaltes
const africanRoyaltesCivs = ["Ethiopians", "Hausa"];

// Knights of the Mediterranean
const knightsOfMedCivs = ["Italians", "Maltese"];
////////////////////////////// End ///////////////////////////////////
const App: React.FC = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main" "footer"`,
        lg: `"nav nav"
                    "aside main"
                    "aside footer"`,
      }}
      color="blackAlpha.700"
    >
      <GridItem bg="orange.300" area={"nav"}>
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem pl="2" area={"aside"}>
          <Text as="h2" className="styled-h2">
            Civilizations
          </Text>
          <CivilizationsList
            vanillaCivs={vanillaCivs}
            warChiefsCivs={warChiefsCivs}
            asianDynastiesCivs={asianDynastiesCivs}
            definitiveCivs={definitiveCivs}
            definitive2Civs={definitive2Civs}
            africanRoyaltesCivs={africanRoyaltesCivs}
            knightsOfMedCivs={knightsOfMedCivs}
          />
        </GridItem>
      </Show>
      <GridItem pl="2" bg="green.300" area={"main"}>
        Main
      </GridItem>
      <GridItem pl="2" bg="blue.300" area={"footer"}>
        Footer
      </GridItem>
    </Grid>
  );
};

export default App;
