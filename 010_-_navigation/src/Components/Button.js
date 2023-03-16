import className from "classnames";

// let finalClassName = className("px-3", {
//   "bg-sky-400": true,
// });
// console.log(finalClassName);

function Button({
  children,
  primary,
  secondary,
  danger,
  warning,
  success,
  rounded,
  outline,
}) {
  let classes = className("px-3 py-1.5 border text-white", {
    "bg-blue-500 border-blue-500": primary,
    "bg-gray-800 border-gray-800": secondary,
    "bg-red-500 border-red-500": danger,
    "bg-yellow-400 border-yellow-400": warning,
    "bg-green-500 border-green-500": success,
    "rounded-full": rounded,
    "bg-white": outline,
    "text-blue-500": outline && primary,
    "text-red-500": outline && danger,
    "text-green-500": outline && success,
    "text-yellow-400": outline && warning,
    "text-gray-800": outline && secondary,
  });
  return <button className={classes}>{children}</button>;
}

Button.propTypes = {
  checkValidationProps: ({ primary, secondary, success, danger, warning }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!danger) +
      Number(!!warning);
    if (count > 1) {
      return new Error(
        "Only one of these, primary, success, secondary, danger, warning, can be true!"
      );
    }
  },
};
export default Button;
