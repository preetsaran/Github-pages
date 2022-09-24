import React from 'react';
import styled from "styled-components";
import Dropdown from 'rsuite/Dropdown';
import "rsuite/dist/rsuite.css";

const HeaderItem = ({subMenuItems, setFilter, title}) => {

  const handleSelect = (eventkey) => {
    setFilter(title, eventkey)
  };

  return (
    <StyledDropdown title={title} onSelect={handleSelect}>
      {subMenuItems?.map((subMenuItem) => 
        <StyledDropdownItem key={subMenuItem} eventKey={subMenuItem}>{subMenuItem}</StyledDropdownItem>
      )}
    </StyledDropdown>
  );
}

export default HeaderItem

const StyledDropdown = styled(Dropdown)`
  background: #161b22;
  button {
    background: #161b22;
    color: #8b949e;
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

const StyledDropdownItem = styled(Dropdown.Item)`
  background: #161b22;
  :hover {
    background: #21262d;
  }
`