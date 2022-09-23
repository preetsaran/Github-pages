import React from "react";
import TableWithInfiniteScroll from "./TableWithInfiniteScroll";
import { Box } from '@mui/material';

const IssuePage = () => {
  return (
    <Box mt={7} display="flex" justifyContent='center'>
      <TableWithInfiniteScroll />
    </Box>
  )
}

export default IssuePage;