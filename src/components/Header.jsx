import React from 'react';
import { Box } from '@mui/material'

import HeaderItem from './HeaderItem';
import { useAppDispatch } from '../store'
import { useIsMobile } from './utils/hooks';
import { updateParams, updateQueryFlag } from '../reducers/Issues'
import { MenuItems, SubMenuItems, MenuMap } from './utils/constants';
import LeftContent from "./LeftContent";

const Header = (props) => {
  const isMobile = useIsMobile();
  const dispatch = useAppDispatch();

  const setFilter = (filterTitle, filterValue) => {
    dispatch(updateQueryFlag(true))
    dispatch(updateParams({[MenuMap[filterTitle]]: filterValue, page: 1}))
  }

  return (
    <Box 
      height='60px'
      width='100%'
      display='flex'
      bgcolor='#161b22'
      borderBottom='1px solid rgb(48, 54, 61)'
      alignItems='center'
      justifyContent={isMobile ? 'center' : 'space-between'}
      py={2}
      px={2}
      zIndex={1}
    >
      {!isMobile && <LeftContent />}
      <Box>
        {MenuItems.map((item) => {
          return (
            <HeaderItem
              key={item}
              subMenuItems={SubMenuItems[`${item}Items`]}
              setFilter={setFilter}
              title={item}
              isMobile={isMobile}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default Header;
