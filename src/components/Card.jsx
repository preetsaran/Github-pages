import { Box } from '@mui/material';
import { Icon } from '@iconify/react';
import Label from './Label';
import en from 'javascript-time-ago/locale/en'
import TimeAgo from 'javascript-time-ago'
import styled from "styled-components";
import { useIsMobile } from './utils/hooks';

const Card = ({data}) => {
  const isMobile = useIsMobile();

  const getFormatteddate = (date) => {
    const formattedDate = new Date(date)
    TimeAgo.addLocale(en)
    return new TimeAgo('en-US').format(formattedDate)
  }

  return (
    <StyledContainer 
      display='flex' 
      bgcolor='#161b22'
      borderBottom='1px solid rgb(48, 54, 61)'
      fontFamily='Circular-Loom'
      p={1}
      width = '90vw'
    >
      {data.state === 'open' ?
        <Box height={25} alignSelf='start' p={1}>
          <Icon icon="octicon:issue-opened-16" color='#3fb950' />
        </Box>
        :
        <Box height={25} alignSelf='start' p={1}>
          <Icon icon="octicon-issue-closed" color='#a371f7' />
        </Box>
      }

      <Box pr={1} p={1} minWidth={0} display='flex' flexDirection='column'>
        <Box display={isMobile? 'block' : 'flex'}>
          <StyledBox 
            component='a' 
            href={data.url}
            sx={{textDecoration: 'none', color: 'white', fontSize: '16px', fontWeight: '600'}}>
              {data.title}
          </StyledBox>

          <Box component='span' display='flex' mt={isMobile ? 1 : 0} flexDirection={isMobile ? 'column' : 'row'}>
            {data.labels.map((label) => <Label label={label} key={label.id} isMobile={isMobile} />)}
          </Box>
        </Box>

        <Box component='span' sx={{textDecoration: 'none', color:'#8b949e', fontSize: '12px', }} >
          #{data.id} {`${data.state}ed`}  
          <Box component='span'> {getFormatteddate(data.created_at)} </Box>
          <StyledBox
            component='a'
            href={data.user.repos_url}
            sx={{textDecoration: 'none', color: '#8b949e'}}
          >
            by {data.user.login}
          </StyledBox>
        </Box>
      </Box>
    </StyledContainer>
  )
}

export default Card;

const StyledBox = styled(Box)`
  :hover {
    text-decoration: none;
    color: white;
  }
`

const StyledContainer = styled(Box)`
  :hover {
    background: #21262d;
  }
`