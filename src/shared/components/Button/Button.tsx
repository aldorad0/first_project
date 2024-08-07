import { FC, MouseEventHandler, useMemo } from "react";
import './Button.scss';

interface ButtonProps {
  label: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  type?: 'primary' | 'secondary';
  isDisabled?: boolean;
}

export const Button: FC<ButtonProps> = ({ label, type = 'primary', isDisabled, onClick }) => {
  const buttonClasses = useMemo(() => {
    return `button-component button-component--${type}`;
  }, [type]);

  return <button onClick={onClick} className={buttonClasses} disabled={isDisabled}>{ label }</button>;
};
