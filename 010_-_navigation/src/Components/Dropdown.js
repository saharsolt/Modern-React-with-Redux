import { useState } from "react";

function Dropdown({ options, selection, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    //Close dropdown
    setIsOpen(false);
    //Show the selected option
    onSelect(option);
  };
  const renderdOptions = options.map((option) => {
    return (
      <div onClick={() => handleOptionClick(option)} key={option.value}>
        {option.label}
      </div>
    );
  });

  // let content = "Select...";
  // if (selection) {
  //   content = selection.label;
  // }
  return (
    <div>
      <div onClick={handleClick}>{selection?.label || "Select..."}</div>
      <div>{isOpen && renderdOptions}</div>
    </div>
  );
}

export default Dropdown;
