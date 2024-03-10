import React from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ItemMenu from './ItemMenu';
import { Drawer, DrawerHeader } from './style';
import { useAppSelector } from 'app/config/store';
import {ADMIN_SIDE_BAR} from "app/constant/adminSideBar";

const SideBar = () => {
  const [open, setOpen] = React.useState(true);
  const account = useAppSelector(state => state.authentication.account);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Drawer variant="permanent" open={open}>
      <List>
        {ADMIN_SIDE_BAR.map((data, key) => {
          return (
            <React.Fragment key={key}>
              <ItemMenu data={data} open={open} handleDrawerOpen={handleDrawerOpen} role={account.authorities} />
            </React.Fragment>
          );
        })}
      </List>
      <DrawerHeader>
        {open ? (
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        ) : (
          <IconButton onClick={handleDrawerOpen}>
            <ChevronRightIcon />
          </IconButton>
        )}
      </DrawerHeader>
    </Drawer>
  );
};

export default SideBar;
