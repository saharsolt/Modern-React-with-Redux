import Table from "./Table";
import useSort from "../hooks/use-Sort";
import { BsChevronDoubleDown, BsChevronDoubleUp } from "react-icons/bs";

function SortableTable(props) {
  const { config, data } = props;
  const { sortBy, sortOrder, sortColumn, sortedData } = useSort(data, config);

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }

    return {
      ...column,
      header: () => (
        <th
          className="cursor-pointer hover:bg-gray-100"
          onClick={() => sortColumn(column.label)}
        >
          <div className="flex items-center">
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
      ),
    };
  });

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
