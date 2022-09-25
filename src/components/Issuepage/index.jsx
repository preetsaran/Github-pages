import React, { useState, useEffect } from "react";
import { Box } from '@mui/material';

import Header from "../Header";
import { getIssues } from '../../api/Issues'
import { useAppDispatch, useAppSelector } from '../../store'
import ListWithInfiniteScroll from "../ListWithInfiniteScroll";
import { insertData, updateData, updateQueryFlag } from '../../reducers/Issues'

const IssuePage = () => {
  const { params, data, isQueryUpdated }=  useAppSelector((state) => state.issues)
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchIssues = async () => {
      const res = await getIssues(params)
      if(isQueryUpdated) {
        dispatch(updateData(res.data))
        dispatch(updateQueryFlag(false))
      }
      else {
        dispatch(insertData(res.data))
      }
      setLoading(false);
    }
    fetchIssues()
  },[params, dispatch])

  return (
    <Box 
      display="flex" 
      flexDirection="column" 
      width={'90vw'} 
      bgcolor='#161b22'
      border='1px solid rgb(48, 54, 61)'
      borderRadius={2}
    >
      <Header />
      <ListWithInfiniteScroll loading={loading} rows={data} />
    </Box>
  )
}

export default IssuePage;