import React from 'react'

interface TextInputProps {
  title: string;
  placeholder?: string;
  onChange: (value: string) => void;
  isError?: boolean;
};

const TextInput = ({ title, placeholder, onChange, isError }: TextInputProps) => {
  return (
    <input
      type="text"
      className={`review-title ${isError ? 'error' : ''}`}
      placeholder={placeholder}
      value={title}
      onChange={(e) => { onChange(e.target.value); }}
    />
  )
}

export default TextInput