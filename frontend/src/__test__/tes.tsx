import React, { useState } from "react";

interface DropdownMenuProps {
  title: string;
  items: string[];
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="w-full text-left bg-gray-800 text-white p-2 rounded-md focus:outline-none"
      >
        {title}
      </button>
      {isOpen && (
        <ul className="absolute left-0 mt-2 bg-gray-800 text-white w-full rounded-md shadow-lg">
          {items.map((item, index) => (
            <li key={index} className="p-2 hover:bg-gray-700 cursor-pointer">
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
