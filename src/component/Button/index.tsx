import React from 'react';

import './style.scss';

interface ButtonProps {
  text: string;
  color?: 'primary' | 'secondary';
  format?: 'standard' | 'circle';
  onClick?: () => void;
}

const Button = ({ text, color = 'primary', format = 'standard', onClick }: ButtonProps) => {
  const buttonColor = `button-${color}`;
  const buttonFormat = `button-${format}`;

  return (
    <button className={`${buttonColor} ${buttonFormat}`} onClick={onClick}>
      {text}
    </button>
  )
}

export default Button;