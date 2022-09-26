import styled from "styled-components";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { Box } from '@mui/material';

export const StyledBox = styled(Box)`
:hover {
  text-decoration: none;
  color: white;
}
`

export const StyledCommentBox = styled(Box)`
text-decoration: none;
color: #8b949e;
text-align: center;

:hover {
  text-decoration: none;
  color: #8b949e;
}
`

export const StyledChatBubbleOutlineIcon = styled(ChatBubbleOutlineIcon)`
text-decoration: none;

svg {
  width: 20px;
}

color: #8b949e;
:hover {
  color: #8b949e;
}
`