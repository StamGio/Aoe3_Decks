// Chakra Ui imports
import { Grid, GridItem, Show } from "@chakra-ui/react";

// Components Imports
import Navbar from "./Components/Navbar";
import CountryList from "./Components/CivilizationsList";

const civilizations = ["civ 1", "civ 2", "civ 3"];

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
        <GridItem pl="2" bg="pink.300" area={"aside"}>
          <h1>List of Civilizations</h1>
          <CountryList civilizations={civilizations} />
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
