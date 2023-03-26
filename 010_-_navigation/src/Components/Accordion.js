import { useState } from "react";
import { AiFillCaretDown, AiFillCaretLeft } from "react-icons/ai";

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleClick = (nextIndex) => {
    setExpandedIndex((currentExpandedIndex) => {
      if (currentExpandedIndex === nextIndex) {
        return -1;
      } else {
        return nextIndex;
      }
    });
  };
  //   if (nextIndex === expandedIndex) {
  //     setExpandedIndex(-1);
  //   } else {
  //     setExpandedIndex(nextIndex);
  //   }
  // };

  const renderdItem = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    const icon = (
      <span className="text-2xl">
        {isExpanded ? <AiFillCaretDown /> : <AiFillCaretLeft />}
      </span>
    );

    // const content = isExpanded && <div>{item.content}</div>;
    return (
      <div key={item.id}>
        <div
          className="flex justify-between bg-gray-50 p-3 border-b items-center cursor-pointer"
          onClick={() => handleClick(index)}
        >
          {item.label}
          {icon}
        </div>
        <div>
          {isExpanded && <div className="border-b p-5">{item.content}</div>}
        </div>
      </div>
    );
  });
  return <div className="border-x border-t rounded"> {renderdItem}</div>;
}

export default Accordion;
