import { ChakraProvider } from "@chakra-ui/react";
import { MoviesDisplay } from "./components";

function App() {
  return (
    <ChakraProvider>
      <MoviesDisplay />
    </ChakraProvider>
  );
}

export default App;
