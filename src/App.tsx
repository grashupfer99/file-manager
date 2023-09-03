// core
import type { FC } from "react";
import Router from "routes";
// components
import { ChakraProvider } from "@chakra-ui/react";

// ----------------------------------------------------------------------

const App: FC = () => {
  return (
    <ChakraProvider>
      <Router />
    </ChakraProvider>
  );
};

export default App;
