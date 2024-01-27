import { ChakraProvider } from "@chakra-ui/react";
import { MoviesDisplay } from "./components";
import theme from "./styles/theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <MoviesDisplay />
    </ChakraProvider>
  );
}

export default App;
