import React, { useState, useEffect } from "react";
import { Box } from '@mui/material';

import Header from "../Header";
import { getIssues } from '../../api/Issues'
import { useAppDispatch, useAppSelector } from '../../store'
import ListWithInfiniteScroll from "../ListWithInfiniteScroll";
import { insertData, updateData, updateQueryFlag, setIsFetchMore } from '../../reducers/Issues'

const IssuePage = () => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const { isQueryUpdated, params, isFetchMore }=  useAppSelector((state) => state.issues)

  useEffect(() => {
    setLoading(true);
    const fetchIssues = async () => {
      const res = await getIssues(params)

      if(isQueryUpdated) {
        dispatch(updateData(res.data))
        dispatch(updateQueryFlag(false))
      }
      else if(isFetchMore || isFetchMore === null) {
        dispatch(insertData(res.data))
        dispatch(setIsFetchMore(false))
      }

      setLoading(false);
    }
    fetchIssues()
  },[dispatch, isQueryUpdated, params, isFetchMore])

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
      <ListWithInfiniteScroll loading={loading} />
    </Box>
  )
}

export default IssuePage;