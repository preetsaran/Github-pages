import React, { useState } from 'react'
import { Box } from '@mui/material';
import { Waypoint } from "react-waypoint";
import Card from './Card';

const generateItems = amount => {
  const arr = Array.from(Array(amount))
  return arr.map((number, i) => ({
    id: i,
    name: `Name ${i + 1}`,
    type: `Item Type ${i + 1}`,
  }))
}

const TableWithInfiniteScroll = () => {
  const [rows, setRows] =  useState(generateItems(50))
  return (
    <Box display={'flex'} flexDirection='column' border='1px solid rgb(48, 54, 61)' borderRadius='6px' mb={3}>
      {rows.map(({ id, name, type }) => (
        <div>
          {id ===rows.length - 10 &&  <Waypoint onEnter={() => console.log('Entered', id)}/>}
          <Card />
        </div>
      ))}
    </Box>
  )
}

export default TableWithInfiniteScroll
