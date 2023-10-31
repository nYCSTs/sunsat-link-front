import React from 'react';

import './style.scss';

interface ButtonProps {
  text: string;
  color?: 'primary' | 'secondary';
  format?: 'standard' | 'circle';
  onClick?: () => void;
  type?: 'button' | 'reset' | 'submit';
}

const Button = ({ text, color = 'primary', format = 'standard', onClick, type = 'button' }: ButtonProps) => {
  const buttonColor = `button-${color}`;
  const buttonFormat = `button-${format}`;

  return (
    <button className={`${buttonColor} ${buttonFormat}`} onClick={onClick} type={type}>
      {text}
    </button>
  )
}

export default Button;