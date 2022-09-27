import { memo } from 'react';
import { Box } from '@mui/material';
import styled from 'styled-components'
import { CloseIcon } from '../utils/Icons';
import { useAppSelector, useAppDispatch } from '../../store';
import { resetParams, updateQueryFlag } from '../../reducers/Issues'

const Search = (props) => {
  const { params } = useAppSelector((state) => state.issues);
  const dispatch = useAppDispatch();
  
  const getAllFiltersText = () => {
    let val = '';
    if(params.labels) {
      val += `label: ${params.labels}`
    }
    if(params.sort) {
      val += ` sort: ${params.sort}`
    }
    return val;
  }

  const handleClose = () => {
    dispatch(updateQueryFlag(true))
    dispatch(resetParams())
  }

  const val = getAllFiltersText();

  return (
    <Box 
      width='90vw' 
      mb={2} 
      minWidth="400px" 
      display={'flex'} 
      alignItems={props.isMobile ? 'center' : ''} 
      flexDirection='column' 
    >
      <StyledFiltersBox border='1px solid rgb(48, 54, 61)' borderRadius={2} height={35} width={props.isMobile ? '90%' : '45%'} p={1}>
        Filters:  {getAllFiltersText()}
      </StyledFiltersBox>
      
      {val &&
        <StyledCloseContainer 
          fontWeight='600' 
          fontSize='15px' 
          mt={1} 
          display='flex'
          width={props.isMobile ? '90%' : '45%'}
        >
          <Box onClick={handleClose}>
            <CloseIcon />
          </Box>
          Clear current search query, filters, and sorts
        </StyledCloseContainer>
      }
    </Box>
  )
}

export default memo(Search);

const StyledCloseContainer = styled(Box)`
  svg {
    margin-right: 8px;
    background: white;
    border-radius: 6px;
  }
`

const StyledFiltersBox = styled(Box)`
  :hover {
    border: 2px solid #58a6ff;
  }
`
