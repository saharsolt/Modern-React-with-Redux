import Table from "./Table";
import { useState } from "react";

function SortableTable(props) {
  const { config, data } = props;
  const [sortOrder, setSortOrder] = useState(null); //null,'asc','desc'
  const [sortBy, setSortBy] = useState(null); //null, name, score
  const handleClick = (label) => {
    // console.log(label);
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
        <th onClick={() => handleClick(column.label)}>
          {column.label} is sortable
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
  return (
    <div>
      {" "}
      {sortOrder} - {sortBy}
      <Table {...props} config={updatedConfig} data={sortedData} />
    </div>
  );
}

export default SortableTable;
