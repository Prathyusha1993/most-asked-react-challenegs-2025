import React, { useState } from "react";
import "./dropdown.css";

function DropdownMenu({ options, onSelect, selectedOption }) {
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);

  const handleClickOption = (index) => {
    onSelect(options[index]);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(prev => !prev);
    setFocusedIndex(0);
  };

  const handleKeyDown = (e) => {
    if (!isOpen) return;
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setFocusedIndex((prev) => (prev + 1) % options.length);
        break;
      case "ArrowUp":
        e.preventDefault();
        setFocusedIndex((prev) => (prev - 1 + options.length) % options.length);
        break;
      case "Enter":
        e.preventDefault();
        if (focusedIndex >= 0) {
          onSelect(options[focusedIndex]);
          setIsOpen(false);
        }
        break;
      case "Escape":
        e.preventDefault();
        setIsOpen(false);
        break;
      default:
        break;
    }
  };

  return (
    <div className="dropdown">
      <h3>Dropdown Menu</h3>
      <button
        onClick={toggleDropdown}
        onKeyDown={handleKeyDown}
        aria-haspopup="true"
        aria-expanded={isOpen}
        className="dropdown-button"
      >
        {selectedOption ? selectedOption.label : "Select Option"}
      </button>
      {isOpen && (
        <ul className="dropdown-menu" role="menu">
          {options.map((option, index) => (
            <li
              key={index}
              role="menuitem"
              tabIndex={focusedIndex === index ? 0 : -1}
              onKeyDown={handleKeyDown}
              className={`dropdown-item ${
                index === focusedIndex ? "focused" : ""
              }`}
              onClick={() => handleClickOption(index)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DropdownMenu;
