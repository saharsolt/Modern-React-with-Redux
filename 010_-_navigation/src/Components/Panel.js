import classNames from "classnames";

function Panel({ children, className, ...rest }) {
  const finalClassName = classNames(
    "rounded p-3 shadow bg-white w-full border",
    className
  );

  return (
    <div {...rest} className={finalClassName}>
      {children}
    </div>
  );
}
export default Panel;
