import { Menu as MenuIcon } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { type ReactElement } from "react";
import { Link } from "react-router-dom";

import { headerHeight } from "../../../constants";
import { useLanguage, useResponsive } from "../../../contexts";
import { useAuth } from "../../../contexts/AuthContext";
import LanguageSelector from "../../common/LanguageSelector";

function Header(): ReactElement {
  const { toggleSidebar, hamburgerRef } = useResponsive();
  const { t } = useLanguage();
  const { logout, user } = useAuth();
  return (
    <AppBar position="sticky" elevation={2} sx={{ height: headerHeight }}>
      <Toolbar
        sx={{ height: headerHeight, minHeight: `${headerHeight}px !important` }}
      >
        <Stack sx={{ flexGrow: 1 }} direction="row" alignItems="center">
          {/* Mobile menu button */}
          <Box ref={hamburgerRef}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ display: { md: "none" } }}
              onClick={toggleSidebar}
            >
              <MenuIcon />
            </IconButton>
          </Box>
          {/* Logo/Brand */}

          <Button color="inherit" component={Link} to="/">
            <Typography variant="h6">{t.common.title}</Typography>
          </Button>
        </Stack>
        {/* Navigation Links */}
        <Stack spacing={2} direction="row">
          <LanguageSelector />
          {user ? (
            <Button color="inherit" onClick={logout}>
              {t.auth.logout}
            </Button>
          ) : (
            <Button color="inherit" component={Link} to="/login">
              {t.auth.login}
            </Button>
          )}
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
