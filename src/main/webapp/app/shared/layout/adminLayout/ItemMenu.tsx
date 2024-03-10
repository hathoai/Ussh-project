import React, { useEffect } from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Collapse } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { hasAnyAuthority } from 'app/shared/auth/private-route';
import Typography from '@mui/material/Typography';
import { useLocation } from 'react-router-dom';
import * as _ from 'lodash';
import { useAppSelector } from 'app/config/store';

export function countCommonCharacters(str1, str2) {
  const arr1 = str1?.split('');
  const arr2 = str2?.split('');
  let commonCount = 0;

  for (let i = 0; i < Math.min(arr1?.length, arr2?.length); i++) {
    if (arr1[i] === arr2[i]) {
      commonCount++;
    } else {
      break;
    }
  }

  return commonCount;
}

function ItemMenu(props: any) {
  const { data, open, handleDrawerOpen, role } = props;
  const [collapse, setCollapse] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isAuthorized = hasAnyAuthority(role, data.role);
  const pathname = location.pathname.replace('/admin/', '');

  useEffect(() => {
    if (!open) {
      setCollapse(false);
    }
  }, [open]);

  useEffect(() => {
    if (collapse) {
      handleDrawerOpen();
    }
  }, [collapse]);

  // useEffect(() => {
  //   if (data?.children?.length === 0 && data.root?.link !== pathname) {
  //     setCollapse(false);
  //   }
  // }, [pathname]);

  const checkMenu = () => {
    if (countCommonCharacters(data?.root?.link, pathname) > 5) {
      return true;
    }
    if (
      countCommonCharacters(data?.children[0]?.link, pathname) > 5 ||
      countCommonCharacters(data?.children[1]?.link, pathname) > 5
    ) {
      return true;
    }
  };

  return (
    role &&
    isAuthorized && (
      <ListItem disablePadding sx={{ display: 'block' }}>
        <ListItemButton
          sx={{
            minHeight: 48,
            justifyContent: open ? 'initial' : 'center',
            px: 2.5,
            borderLeft: checkMenu() ? '5px solid #004A84' : '5px solid transparent',
            color: checkMenu() ? '#004A84' : '',
          }}
          onClick={() => {
            if (data?.root) {
              // have root
              const isAuthorizedChilren = hasAnyAuthority(role, data.root.role);
              if (isAuthorizedChilren) {
                navigate(data.root.link);
                // setCollapse(!collapse);
              }
            } else {
              if (hasAnyAuthority(role, data.children[0].role)) {
                navigate(data.children[0].link);
              } else {
                navigate(data.children[1].link);
              }
            }
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: open ? 3 : 'auto',
              justifyContent: 'center',
              color: checkMenu() ? '#004A84' : '',
            }}
          >
            {data.icon}
          </ListItemIcon>
          <ListItemText>
            <Typography sx={{ opacity: open ? 1 : 0, color: checkMenu() ? '#004A84 !important' : '', fontSize: 16 }}>
              {data.title}
            </Typography>
          </ListItemText>
        </ListItemButton>
        {open &&
          data?.children?.map((item, key) => {
            const isAuthorizedChilren = hasAnyAuthority(role, item.role);
            return (
              isAuthorizedChilren && (
                <Collapse in={checkMenu()} timeout={500} unmountOnExit key={key}>
                  <ListItemButton
                    onClick={() => navigate(item.link)}
                    sx={{ borderLeft: checkMenu() ? '5px solid #004A84' : '5px solid transparent' }}
                  >
                    <ListItemText>
                      <Typography
                        sx={{
                          marginLeft: 6.5,
                          color: checkMenu() ? '#004A84 !important' : '',
                        }}
                      >
                        {item.subTitle}
                      </Typography>
                    </ListItemText>
                  </ListItemButton>
                </Collapse>
              )
            );
          })}
      </ListItem>
    )
  );
}

export default React.memo(ItemMenu);
