import styled from "styled-components";
import Dropdown from 'rsuite/Dropdown';

export const StyledDropdown = styled(Dropdown)`
  background: #161b22;
  
  button {
    background: #161b22;
    color: #8b949e;

    svg {
      display: ${props => (props.isMobile ? `none` : `block`)};
    }

    :focus {
      color: white !important
    }
  }
  
  :hover {
    button {
      background: #161b22;
      color: white;
    }
  }

  .rs-btn:focus {
    background: #161b22;
  }

`

export const StyledDropdownItem = styled(Dropdown.Item)`
  background: #161b22;
  color: white;

  :hover {
    background: #21262d;
  }
`