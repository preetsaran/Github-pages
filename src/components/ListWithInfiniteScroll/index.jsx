import React from 'react'
import { Box, CircularProgress, Backdrop } from '@mui/material';
import { Waypoint } from "react-waypoint";

import { updateParams } from '../../reducers/Issues'
import { useAppDispatch, useAppSelector } from '../../store'
import Card from '../Card';

const TableWithInfiniteScroll = ({loading}) => {
  const { params, data: rows }=  useAppSelector((state) => state.issues)
  const dispatch = useAppDispatch();

  const fetchMore = () => {
    dispatch(updateParams({page: params.page + 1}))
  }

  return (
    <Box 
      display={'flex'} 
      flexDirection='column' 
      borderBottom='1px solid rgb(48, 54, 61)' 
      borderRadius='6px' mb={3}
    >
      {rows?.map((row, idx) => (
        <div key={idx}>
          {idx === rows.length - 10 &&  <Waypoint onEnter={fetchMore}/>}
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
