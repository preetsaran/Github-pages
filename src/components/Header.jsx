import React from 'react';
import { Icon } from '@iconify/react';
import { Box } from '@mui/material'

import HeaderItem from './HeaderItem';
import { useIsMobile } from './utils/hooks';

const MenuItems = [
  "Label",
  "Sort"
];

const menuMap = {
  Label: 'labels',
  Sort: 'sort'
}

const SubMenuItems = {
  LabelItems: [
    'Type: bug',
    'React Core Team',
    'Status: Unconfirmed',
    'CLA Signed',
    'Type: Needs Investigation',
    'Component: DOM',
    'Component: Developer Tools',
    'Component: ESLint Rules',
    'Resolution: Stale'
  ],
  SortItems: [
    'created-desc',
    'created-asc',
    'comments-desc',
    'comments-asc',
    'updated-desc',
    'updated-asc',
  ]
}

const Header = (props) => {
  const isMobile = useIsMobile();

  const setFilter = (filterTitle, filterValue) => {
    props.setfilters((params) => {
      return {...params, [menuMap[filterTitle]]: filterValue}
    })
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
      padding='16px'
      position='fixed'
      top='0'
      zIndex={1}
      px={10}
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
