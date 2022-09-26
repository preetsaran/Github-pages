import React from 'react';
import "rsuite/dist/rsuite.css";
import {StyledDropdown, StyledDropdownItem} from './headerItemStyles'

const HeaderItem = ({subMenuItems, setFilter, title, isMobile}) => {

  const handleSelect = (eventkey) => {
    setFilter(title, eventkey)
  };

  return (
    <StyledDropdown title={title} onSelect={handleSelect} isMobile={isMobile}>
      {subMenuItems?.map((subMenuItem) => 
        <StyledDropdownItem key={subMenuItem} eventKey={subMenuItem}>{subMenuItem}</StyledDropdownItem>
      )}
    </StyledDropdown>
  );
}

export default HeaderItem