import React from "react";

interface TextAreaFieldProps {
  label: string;
  id: string;
  name: string;
  rows: number;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

function TextAreaField({
  label,
  id,
  name,
  rows,
  placeholder,
  value,
  onChange,
}: TextAreaFieldProps) {
  return (
    <div className="mb-10">
      <label
        htmlFor={id}
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        {label}
      </label>
      <textarea
        id={id}
        name={name}
        rows={rows}
        value={value}
        onChange={onChange}
        required
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-y"
        placeholder={placeholder}
      ></textarea>
    </div>
  );
}

export default TextAreaField;
