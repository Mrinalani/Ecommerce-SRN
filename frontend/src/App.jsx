import { Routes, Route } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import { Box, Container } from "@chakra-ui/react";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import FruitCart from "./components/FruitCart";
import Fruit from "./components/Fruit";
function App() {
  return (
    <Box   w={"100vw"}>
      <Container maxW={"620px"}>
        <Header  />
        <Routes>
          <Route path="/Auth" element={<AuthPage />} />
          <Route path="/cart/fruits" element={<FruitCart />} />
          <Route path="/cart/fruits/:fruit" element={<Fruit />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Container>
    </Box>
  );
}

export default App;
