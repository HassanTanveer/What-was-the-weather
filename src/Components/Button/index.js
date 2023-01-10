import React from 'react';

const Button = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`
        p-5 
        mx-1
        mb-2
        w-40
        focus:ring 
        bg-gray-300
        hover:bg-blue-300
        dark:bg-purple-900
        dark:hover:bg-purple-800
        active:bg-blue-400
        focus:ring-violet-300
        flex items-center shrink-0 justify-center
        rounded-xl shadow-lg space-x-4
        ${false ? 'dark:bg-black' : ''}
      `}
    >
      {text}
    </button>
  )
}

export default Button;
