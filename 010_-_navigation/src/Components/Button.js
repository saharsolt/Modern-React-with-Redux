import PropTypes from "prop-types";

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
  return <button>{children}</button>;
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
