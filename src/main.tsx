import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

// Chakra UI imports
import { Box, ChakraProvider } from "@chakra-ui/react";

// Extend the theme to include custom colors, fonts, etc

const container = document.getElementById("root");
if (container !== null) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <ChakraProvider>
        <Box>
          <App />
        </Box>
      </ChakraProvider>
    </React.StrictMode>
  );
}
