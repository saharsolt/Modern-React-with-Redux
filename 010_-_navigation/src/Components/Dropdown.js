import { useState, useEffect, useRef } from "react";
import { BiChevronDown } from "react-icons/bi";
import Panel from "./Panel";

function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();
  useEffect(() => {
    const handler = (event) => {
      // console.log(divEl.current);
      if (!divEl.current) {
        return;
      }

      if (!divEl.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handler, true);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    //Close dropdown
    setIsOpen(false);
    //Show the selected option
    onChange(option);
  };
  const renderdOptions = options.map((option) => {
    return (
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  // let content = "Select...";
  // if (selection) {
  //   content = selection.label;
  // }
  return (
    <div ref={divEl} className="w-48 relative">
      <Panel
        className="flex justify-between items-center cursor-pointer"
        onClick={handleClick}
      >
        {value?.label || "Select..."}
        <BiChevronDown className="text-lg" />
      </Panel>
      {isOpen && <Panel className="absolute top-full">{renderdOptions}</Panel>}
    </div>
  );
}

export default Dropdown;
