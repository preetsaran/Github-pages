import { Box } from '@mui/material';
import { Icon } from '@iconify/react';

const LeftContent = (props) => {
  return (
    <Box display={'flex'} width={props?.width} pl={props?.pl} pb ={props?.pb}>
      <Box display={'flex'} alignItems='center' mr={5}>
        <Icon icon="octicon:issue-opened-16" color='#8b949e' />
        <Box ml={1}>{props.openIssue ? props.openIssue : 100 }</Box>
        <Box ml={1} color='#8b949e'>Open</Box>
      </Box>
      <Box display={'flex'} alignItems='center'>
        <Icon icon="charm:tick" color='#8b949e' fontSize={18} />
        <Box ml={1}>{ props.closeIssue ? props.openIssue : 0}</Box>
        <Box ml={1} color='#8b949e'>Closed</Box>
      </Box>
    </Box>
  )
}

export default LeftContent;