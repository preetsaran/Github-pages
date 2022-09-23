import React from 'react';
import { Box } from '@mui/material';

const Label = ({label}) => {
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
        width: 'fit-content'
      }}
    >
      <Box component='a'
        href={label.url}
        sx={
          {
            textDecoration: 'none', 
            color: `#${label.color}`,
            fontSize: '12px',
          }
        }
      >
        {label.name}
      </Box>
    </Box>
  )
}

export default Label

