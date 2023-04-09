import classNames from "classnames";

function Skeleton({ times, className }) {
  const outerClassNames = classNames(
    "relative",
    "bg-gray-200",
    "overflow-hidden",
    "rounded",
    "mb-2.5",
    className
  );
  const innerClassNames = classNames(
    "absolute",
    "animate-shimmer",
    "inset-0",
    "-translate-x-full",
    "bg-gradient-to-r",
    "from-gray-200",
    "via-white",
    "to-gray-200"
  );

  const boxes = Array(times)
    .fill(0)
    .map((_, i) => {
      return (
        <div key={i} className={outerClassNames}>
          <div className={innerClassNames} />
        </div>
      );
    });
  return boxes;
}

export default Skeleton;
