import { Box, Paper } from '@mui/material';
import { Icon } from '@iconify/react';
import Label from './Label';
import en from 'javascript-time-ago/locale/en'
import TimeAgo from 'javascript-time-ago'

const Card = ({data}) => {

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
          <Box display='flex'>
            <Box 
              component='a' 
              href="/github/hub/issues/3010" 
              sx={{textDecoration: 'none', color: 'white', fontSize: '16px', fontWeight: '600'}}>
                {data.title}
            </Box>

            <Box display='flex'>
              {data.labels.map((label) => <Label label={label} key={label.id} />)}
            </Box>

          </Box>

          <Box component='span' sx={{textDecoration: 'none', color:'#8b949e', fontSize: '12px'}} >
            #{data.id} {`${data.state}ed`}  
              <Box component='span'> {getFormatteddate(data.created_at)} </Box>
              <Box 
                component='a' 
                href="/github/hub/issues?q=is%3Aissue+is%3Aopen+author%3Anona2512" 
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
