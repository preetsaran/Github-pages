import React from "react";
import IssuePage from "./components/IssuePage";
import Header from "./components/Header";
import { Paper, Box } from '@mui/material';

function App() {
  return (
    <Box bgcolor='#0d1117'>
      <Header />
      <Box >
        <IssuePage />
      </Box>
    </Box>
  );
}

export default App;
