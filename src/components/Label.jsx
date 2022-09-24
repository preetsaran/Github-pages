import React from 'react';
import { Box } from '@mui/material';
import styled from "styled-components";

const Label = ({label, isMobile}) => {
  return (
    <Box 
      component='span'
      sx={{
        lineHeight: 1.5,
        borderRadius: '500px',
        border: `1px solid #${label.color}80`,
        bgcolor: `#${label.color}30`,
        px: '8px',
        ml: '4px',
        display: 'flex',
        alignItems: 'center',
        width: 'max-content'
      }}
      mb={isMobile ? '6px' : '0'} 
    >
      <StyledBox component='a'
        href={label.url}
        sx={
          {
            textDecoration: 'none', 
            color: `#${label.color}`,
            fontSize: '12px',
            textAlign: 'center',
            filter: 'contrast(1.25)',
            fontWeight: 'bold',
            zIndex:0
          }
        }
        color={`#${label.color}`}
      >
        {label.name}
      </StyledBox>
    </Box>
  )
}

export default Label

const StyledBox = styled(Box)`
  :hover {
    text-decoration: none;
  }
`