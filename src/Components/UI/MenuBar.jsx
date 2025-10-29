import React, { forwardRef } from "react";
import * as MenubarPrimitive from "@radix-ui/react-menubar";
import { Check, ChevronRight, Circle } from "lucide-react";
import "./menubar.css"; // external styles

const MenubarMenu = MenubarPrimitive.Menu;
const MenubarGroup = MenubarPrimitive.Group;
const MenubarPortal = MenubarPrimitive.Portal;
const MenubarSub = MenubarPrimitive.Sub;
const MenubarRadioGroup = MenubarPrimitive.RadioGroup;

const Menubar = forwardRef(({ className = "", ...props }, ref) => (
  <MenubarPrimitive.Root
    ref={ref}
    className={`menubar-root ${className}`}
    {...props}
  />
));
Menubar.displayName = MenubarPrimitive.Root.displayName;

const MenubarTrigger = forwardRef(({ className = "", ...props }, ref) => (
  <MenubarPrimitive.Trigger
    ref={ref}
    className={`menubar-trigger ${className}`}
    {...props}
  />
));
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName;

const MenubarSubTrigger = forwardRef(
  ({ className = "", inset, children, ...props }, ref) => (
    <MenubarPrimitive.SubTrigger
      ref={ref}
      className={`menubar-subtrigger ${inset ? "inset" : ""} ${className}`}
      {...props}
    >
      {children}
      <ChevronRight className="submenu-icon" />
    </MenubarPrimitive.SubTrigger>
  )
);
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName;

const MenubarSubContent = forwardRef(({ className = "", ...props }, ref) => (
  <MenubarPrimitive.SubContent
    ref={ref}
    className={`menubar-subcontent ${className}`}
    {...props}
  />
));
MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName;

const MenubarContent = forwardRef(({ className = "", ...props }, ref) => (
  <MenubarPrimitive.Portal>
    <MenubarPrimitive.Content
      ref={ref}
      className={`menubar-content ${className}`}
      {...props}
    />
  </MenubarPrimitive.Portal>
));
MenubarContent.displayName = MenubarPrimitive.Content.displayName;

const MenubarItem = forwardRef(({ className = "", inset, ...props }, ref) => (
  <MenubarPrimitive.Item
    ref={ref}
    className={`menubar-item ${inset ? "inset" : ""} ${className}`}
    {...props}
  />
));
MenubarItem.displayName = MenubarPrimitive.Item.displayName;

const MenubarCheckboxItem = forwardRef(
  ({ className = "", children, ...props }, ref) => (
    <MenubarPrimitive.CheckboxItem
      ref={ref}
      className={`menubar-checkbox ${className}`}
      {...props}
    >
      <span className="indicator-box">
        <MenubarPrimitive.ItemIndicator>
          <Check className="check-icon" />
        </MenubarPrimitive.ItemIndicator>
      </span>
      {children}
    </MenubarPrimitive.CheckboxItem>
  )
);
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName;

const MenubarRadioItem = forwardRef(
  ({ className = "", children, ...props }, ref) => (
    <MenubarPrimitive.RadioItem
      ref={ref}
      className={`menubar-radio ${className}`}
      {...props}
    >
      <span className="indicator-box">
        <MenubarPrimitive.ItemIndicator>
          <Circle className="circle-icon" />
        </MenubarPrimitive.ItemIndicator>
      </span>
      {children}
    </MenubarPrimitive.RadioItem>
  )
);
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName;

const MenubarLabel = forwardRef(({ className = "", inset, ...props }, ref) => (
  <MenubarPrimitive.Label
    ref={ref}
    className={`menubar-label ${inset ? "inset" : ""} ${className}`}
    {...props}
  />
));
MenubarLabel.displayName = MenubarPrimitive.Label.displayName;

const MenubarSeparator = forwardRef(({ className = "", ...props }, ref) => (
  <MenubarPrimitive.Separator
    ref={ref}
    className={`menubar-separator ${className}`}
    {...props}
  />
));
MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName;

const MenubarShortcut = ({ className = "", ...props }) => (
  <span className={`menubar-shortcut ${className}`} {...props} />
);
MenubarShortcut.displayName = "MenubarShortcut";

export {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarPortal,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarGroup,
  MenubarSub,
  MenubarShortcut,
};
