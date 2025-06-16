import React, {useState} from "react";
import './dropdown.css';

function DropdownMenu({ options, onSelect, selectedOption }) {
  const [isOpen, setIsOpen] = useState(false);
  const [focusIndex, setFocusIndex] = useState(-1);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setFocusIndex(0);
  };

  const handleKeyDown = (e) => {
    if (!isOpen) return;
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setFocusIndex((prev) => (prev + 1) % options.length);
        break;
      case "ArrowUp":
        e.preventDefault();
        setFocusIndex((prev) => (prev - 1 + options.length) % options.length);
        break;
      case "Enter":
        e.preventDefault();
        if (focusIndex >= 0) {
          onSelect(options[focusIndex]);
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

  const handleClickOption = (index) => {
    onSelect(options[index]);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <h3>Dropdown Example</h3>
      <button
        onClick={toggleDropdown}
        onKeyDown={handleKeyDown}
        aria-haspopup="true"
        aria-expanded={isOpen}
        className="dropdown-button"
      >
        {selectedOption ? selectedOption.label : 'Select Option'}
      </button>
      {isOpen && (
        <ul className="dropdown-menu" role='menu'>
            {options.map((option, index) => (
                <li 
                key={option.id}
                role='menuitem'
                tabIndex={focusIndex === index ? 0 : -1}
                onKeyDown={handleKeyDown}
                onClick={() => handleClickOption(index)}
                className={`dropdown-item ${index === focusIndex ? 'focused' : ''}`}
                style={{backgroundColor: index === focusIndex ? '##f0f0f0' : 'white', padding: '8px 12px', cursor:'pointer'}}>{option.label}</li>
            ))}
        </ul>
      )}
    </div>
  );
}

export default DropdownMenu;
