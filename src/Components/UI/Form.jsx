import React, { createContext, useContext, useId, forwardRef } from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { Slot } from "@radix-ui/react-slot";
import { Controller, FormProvider, useFormContext } from "react-hook-form";
import "./Form.css";

// Root form context from React Hook Form
const Form = FormProvider;

// Context to pass field name
const FormFieldContext = createContext({});
const FormItemContext = createContext({});

const FormField = (props) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
};

// Hook for field state
const useFormField = () => {
  const fieldContext = useContext(FormFieldContext);
  const itemContext = useContext(FormItemContext);
  const { getFieldState, formState } = useFormContext();

  if (!fieldContext || !fieldContext.name) {
    throw new Error("useFormField must be used within <FormField>");
  }

  const fieldState = getFieldState(fieldContext.name, formState);
  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
};

// Wrapper for form item (grouping label, input, description, etc.)
const FormItem = forwardRef(({ className = "", ...props }, ref) => {
  const id = useId();

  return (
    <FormItemContext.Provider value={{ id }}>
      <div ref={ref} className={`form-item ${className}`} {...props} />
    </FormItemContext.Provider>
  );
});
FormItem.displayName = "FormItem";

// Label component
const FormLabel = forwardRef(({ className = "", ...props }, ref) => {
  const { error, formItemId } = useFormField();

  return (
    <LabelPrimitive.Root
      ref={ref}
      htmlFor={formItemId}
      className={`form-label ${error ? "form-label-error" : ""} ${className}`}
      {...props}
    />
  );
});
FormLabel.displayName = "FormLabel";

// Control (input, select, etc.)
const FormControl = forwardRef(({ ...props }, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId } =
    useFormField();

  return (
    <Slot
      ref={ref}
      id={formItemId}
      aria-describedby={
        !error ? formDescriptionId : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props}
    />
  );
});
FormControl.displayName = "FormControl";

// Description text under form field
const FormDescription = forwardRef(({ className = "", ...props }, ref) => {
  const { formDescriptionId } = useFormField();

  return (
    <p
      ref={ref}
      id={formDescriptionId}
      className={`form-description ${className}`}
      {...props}
    />
  );
});
FormDescription.displayName = "FormDescription";

// Error message
const FormMessage = forwardRef(
  ({ className = "", children, ...props }, ref) => {
    const { error, formMessageId } = useFormField();
    const body = error ? String(error?.message) : children;

    if (!body) return null;

    return (
      <p
        ref={ref}
        id={formMessageId}
        className={`form-message ${className}`}
        {...props}
      >
        {body}
      </p>
    );
  }
);
FormMessage.displayName = "FormMessage";

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
};
