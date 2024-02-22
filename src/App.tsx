import { ChakraProvider } from "@chakra-ui/react";
import { Footer, MoviesDisplay, TopBar } from "./components";
import theme from "./styles/theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <TopBar />
      <MoviesDisplay />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
