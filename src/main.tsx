import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// Chakra UI imports
import { ChakraProvider } from "@chakra-ui/react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
// Extend the theme to include custom colors, fonts, etc

// const colors = {
//   brand: {
//     50: "#FFFAF0",
//     100: "#FEEBC8",
//     200: "#FBD38D",
//     300: "#F6AD55",
//     400: "#ED8936",
//     500: "#DD6B20",
//     600: "#C05621",
//     700: "#9C4221",
//     800: "#7B341E",
//     900: "#652B19",
//   },
// };

// const theme = extendTheme({ colors });

const container = document.getElementById("root");
if (container !== null) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <ChakraProvider>
        {/* <Box bg="brand.600" w="100vw" h="100vh"> */}
        <App />
        {/* </Box> */}
      </ChakraProvider>
    </React.StrictMode>
  );
}
