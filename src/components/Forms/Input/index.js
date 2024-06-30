import { classNames } from "@/util";
import React from "react";
const Input = React.forwardRef(
  (
    {
      name,
      label,
      type,
      placeholder,
      helperText,
      error,
      className,
      ...restProps
    },
    ref
  ) => {
    const inputStyles = !!error
      ? "ring-red-300 placeholder:text-red-500 focus:ring-red-500"
      : "ring-gray-300 placeholder:text-gray-400 focus:ring-primary-500";
    return (
      <div className={classNames(className)}>
        {label && (
          <label
            htmlFor={name}
            className="block text-sm font-bold leading-6 text-gray-900">
            {label}
          </label>
        )}

        <div className="mt-2">
          {type === "textarea" ? (
            <textarea
              ref={ref}
              type={type}
              name={name}
              className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 px-2.5 outline-0 ${inputStyles}`}
              placeholder={placeholder}
              aria-invalid={!!error}
              aria-describedby={
                error ? `${label}-error` : `${label}-description`
              }
              {...restProps}
            />
          ) : (
            <input
              ref={ref}
              type={type}
              name={name}
              className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 px-2.5 outline-0 ${inputStyles}`}
              placeholder={placeholder}
              aria-invalid={!!error}
              aria-describedby={
                error ? `${label}-error` : `${label}-description`
              }
              {...restProps}
            />
          )}
        </div>
        {helperText && !error && (
          <p className="mt-2 text-sm text-gray-500" id={`${label}-description`}>
            {helperText}
          </p>
        )}
        {error && (
          <p className="mt-2 text-sm text-red-600" id={`${label}-error`}>
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
