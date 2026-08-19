import React, { forwardRef, useId } from "react";
import styles from "./Input.module.css";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helpText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { className = "", label, error, helpText, leftIcon, rightIcon, id, ...props },
    ref
  ) => {
    const generatedId = useId();
    const inputId = id || generatedId;
    const errorId = `${inputId}-error`;
    const helpId = `${inputId}-help`;

    const ariaDescribedBy = [
      error ? errorId : null,
      helpText ? helpId : null,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <div className={`${styles.wrapper} ${className}`}>
        {label && (
          <label htmlFor={inputId} className={styles.label}>
            {label}
          </label>
        )}
        <div className={styles.inputContainer}>
          {leftIcon && <span className={styles.leftIcon}>{leftIcon}</span>}
          <input
            ref={ref}
            id={inputId}
            className={`
              ${styles.input} 
              ${leftIcon ? styles.hasLeftIcon : ""} 
              ${rightIcon ? styles.hasRightIcon : ""}
              ${error ? styles.hasError : ""}
            `}
            aria-invalid={!!error}
            aria-describedby={ariaDescribedBy || undefined}
            {...props}
          />
          {rightIcon && <span className={styles.rightIcon}>{rightIcon}</span>}
        </div>
        {error && (
          <p id={errorId} className={styles.errorText} role="alert">
            {error}
          </p>
        )}
        {helpText && !error && (
          <p id={helpId} className={styles.helpText}>
            {helpText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
