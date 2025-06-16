import React, { useState } from 'react'
import DropdownMenu from './DropdownMenu'

function AppDropdown() {
    const [selectedOption, setSelectedOption] = useState(null);
    const options = [
        { id: 1, label: "Option 1" },
        { id: 2, label: "Option 2" },
        { id: 3, label: "Option 3" },
        { id: 4, label: "Option 4" },
        { id: 5, label: "Option 5" }
    ];

    const onSelect = (option) => {
        setSelectedOption(option);
        console.log("Selected option:", option);
    }
  return (
    <div>
        <DropdownMenu options={options} onSelect={onSelect} selectedOption={selectedOption} />
        {selectedOption && <p>You have selected {selectedOption.label} </p>}
    </div>
  )
}

export default AppDropdown