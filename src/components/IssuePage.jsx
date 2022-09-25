import React, { useState, useEffect } from "react";
import { Box } from '@mui/material';
import ListWithInfiniteScroll from "./ListWithInfiniteScroll";
import Header from "./Header";
import { getIssues } from '../api/Issues'
import { insertData, updateData, updateQueryFlag } from '../reducers/Issues'
import { useAppDispatch, useAppSelector } from '../store'

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
    <Box display="flex" justifyContent='center' mt={7}>
      <Header openIssue={data?.length} />
      <ListWithInfiniteScroll loading={loading} rows={data} />
    </Box>
  )
}

export default IssuePage;