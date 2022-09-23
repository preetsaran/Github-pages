import React from "react";
import TableWithInfiniteScroll from "./TableWithInfiniteScroll";
import { Box } from '@mui/material';

const IssuePage = () => {
  return (
    <Box display="flex" justifyContent='center' mt={7}>
      <TableWithInfiniteScroll />
    </Box>
  )
}

export default IssuePage;