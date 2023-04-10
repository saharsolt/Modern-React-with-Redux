import { useState } from "react";
import { AiFillCaretLeft, AiFillCaretDown } from "react-icons/ai";
function ExpandablePanel({ header, children }) {
  const [expandable, setExpandable] = useState(false);

  const handleClick = () => {
    setExpandable(!expandable);
  };
  return (
    <div className="mb-2 border rounded">
      <div className="flex items-center p-2  justify-between">
        <div className="flex flex-row items-center justify-between">
          {header}
        </div>
        <div onClick={handleClick} className="cursor-pointer">
          {expandable ? <AiFillCaretDown /> : <AiFillCaretLeft />}
        </div>
      </div>
      {expandable && <div className="border-t p-2">{children}</div>}
    </div>
  );
}

export default ExpandablePanel;
