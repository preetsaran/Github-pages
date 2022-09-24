import React, { useState, useEffect, useCallback } from "react";
import { Box } from '@mui/material';
import TableWithInfiniteScroll from "./ListWithInfiniteScroll";
import Header from "./Header";
import { getIssues } from '../api/Issues'

const IssuePage = () => {
  const [filters, setfilters] = useState({per_page: 30, page: 1, labels: '', sort: ''});

  const [rows, setRows] =  useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMore = useCallback(() => {
    setfilters((filters) => {
      return {...filters, page: filters.page + 1}
    });
  }, [])
  
  useEffect(() => {
    setLoading(true);
    const fetchIssues = async () => {
      const res = await getIssues(filters)
        setRows([...rows, ...res.data])
        setLoading(false);
      // on fetching more issues are added at the end of issues list
      // on filtering of issues - only issues filtered on the basis of the filter should be shown
    }

    fetchIssues()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[filters])

  return (
    <Box display="flex" justifyContent='center' mt={7}>
      <Header setfilters={setfilters} />
      <TableWithInfiniteScroll loading={loading} rows={rows} fetchMore={fetchMore} />
    </Box>
  )
}

export default IssuePage;