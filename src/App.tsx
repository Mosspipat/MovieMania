import { ChakraProvider } from "@chakra-ui/react";
import theme from "./styles/theme";
import { ExploreMedia } from "./pages/ExploreMediaPage";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ExploreMedia />
    </ChakraProvider>
  );
}

export default App;
