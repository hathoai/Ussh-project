import { Box, Grid, Typography } from '@mui/material';

import React, { useEffect } from 'react';
import SideBar from './sideBar';
import { useLocation } from 'react-router-dom';
import { useAppSelector } from 'app/config/store';
import * as _ from 'lodash';
import { countCommonCharacters } from './ItemMenu';
import {ADMIN_SIDE_BAR} from "app/constant/adminSideBar";
import {Main} from "app/shared/layout/adminLayout/style";
interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const location = useLocation();
  const showNameHeader = () => {
    let nameHeader: string;
    const arrPath = location.pathname?.split('/');
    const strPath = arrPath?.[2];

    ADMIN_SIDE_BAR.map(item => {
      if (item?.children?.length > 0) {
        item.children?.map(i => {
          if (countCommonCharacters(i.link, strPath) > 5) {
            nameHeader = i.header;
          }
        });
      }
      // else {
      //   if (countCommonCharacters(item.root.link, strPath) > 5) {
      //     nameHeader = item.name;
      //   }
      // }
    });

    return nameHeader;
  };

  useEffect(() => {
    showNameHeader();
  }, [location]);

  return (
    <Box display={'flex'} height={window.innerHeight - 92} overflow={'hidden'}>
      <SideBar />
      <Main>
        <Grid
          container
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'space-between',
            height: '100%',
          }}
          spacing={0}
        >
          <Grid item xs={12}>
            <Box width={'100%'}>
              <Typography
                sx={{
                  paddingLeft: '32px',
                  color: '#ffffFf',
                  fontSize: '20px',
                  // backgroundColor: '#20394D',
                  height: '92px !important',
                  display: 'flex',
                  alignItems: 'center',
                  width: '100%',
                }}
              >
                {showNameHeader()}
              </Typography>
            </Box>
            <Box paddingLeft={3} paddingRight={3} sx={{ marginTop: '28px' }}>
              {children}
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              alignSelf: 'flex-end',
            }}
          >
            <Box
              sx={{
                width: '100%',
                background: 'rgba(32, 57, 77, 0.17)',
                // position: 'relative',
                bottom: 0,
                height: '60px !important',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Typography sx={{ color: '#20394D', fontSize: 12 }}>© 2023 All Rights Reserved.</Typography>
            </Box>
          </Grid>
        </Grid>
      </Main>
    </Box>
  );
};

export default AdminLayout;
