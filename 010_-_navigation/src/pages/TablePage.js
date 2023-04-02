import Table from "../components/Table";

function TablePage() {
  const fruits = [
    { name: "Orange", color: "bg-orange-500", score: 5 },
    { name: "Apple", color: "bg-red-800", score: 4 },
    { name: "Banana", color: "bg-yellow-200", score: 3 },
    { name: "Lime", color: "bg-green-300", score: 2 },
  ];
  return (
    <div>
      <Table data={fruits} />
    </div>
  );
}

export default TablePage;
