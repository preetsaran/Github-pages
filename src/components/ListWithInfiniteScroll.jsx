import React from 'react'
import { Box, CircularProgress, Backdrop } from '@mui/material';
import { Waypoint } from "react-waypoint";

import Card from './Card';

const TableWithInfiniteScroll = ({rows, fetchMore, loading}) => {
  
  return (
    <Box display={'flex'} flexDirection='column' border='1px solid rgb(48, 54, 61)' borderRadius='6px' mb={3}>
      {rows.map((row, idx) => (
        <div key={row.id}>
          {idx === rows.length - 2 &&  <Waypoint onEnter={fetchMore}/>}
          <Card data={row} />
        </div>
      ))}

      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </Box>
  )
}

export default TableWithInfiniteScroll
