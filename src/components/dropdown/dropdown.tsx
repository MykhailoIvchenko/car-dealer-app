import { DropdownLabelType, DropdownValueType } from '@/utils/common.types';
import { useState } from 'react';

type DropdownItemType = {
  value: DropdownValueType;
  label: DropdownLabelType;
};

type DropdownType = {
  title: string;
  selectedItem: DropdownValueType | null;
  items: DropdownItemType[];
  handleOptionClick: (value: DropdownValueType) => void;
};

const Dropdown: React.FC<DropdownType> = ({
  title,
  selectedItem,
  items,
  handleOptionClick,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggle = () => setIsOpen(!isOpen);

  const getSelectedItemName = (): string | number => {
    const item = items.find((item) => item.value === selectedItem);

    return item?.label || '';
  };

  const handleSelectOption = (value: DropdownValueType) => {
    handleToggle();
    handleOptionClick(value);
  };

  return (
    <div className="relative inline-block w-full min-w-[250px]">
      <button
        type="button"
        className="w-full px-4 py-2 border border-gray-300 rounded bg-white text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        onClick={handleToggle}
      >
        {selectedItem !== null ? getSelectedItemName() : title}
        <svg
          className={`w-5 h-5 ml-2 inline-block transform ${
            isOpen ? 'rotate-180' : ''
          }`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-2 w-full min-w-[250px] max-h-60 overflow-y-auto bg-white border border-gray-300 rounded shadow-lg">
          <div className="py-1">
            {items.map((item) => (
              <button
                key={item.value}
                type="button"
                className={`w-full block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${
                  item.value === selectedItem ? 'bg-gray-200' : ''
                } text-left`}
                onClick={() => handleSelectOption(item.value)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
