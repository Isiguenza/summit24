// src/CustomButton.tsx
import React from 'react';

interface CustomButtonProps {
  href: string;
  text: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ href, text }) => {
  return (
    <a
      href={href}
      className="flex items-center justify-center bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
      style={{
        fontFamily: 'var(--brand-body-fontFamily)',
        fontWeight: 'var(--brand-text-weight-200)',
        fontSize: 'var(--brand-text-size-200)',
        lineHeight: 'var(--brand-text-lineHeight-200)',
        letterSpacing: 'var(--brand-text-letterSpacing-200)',
      }}
    >
      <span className="mr-2">{text}</span>
      <svg
        className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 16 16"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"
        />
        <path
          stroke="currentColor"
          d="M1.75 8H11"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </a>
  );
};

export default CustomButton;
