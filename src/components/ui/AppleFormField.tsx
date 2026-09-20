"use client";

/**
 * Apple-style form field with immediate visual feedback
 *
 * Design principles:
 * 1. Response: Border color and shadow change on focus (pointer-down equivalent)
 * 2. Material: Translucent background with subtle shadow when active
 * 3. Feedback: Clear error states with inline validation
 */

import React, { forwardRef } from "react";

interface AppleFormFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const AppleFormField = forwardRef<HTMLInputElement, AppleFormFieldProps>(
  (
    {
      className = "",
      label,
      error,
      helperText,
      type = "text",
      ...props
    },
    ref
  ) => {
    const hasError = !!error;

    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-semibold text-charcoal mb-2">
            {label}
            {props.required && (
              <span className="text-cognac ml-1" aria-label="required">
                *
              </span>
            )}
          </label>
        )}

        <div className="relative">
          <input
            ref={ref}
            type={type}
            className={[
              "w-full rounded-lg border border-stone-200 bg-stone-50/50 px-4 py-3",
              "text-base text-charcoal placeholder:text-stone-400",
              "transition-[border-color,background-color,box-shadow] duration-150",
              "focus:outline-none focus:border-cognac focus:bg-white focus:shadow-md focus:ring-0",
              hasError ? "border-red-300 focus:border-red-500 focus:shadow-red-100" : "",
              "disabled:bg-stone-100 disabled:text-stone-500 disabled:cursor-not-allowed disabled:opacity-60",
              className,
            ]
              .filter(Boolean)
              .join(" ")}
            aria-invalid={hasError}
            aria-describedby={error ? `error-${label}` : helperText ? `helper-${label}` : undefined}
            {...props}
          />
        </div>

        {/* Error message */}
        {error && (
          <p
            id={`error-${label}`}
            className="mt-2 text-sm font-medium text-red-600"
            role="alert"
          >
            {error}
          </p>
        )}

        {/* Helper text */}
        {helperText && !error && (
          <p id={`helper-${label}`} className="mt-2 text-sm text-stone-600">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

AppleFormField.displayName = "AppleFormField";
