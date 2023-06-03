import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Chakra UI imports
import { ChakraProvider } from "@chakra-ui/react";

// Extend the theme to include custom colors, fonts, etc

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  rootElement
);
