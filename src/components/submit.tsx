import React from "react";

interface SubmitButtonProps {
  disabled?: boolean;
  children: React.ReactNode;
}

function SubmitButton({ disabled, children }: SubmitButtonProps) {
  return (
    <button
      type="submit"
      disabled={disabled} // Use the disabled prop here
      className="px-5 py-2.5 mb-4 relative rounded group font-medium text-white font-medium inline-block"
    >
      <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
      <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
      <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
      <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
      <span className="relative">{children}</span> 
    </button>
  );
}

export default SubmitButton;
