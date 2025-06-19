import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type RefObject,
} from "react";

// Responsive context type
interface ResponsiveContextType {
  isSidebarOpen: boolean;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  toggleSidebar: () => void;
  sidebarRef: RefObject<HTMLElement | null>;
  hamburgerRef: RefObject<HTMLElement | null>;
}

// Create context
const ResponsiveContext = createContext<ResponsiveContextType | undefined>(
  undefined,
);

// Responsive provider component
export function ResponsiveProvider({ children }: { children: ReactNode }) {
  const theme = useTheme();

  // Media queries
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isTablet = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  const [isSidebarOpen, setIsSidebarOpenState] = useState<boolean>(!isMobile);

  // Auto-close sidebar on mobile
  useEffect(() => {
    if (isMobile) {
      setIsSidebarOpenState(false);
    } else {
      setIsSidebarOpenState(true);
    }
  }, [isMobile]);

  const toggleSidebar = () => {
    setIsSidebarOpenState((prev) => !prev);
  };

  // Refs for sidebar
  const sidebarRef = useRef<HTMLElement | null>(null);
  const hamburgerRef = useRef<HTMLElement | null>(null);

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!isMobile || !isSidebarOpen) return;

      const target = event.target as Node;

      // Check if click is outside sidebar
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(target)
      ) {
        setIsSidebarOpenState(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobile, isSidebarOpen]);

  // Context value
  const contextValue: ResponsiveContextType = {
    isSidebarOpen,
    isMobile,
    isTablet,
    isDesktop,
    toggleSidebar,
    sidebarRef,
    hamburgerRef,
  };

  return (
    <ResponsiveContext.Provider value={contextValue}>
      {children}
    </ResponsiveContext.Provider>
  );
}

// Custom hook to use responsive context
export const useResponsive = (): ResponsiveContextType => {
  const context = useContext(ResponsiveContext);
  if (context === undefined) {
    alert("useResponsive must be used within a ResponsiveProvider");
    throw new Error("useResponsive must be used within a ResponsiveProvider");
  }
  return context;
};

export default ResponsiveProvider;
