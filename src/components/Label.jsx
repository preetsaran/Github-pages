import React from 'react';
import { Box } from '@mui/material';

const Label = ({label, isMobile}) => {
  return (
    <Box 
      component='span'
      sx={{
        lineHeight: 1.5,
        borderRadius: '500px',
        border: `1px solid #${label.color}`,
        bgcolor: `#${label.color}40`,
        px: '8px',
        ml: '4px',
        display: 'flex',
        alignItems: 'center',
        width: 'max-content'
      }}
      mb={isMobile ? '6px' : '0'} 
    >
      <Box component='a'
        href={label.url}
        sx={
          {
            textDecoration: 'none', 
            color: `#${label.color}`,
            fontSize: '12px',
            textAlign: 'center'
          }
        }
      >
        {label.name}
      </Box>
    </Box>
  )
}

export default Label

