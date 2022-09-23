import React, { useState, useEffect } from 'react'
import { Box } from '@mui/material';
import { Waypoint } from "react-waypoint";
import Card from './Card';
import axios from 'axios'

const TableWithInfiniteScroll = () => {
  const [rows, setRows] =  useState([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('https://api.github.com/repos/facebook/react/issues')
      setRows(res.data)
      console.log('res', res.data)
    }
    fetchData()
  },[])

  return (
    <Box display={'flex'} flexDirection='column' border='1px solid rgb(48, 54, 61)' borderRadius='6px' mb={3}>
      {rows.map((row, idx) => (
        <div key={row.id}>
          {idx === rows.length - 10 &&  <Waypoint onEnter={() => console.log('Entered', idx)}/>}
          <Card data={row}/>
        </div>
      ))}
    </Box>
  )
}

export default TableWithInfiniteScroll
