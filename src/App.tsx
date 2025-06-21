import { Box } from "@mui/system";
import { type ReactElement } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";

import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import { headerHeight, PATHS, sideBarWidth } from "./constants";
import { useResponsive } from "./contexts";
import Billing from "./pages/Billing";
import History from "./pages/History";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Setting from "./pages/Setting";

// App content component to use useLocation hook
export default function App(): ReactElement {
  const { isMobile } = useResponsive();
  const location = useLocation();

  // Check if current route is login page
  const isLoginPage = location.pathname === PATHS.login;

  // If login page, render only the login component
  if (isLoginPage) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Routes>
          <Route path={PATHS.login} element={<Login />} />
        </Routes>
      </Box>
    );
  }

  // Normal layout for other pages
  return (
    <>
      <Header />
      <Box
        minHeight={`calc(100vh - ${headerHeight}px)`}
        sx={{ display: "flex", flexDirection: "row" }}
      >
        <Sidebar />
        <Box
          height={`calc(100vh - ${headerHeight}px)`}
          width={isMobile ? "100vw" : `calc(100vw - ${sideBarWidth}px)`}
          sx={{
            overflow: "auto",
          }}
        >
          <main
            style={{
              width: "100%",
              minHeight: "100%",
            }}
          >
            <Routes>
              <Route
                path={PATHS.root}
                element={<Navigate to={PATHS.home} replace />}
              />
              <Route path={PATHS.home} element={<Home />} />
              <Route path={PATHS.history} element={<History />} />
              <Route path={PATHS.billing} element={<Billing />} />
              <Route path={PATHS.setting} element={<Setting />} />
            </Routes>
          </main>
        </Box>
      </Box>
    </>
  );
}
