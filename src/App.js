import React from "react";
import IssuePage from "./components/Issuepage";
import { Box } from '@mui/material';
import Search from './components/Search'
import LeftContent from "./components/LeftContent";
import { useIsMobile } from './components/utils/hooks';

function App() {
  const isMobile = useIsMobile();

  return (
    <Box 
      bgcolor='#161b22'
      minHeight='100vh'
      display='flex' 
      flexDirection='column'
      alignItems='center'
      py={10}
    >
      <Search isMobile={isMobile} />
      {isMobile && <LeftContent width='90vw' pl={2} pb={2} />}
      <IssuePage />
    </Box>
  );
}

export default App;
