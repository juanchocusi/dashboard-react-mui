import { Box } from '@mui/material'
import React from 'react'
import Sidebar from '../common/Sidebar';
import { Outlet } from 'react-router-dom';

const sidebarWidth = 350;
const MainLayout = () => {
  return (
    <div>
      <Box display="flex">
        {/* Side Bar */}
        <Sidebar />
        {/* Side Bar */}

        <Box component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            height: "100vh",
            width: { sm: `calc(100% - ${sidebarWidth}px)` }
          }}
        >
          <Outlet />
        </Box>

      </Box>
    </div>
  )
}

export default MainLayout
