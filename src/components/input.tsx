import React from "react";

interface InputFieldProps {
  label: string;
  id: string;
  name: string;
  type: string;
  placeholder?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function InputField({
  label,
  id,
  name,
  type,
  placeholder,
  value,
  onChange,
}: InputFieldProps) {
  return (
    <div className="mb-4">
      <label
        htmlFor={id}
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
  );
}

export default InputField;
