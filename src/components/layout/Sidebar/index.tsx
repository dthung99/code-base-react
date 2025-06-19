import {
  CardMembership as CardMembershipIcon,
  History as HistoryIcon,
  Home as HomeIcon,
  Settings as SettingsIcon,
} from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

import { headerHeight, PATHS, sideBarWidth } from "../../../constants";
import { useLanguage, useResponsive } from "../../../contexts";

interface SidebarNavItemProps {
  icon: React.ReactNode;
  path: string;
  label: string;
}

function SidebarNavItem({ icon, path, label }: SidebarNavItemProps) {
  const location = useLocation();
  const isActive = location.pathname === path;
  return (
    <Link to={path}>
      <Stack
        spacing={2}
        direction="row"
        sx={{
          justifyContent: "flex-start",
          alignItems: "center",
          padding: 1,
          cursor: "pointer",
          color: isActive ? "primary.main" : "text.primary",
          "&:hover": {
            color: "primary.main",
          },
        }}
      >
        {icon}
        <Typography noWrap sx={{ textAlign: "left" }}>
          {label}
        </Typography>
      </Stack>
    </Link>
  );
}

function Sidebar() {
  const { isMobile, isSidebarOpen, sidebarRef } = useResponsive();
  const { t } = useLanguage();

  const navItems = [
    {
      icon: <HomeIcon sx={{ fontSize: 28 }} />,
      path: PATHS.home,
      label: t.sideBar.home,
    },
    {
      icon: <HistoryIcon sx={{ fontSize: 28 }} />,
      path: PATHS.history,
      label: t.sideBar.history,
    },
    {
      icon: <CardMembershipIcon sx={{ fontSize: 28 }} />,
      path: PATHS.billing,
      label: t.sideBar.billing,
    },
    {
      icon: <SettingsIcon sx={{ fontSize: 28 }} />,
      path: PATHS.setting,
      label: t.sideBar.setting,
    },
  ];

  return (
    <Box
      ref={sidebarRef}
      sx={{
        backgroundColor: "background.paper",
        width: isSidebarOpen ? `${sideBarWidth}px` : 0,
        overflow: "hidden",
        transform: isSidebarOpen
          ? "translateX(0)"
          : `translateX(-${sideBarWidth}px)`,
        transition: "width 0.3s ease-in-out, transform 0.3s ease-in-out",
        // For mobile, use transform instead of width for better performance
        ...(isMobile && {
          position: "fixed",
          top: `${headerHeight}px`,
          left: 0,
          height: `calc(100vh - ${headerHeight}px)`, // Adjust for header height
          width: `${sideBarWidth}px`,
          zIndex: 1200,
        }),
      }}
      p={1}
      pr={2}
      top={0}
    >
      <Stack
        spacing={1}
        sx={{
          width: "100%",
          alignItems: "flex-start",
        }}
      >
        {navItems.map((item, index) => (
          <SidebarNavItem
            key={index}
            icon={item.icon}
            path={item.path}
            label={item.label}
          />
        ))}
      </Stack>
    </Box>
  );
}

export default Sidebar;
