import React, { useState, useContext, useMemo, useCallback } from "react";
import "./Sidebar.css";

const SidebarContext = React.createContext();

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context)
    throw new Error("useSidebar must be used within SidebarProvider");
  return context;
};

export const SidebarProvider = ({ children, defaultOpen = true }) => {
  const [open, setOpen] = useState(defaultOpen);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const toggleSidebar = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const value = useMemo(
    () => ({ open, setOpen, isMobile, toggleSidebar }),
    [open, isMobile, toggleSidebar]
  );

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
};

export const Sidebar = ({ children }) => {
  const { open } = useSidebar();

  return (
    <div className={`sidebar ${open ? "expanded" : "collapsed"}`}>
      <div className="sidebar-content">{children}</div>
    </div>
  );
};

export const SidebarTrigger = () => {
  const { toggleSidebar } = useSidebar();
  return (
    <button className="sidebar-trigger" onClick={toggleSidebar}>
      ☰
    </button>
  );
};

export const SidebarHeader = ({ children }) => (
  <div className="sidebar-header">{children}</div>
);

export const SidebarFooter = ({ children }) => (
  <div className="sidebar-footer">{children}</div>
);

export const SidebarContent = ({ children }) => (
  <div className="sidebar-main-content">{children}</div>
);

export const SidebarItem = ({ label, icon }) => (
  <div className="sidebar-item">
    {icon && <span className="sidebar-icon">{icon}</span>}
    <span className="sidebar-label">{label}</span>
  </div>
);
