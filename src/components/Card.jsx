import { Box, Paper } from '@mui/material';
import { Icon } from '@iconify/react';

export function Card() {
  return (
    <Paper style={{width: '90vw'}}>
      <Box 
        display='flex' 
        bgcolor='#0d1117' 
        borderBottom='1px solid rgb(48, 54, 61)'
        fontFamily='Circular-Loom'
        p={1}
      >
        <Box height={25} alignSelf='center' pl={1}>
          <Icon icon="octicon:issue-opened-16" color='#3fb950' />
        </Box>

        <Box pr={1} p={1} minWidth={0} display='flex' flexDirection='column'>
          <Box>
            <Box 
              component='a' 
              href="/github/hub/issues/3010" 
              sx={{textDecoration: 'none', color: 'white', fontSize: '16px', fontWeight: '600'}}>
              Error generated from Azure firewall policy rule collection group reports incorrect grammar.
            </Box>

            <Box 
              component='span' 
              lineHeight={1.5} 
              borderRadius='40%' 
              border='1px solid rgb(256, 156, 166, 0.3)' 
              bgcolor='rgb(215, 58, 74, 0.18)'
              px='8px'
              ml='4px'
            >
              <Box component='a'
                href="/github/hub/issues?q=is%3Aissue+is%3Aopen+label%3Abug" 
                sx={
                  {
                    textDecoration: 'none', 
                    color: 'rgb(256, 156, 166)',
                    fontSize: '12px',
                  }
                }
              >
                bug
              </Box>
            </Box>
          </Box>

          <Box component='span' sx={{textDecoration: 'none', color:'#8b949e', fontSize: '12px'}} >
            #3010 opened 
              <Box component='span'> 3 days ago </Box> by
              <Box 
                component='a' 
                href="/github/hub/issues?q=is%3Aissue+is%3Aopen+author%3Anona2512" 
                sx={{textDecoration: 'none', ml:'8px', color: '#8b949e'}}
              >
                nona2512
              </Box>
          </Box>
        </Box>
      </Box>
    </Paper>
  )
}

export default Card;
