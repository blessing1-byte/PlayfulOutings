import React, { forwardRef } from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { ChevronDown } from "lucide-react";
import "./navigationMenu.css";

const NavigationMenu = forwardRef(
  ({ className = "", children, ...props }, ref) => (
    <NavigationMenuPrimitive.Root
      ref={ref}
      className={`navigation-menu-root ${className}`}
      {...props}
    >
      {children}
      <NavigationMenuViewport />
    </NavigationMenuPrimitive.Root>
  )
);
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;

const NavigationMenuList = forwardRef(({ className = "", ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={`navigation-menu-list ${className}`}
    {...props}
  />
));
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;

const NavigationMenuItem = NavigationMenuPrimitive.Item;

const NavigationMenuTrigger = forwardRef(
  ({ className = "", children, ...props }, ref) => (
    <NavigationMenuPrimitive.Trigger
      ref={ref}
      className={`navigation-menu-trigger ${className}`}
      {...props}
    >
      {children}
      <ChevronDown className="chevron-icon" aria-hidden="true" />
    </NavigationMenuPrimitive.Trigger>
  )
);
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;

const NavigationMenuContent = forwardRef(
  ({ className = "", ...props }, ref) => (
    <NavigationMenuPrimitive.Content
      ref={ref}
      className={`navigation-menu-content ${className}`}
      {...props}
    />
  )
);
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;

const NavigationMenuLink = NavigationMenuPrimitive.Link;

const NavigationMenuViewport = forwardRef(
  ({ className = "", ...props }, ref) => (
    <div className="navigation-menu-viewport-wrapper">
      <NavigationMenuPrimitive.Viewport
        className={`navigation-menu-viewport ${className}`}
        ref={ref}
        {...props}
      />
    </div>
  )
);
NavigationMenuViewport.displayName =
  NavigationMenuPrimitive.Viewport.displayName;

const NavigationMenuIndicator = forwardRef(
  ({ className = "", ...props }, ref) => (
    <NavigationMenuPrimitive.Indicator
      ref={ref}
      className={`navigation-menu-indicator ${className}`}
      {...props}
    >
      <div className="navigation-menu-indicator-shape" />
    </NavigationMenuPrimitive.Indicator>
  )
);
NavigationMenuIndicator.displayName =
  NavigationMenuPrimitive.Indicator.displayName;

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
};
