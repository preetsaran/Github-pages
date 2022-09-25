import React from 'react';
import { Icon } from '@iconify/react';
import { Box } from '@mui/material'

import HeaderItem from './HeaderItem';
import { useAppDispatch } from '../store'
import { useIsMobile } from './utils/hooks';
import { updateParams, updateQueryFlag } from '../reducers/Issues'
import { MenuItems, SubMenuItems, MenuMap } from './utils/constants';

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
      justifyContent='space-between'
      py={2}
      px={10}
      position='fixed'
      top={0}
      zIndex={1}
    >
      <Box display={'flex'} flexDirection={isMobile ? 'column' : 'row'} width='30%'>
        <Box display={'flex'} alignItems='center' mr={5}>
          <Icon icon="octicon:issue-opened-16" color='#8b949e' />
          <Box ml={1}>{props.openIssue ? props.openIssue : 100 }</Box>
          <Box ml={1}>Open</Box>
        </Box>
        <Box display={'flex'} alignItems='center'>
          <Icon icon="charm:tick" color='#8b949e' fontSize={18} />
          <Box ml={1}>{ props.closeIssue ? props.openIssue : 0}</Box>
          <Box ml={1}>Closed</Box>
        </Box>
      </Box>
      <Box>
        {MenuItems.map((item) => {
          return (
            <HeaderItem
              key={item}
              subMenuItems={SubMenuItems[`${item}Items`]}
              setFilter={setFilter}
              title={item}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default Header;
