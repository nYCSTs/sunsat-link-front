import React, { HTMLInputTypeAttribute } from 'react';

import './style.scss';

interface TextInputProps {
  label?: string;
  value: string;
  name: string;
  placeholder: string;
  type: HTMLInputTypeAttribute;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput: React.FC<TextInputProps> = ({ label, value = "", name, placeholder = "", onChange, type = "text" }) => {
  return (
    <div>
      {label && <label>{label}</label>}
      <input
        value={value}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  )
};

export default TextInput;