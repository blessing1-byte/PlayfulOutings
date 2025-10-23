import React, { forwardRef, useContext } from "react";
import { OTPInput, OTPInputContext } from "input-otp";
import { Dot } from "lucide-react";
import "./inputotp.css"; // External CSS

const InputOTP = forwardRef(
  ({ className = "", containerClassName = "", ...props }, ref) => (
    <OTPInput
      ref={ref}
      containerClassName={`otp-container ${containerClassName}`}
      className={`otp-input ${className}`}
      {...props}
    />
  )
);
InputOTP.displayName = "InputOTP";

const InputOTPGroup = forwardRef(({ className = "", ...props }, ref) => (
  <div ref={ref} className={`otp-group ${className}`} {...props} />
));
InputOTPGroup.displayName = "InputOTPGroup";

const InputOTPSlot = forwardRef(({ index, className = "", ...props }, ref) => {
  const inputOTPContext = useContext(OTPInputContext);
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index];

  return (
    <div
      ref={ref}
      className={`otp-slot ${isActive ? "active" : ""} ${className}`}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="otp-caret-wrapper">
          <div className="otp-caret" />
        </div>
      )}
    </div>
  );
});
InputOTPSlot.displayName = "InputOTPSlot";

const InputOTPSeparator = forwardRef((props, ref) => (
  <div ref={ref} role="separator" {...props}>
    <Dot />
  </div>
));
InputOTPSeparator.displayName = "InputOTPSeparator";

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };
