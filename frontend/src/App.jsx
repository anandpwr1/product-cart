import { Box, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import HomePage from "./pages/HomePage";
import CreateProductPage from "./pages/CreateProductPage";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Box minH={"100vH"} bg={useColorModeValue("gray.100", "gray.900")}>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreateProductPage />} />
      </Routes>
    </Box>
  );
};

export default App;
