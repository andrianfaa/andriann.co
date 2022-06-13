/* global JSX */
/* eslint-disable react/button-has-type */
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  title?: string;
}

const baseStyle = "py-4 px-6";

const Button = {
  /**
   * Button base component.
   *
   * @description This is the default button.
   * @param {ButtonProps} props
   * @returns {JSX.Element}
   */
  Base: ({
    children,
    className,
    onClick,
    disabled,
    type,
    title,
  }: ButtonProps): JSX.Element => (
    <button
      className={`${baseStyle} ${className || "button-base"} `}
      onClick={onClick}
      disabled={disabled}
      type={type || "button"}
      title={title}
      aria-label={title}
    >
      {children}
    </button>
  ),

  /**
   * Button primary component.
   *
   * @description This is the default button.
   * @param {ButtonProps} props
   * @returns {JSX.Element}
   */
  Primary: ({
    children,
    className,
    onClick,
    disabled,
    type,
    title,
  }: ButtonProps): JSX.Element => (
    <button
      className={`button-primary ${className || baseStyle}`}
      onClick={onClick}
      disabled={disabled}
      type={type || "button"}
      title={title}
      aria-label={title}
    >
      {children}
    </button>
  ),
};

export default Button;
