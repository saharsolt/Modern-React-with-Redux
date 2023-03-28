import React from "react";
import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: 1,
      label: "can I use React for my project?",
      content:
        " You can use react for any project. You can use react for any project. You can use react for any project. You can use react for any project.",
    },
    {
      id: 2,
      label: "can I use JavaScript for my project?",
      content:
        " You can use react for any project. You can use react for any project. You can use react for any project. You can use react for any project.",
    },
    {
      id: 3,
      label: "can I use CSS for my project?",
      content:
        " You can use react for any project. You can use react for any project. You can use react for any project. You can use react for any project.",
    },
  ];
  return <Accordion items={items} />;
}

export default AccordionPage;
