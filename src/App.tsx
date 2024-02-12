import { ChakraProvider } from "@chakra-ui/react";
import theme from "./styles/theme";
import { ExploreMedia } from "./pages/ExploreMediaPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ExploreMedia />} />
          <Route path="/explore" element={<ExploreMedia />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
