import Table from "../components/Table";

function TablePage() {
  const data = [
    { name: "Orange", color: "bg-orange-500", score: 5 },
    { name: "Apple", color: "bg-red-800", score: 2 },
    { name: "Banana", color: "bg-yellow-200", score: 3 },
    { name: "Lime", color: "bg-green-300", score: 1 },
  ];

  const config = [
    { label: "Fruits", render: (fruit) => fruit.name },
    {
      label: "Color",
      render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`}></div>,
    },
    {
      label: "Score",
      render: (fruit) => fruit.score,
      header: () => <th className="bg-red-300">Score</th>,
    },
  ];

  const keyFn = (fruit) => {
    return fruit.name;
  };
  return (
    <div>
      <Table data={data} config={config} keyFn={keyFn} />
    </div>
  );
}

export default TablePage;
