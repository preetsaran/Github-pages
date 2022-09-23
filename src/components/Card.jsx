import {useState, useEffect} from 'react'
import { Box, Paper } from '@mui/material';
import { Icon } from '@iconify/react';
import Label from './Label';
import en from 'javascript-time-ago/locale/en'
import TimeAgo from 'javascript-time-ago'

const Card = ({data}) => {

  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);

  const isMobile = width <= 768;

  const getFormatteddate = (date) => {
    const formattedDate = new Date(date)
    TimeAgo.addLocale(en)
    return new TimeAgo('en-US').format(formattedDate)
  }

  getFormatteddate(data.created_at)

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
          <Box display={isMobile? 'block' : 'flex'}>
            <Box 
              component='a' 
              href={data.url}
              sx={{textDecoration: 'none', color: 'white', fontSize: '16px', fontWeight: '600'}}>
                {data.title}
            </Box>

            <Box display='flex' my={isMobile ? 0.5   : 0}>
              {data.labels.map((label) => <Label label={label} key={label.id} />)}
            </Box>

          </Box>

          <Box component='span' sx={{textDecoration: 'none', color:'#8b949e', fontSize: '12px'}} >
            #{data.id} {`${data.state}ed`}  
            <Box component='span'> {getFormatteddate(data.created_at)} </Box>
            <Box
              component='a'
              href={data.user.repos_url}
              sx={{textDecoration: 'none', color: '#8b949e'}}
            >
              by {data.user.login}
            </Box>
          </Box>
        </Box>
      </Box>
    </Paper>
  )
}

export default Card;
