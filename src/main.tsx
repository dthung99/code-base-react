import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";

import App from "./App.tsx";
import { AuthProvider } from "./contexts/AuthContext.tsx";
import {
  CustomThemeProvider,
  LanguageProvider,
  ResponsiveProvider,
} from "./contexts/index.tsx";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="app-placeholder" style={{ width: "100%" }}>
      <ResponsiveProvider>
        <LanguageProvider>
          <CustomThemeProvider>
            <HashRouter>
              <AuthProvider>
                <App />
              </AuthProvider>
            </HashRouter>
          </CustomThemeProvider>
        </LanguageProvider>
      </ResponsiveProvider>
    </div>
  </StrictMode>,
);
