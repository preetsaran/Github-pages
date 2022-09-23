import React from "react";
import IssuePage from "./components/IssuePage";
import Header from "./components/Header";
import { Box } from '@mui/material';

function App() {
  return (
    <Box bgcolor='#0d1117'>
      <Header />
      <IssuePage />
    </Box>
  );
}

export default App;
