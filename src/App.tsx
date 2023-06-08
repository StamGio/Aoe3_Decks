// Chakra Ui imports
import { Grid, GridItem, Show, Text } from "@chakra-ui/react";

// Components Imports
import Navbar from "./Components/Navbar";
import CivilizationsList from "./Components/CivilizationsList";

//////////////////////  Civilitations Array /////////////////////////
const dlcs = [
  {
    name: "Vanilla",
    civilizations: [
      { name: "British", photo: "British.png" },
      { name: "Dutch", photo: "Dutch.png" },
      { name: "French", photo: "French.png" },
      { name: "Germans", photo: "Germans.png" },
      { name: "Ottoman", photo: "Ottoman.png" },
      { name: "Portuguese", photo: "Portuguese.png" },
      { name: "Russians", photo: "Russians.png" },
      { name: "Spanish", photo: "Spanish.png" },
    ],
  },
  {
    name: "The War Chiefs",
    civilizations: [
      { name: "Aztecs", photo: "Aztecs.png" },
      { name: "Haudenosaunee", photo: "Haudenosaunee.png" },
      { name: "Lakota", photo: "Lakota.png" },
    ],
  },
  {
    name: "The Asian Dynasties",
    civilizations: [
      { name: "Chinese", photo: "Chinese.png" },
      { name: "Indians", photo: "Indians.png" },
      { name: "Japanese", photo: "Japanese.png" },
    ],
  },
  {
    name: "Definitive Edition",
    civilizations: [
      { name: "Incas", photo: "Incas.png" },
      { name: "Swedes", photo: "Swedes.png" },
    ],
  },
  {
    name: "Definitive Edition II",
    civilizations: [
      { name: "Mexico", photo: "mexico.png" },
      { name: "United States", photo: "united-states.png" },
    ],
  },
  {
    name: "The African Royalties",
    civilizations: [
      { name: "Ethiopians", photo: "ethiopians.png" },
      { name: "Hausa", photo: "hausa.png" },
    ],
  },
  {
    name: "Knights of the Mediterranean",
    civilizations: [
      { name: "Italians", photo: "italians.png" },
      { name: "Maltese", photo: "maltese.png" },
    ],
  },
];

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
          <CivilizationsList dlcs={dlcs} />
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
