import Table from "./Table";
import { useState } from "react";
import { BsChevronDoubleDown, BsChevronDoubleUp } from "react-icons/bs";
function SortableTable(props) {
  const { config, data } = props;
  const [sortOrder, setSortOrder] = useState(null); //null,'asc','desc'
  const [sortBy, setSortBy] = useState(null); //null, name, score

  const handleClick = (label) => {
    // console.log(label);
    if (sortBy && label !== sortBy) {
      setSortOrder("asc");
      setSortBy(label);
      return;
    }

    if (sortOrder === null) {
      setSortOrder("asc");
      setSortBy(label);
    } else if (sortOrder === "asc") {
      setSortOrder("desc");
      setSortBy(label);
    } else if (sortOrder === "desc") {
      setSortOrder(null);
      setSortBy(null);
    }
  };
  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }

    return {
      ...column,
      header: () => (
        <th
          className="cursor-pointer hover:bg-gray-100"
          onClick={() => handleClick(column.label)}
        >
          <div className="flex items-center">
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
      ),
    };
  });

  // Only sort data if sortOrder and sortBy are not null
  // Make a copy of 'data' prop (We must work on copies of props and states)
  // Find the correct sortValue function and use it for sorting
  let sortedData = data;
  if (sortOrder && sortBy) {
    const { sortValue } = config.find((column) => column.label === sortBy);
    sortedData = [...data].sort((a, b) => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);

      const reveresOrder = sortOrder === "asc" ? 1 : -1;

      if (typeof valueA === "string") {
        return valueA.localeCompare(valueB) * reveresOrder;
      } else {
        return (valueA - valueB) * reveresOrder;
      }
    });
  }
  return <Table {...props} config={updatedConfig} data={sortedData} />;
}

function getIcons(label, sortBy, sortOrder) {
  if (label !== sortBy) {
    return (
      <div>
        <BsChevronDoubleUp />
        <BsChevronDoubleDown />
      </div>
    );
  }
  if (sortOrder === null) {
    return (
      <div>
        <BsChevronDoubleUp />
        <BsChevronDoubleDown />
      </div>
    );
  } else if (sortOrder === "asc") {
    return (
      <div>
        <BsChevronDoubleUp />
      </div>
    );
  } else if (sortOrder === "desc") {
    return (
      <div>
        <BsChevronDoubleDown />
      </div>
    );
  }
}
export default SortableTable;
