// Chakra Ui imports
import { Grid, GridItem, Show, Text } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components Imports
import Navbar from "./Components/Navbar";
import CivilizationsList from "./Components/CivilizationsList";
import backgroundImg from "../src/assets/Images/Background.jpg";
import CivilizationsPage from "./Components/CivilizationsPage";
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
      { name: "Mexicans", photo: "Mexicans.png" },
      { name: "United States", photo: "United-states.png" },
    ],
  },
  {
    name: "The African Royalties",
    civilizations: [
      { name: "Ethiopians", photo: "Ethiopians.png" },
      { name: "Hausa", photo: "Hausa.png" },
    ],
  },
  {
    name: "Knights of the Mediterranean",
    civilizations: [
      { name: "Italians", photo: "Italians.png" },
      { name: "Maltese", photo: "Maltese.png" },
    ],
  },
];

////////////////////////////// End ///////////////////////////////////
const App: React.FC = () => {
  return (
    <Router>
      <Grid
        templateAreas={{
          base: `"nav" "main" "footer"`,
          lg: `"nav nav"
                    "aside main"
                    "footer footer"`,
        }}
        color="blackAlpha.700"
        gridTemplateColumns={{
          base: "1fr",
          lg: "1fr 5fr", // Adjust the column sizes as per your requirement
        }}
      >
        <GridItem area={"nav"}>
          <Navbar />
        </GridItem>
        <Show above="lg">
          <GridItem
            pl="2"
            area={"aside"}
            style={{
              background:
                "linear-gradient(180deg, rgb(23, 8, 3), rgb(83, 36, 18) 40%, rgb(23, 8, 3))",
            }}
          >
            <Text as="h2" className="styled-h2">
              Civilizations
            </Text>
            <CivilizationsList dlcs={dlcs} />
          </GridItem>
        </Show>
        <GridItem
          pl="2"
          area={"main"}
          bgImage={`url(${backgroundImg})`}
          bgSize="cover"
          bgPosition="center"
          filter="blur(2px)  brightness(50%) "
        ></GridItem>
        <GridItem pl="2" bg="blue.300" area={"footer"}>
          Footer
        </GridItem>
      </Grid>

      <Routes>
        <Route path="/:name" element={<CivilizationsPage name="You" />} />
      </Routes>
    </Router>
  );
};

export default App;
