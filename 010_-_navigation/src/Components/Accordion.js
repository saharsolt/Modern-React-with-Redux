function Accordion({ items }) {
  const renderdItem = items.map((item) => {
    return (
      <div key={item.id}>
        <div>{item.label}</div>
        <div>{item.content}</div>
      </div>
    );
  });
  return <div> {renderdItem}</div>;
}

export default Accordion;
