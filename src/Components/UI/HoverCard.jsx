import React, { forwardRef } from "react";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import "./hovercard.css"; // external CSS

const HoverCard = HoverCardPrimitive.Root;
const HoverCardTrigger = HoverCardPrimitive.Trigger;

const HoverCardContent = forwardRef(
  ({ className = "", align = "center", sideOffset = 4, ...props }, ref) => (
    <HoverCardPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={`hovercard-content ${className}`}
      {...props}
    />
  )
);

HoverCardContent.displayName = "HoverCardContent";

export { HoverCard, HoverCardTrigger, HoverCardContent };
