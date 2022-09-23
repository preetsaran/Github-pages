import React, { useState, useEffect } from 'react'
import { Box } from '@mui/material';
import { Waypoint } from "react-waypoint";
import Card from './Card';
import axios from 'axios'
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';

const TableWithInfiniteScroll = () => {
  const [rows, setRows] =  useState([]);
  const [page, setpage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchMore = () => {
    setpage((page) => page + 1);
  }

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const res = await axios.get('https://api.github.com/repos/facebook/react/issues', {
        headers: {
          'Authorization': `Bearer ${process.env.REACT_APP_AUTH_TOKEN}`
        },
        page,
        params : {
          per_page: 100
        }
      })
      setLoading(false);
      setRows([...rows, ...res.data])
    }
    fetchData()
  },[page])

  return (
    <Box display={'flex'} flexDirection='column' border='1px solid rgb(48, 54, 61)' borderRadius='6px' mb={3}>
      
      {rows.map((row, idx) => (
        <div key={row.id}>
          {idx === rows.length - 1 &&  <Waypoint onEnter={fetchMore}/>}
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
