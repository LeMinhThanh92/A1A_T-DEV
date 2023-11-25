import { FC, ReactNode } from 'react';
import { useTheme } from '@mui/material';
import { Outlet } from 'react-router-dom';

import NavigationDrawer from "./NewSideBar";

interface SidebarLayoutProps {
  children?: ReactNode;
}

const SidebarLayout: FC<SidebarLayoutProps> = () => {
  const theme = useTheme();

  return (
    <>
          <NavigationDrawer>
              <Outlet />
          </NavigationDrawer>
    </>
  );
};

export default SidebarLayout;
