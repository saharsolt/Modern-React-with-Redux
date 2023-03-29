import classNames from "classnames";
import useNavigation from "../hooks/use-navigations";

function Link({ to, children, className, activeClassName }) {
  const { navigate, currentPath } = useNavigation();

  const classes = classNames(
    "text-blue-500",
    className,
    currentPath === to && activeClassName
  );
  const handleClick = (event) => {
    // console.log(event);
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();
    navigate(to);
  };
  return (
    <a href="to" className={classes} onClick={handleClick}>
      {children}
    </a>
  );
}

export default Link;
