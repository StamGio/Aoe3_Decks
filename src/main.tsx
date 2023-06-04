import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Chakra UI imports
import { Box, ChakraProvider, extendTheme } from "@chakra-ui/react";

// Extend the theme to include custom colors, fonts, etc

const colors = {
  brand: {
    50: "#FFFAF0",
    100: "#FEEBC8",
    200: "#FBD38D",
    300: "#F6AD55",
    400: "#ED8936",
    500: "#DD6B20",
    600: "#C05621",
    700: "#9C4221",
    800: "#7B341E",
    900: "#652B19",
  },
};

const theme = extendTheme({ colors });

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Box bg="brand.600" w="100vw" h="100vh">
        <App />
      </Box>
    </ChakraProvider>
  </React.StrictMode>,
  rootElement
);
