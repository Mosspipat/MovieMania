import { ChakraProvider } from "@chakra-ui/react";
import { MoviesDisplay } from "./components";

async function App() {
  return (
    <ChakraProvider>
      <MoviesDisplay />
    </ChakraProvider>
  );
}

export default App;
