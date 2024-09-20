import clsx from "clsx";
import Marker from "./Marker";
import PropTypes from "prop-types";

const Button = ({
  icon,
  children,
  href,
  containerClassName,
  onClick,
  markerFill,
}) => {
  const Inner = () => (
    <>
      <span className="relative flex items-center min-h-[60px] px-4 g4 rounded-2xl inner-before group-hover:before:opacity-100 overflow-hidden">
        <span className="absolute -left-[1px]">
          <Marker markerFill={markerFill} />
        </span>
        {icon && (
          <img
            src={icon}
            alt="circle"
            className="size-10 mr-5 object-contain z-10"
          />
        )}

        <span className="relative z-2 font-poppins base-bold text-p1 uppercase">
          {children}
        </span>
      </span>

      <span className="glow-before" />
    </>
  );

  return href ? (
    <a
      className={clsx(
        "relative p-0.5 g5 rounded-2xl shadow-500 group",
        containerClassName
      )}
      href={href}
    >
      <Inner />
    </a>
  ) : (
    <button
      className={clsx(
        "relative p-0.5 g5 rounded-2xl shadow-500 group",
        containerClassName
      )}
      onClick={onClick}
    >
      <Inner />
    </button>
  );
};

export default Button;

Button.propTypes = {
  icon: PropTypes.string, // Optional string for the icon
  children: PropTypes.node.isRequired, // Required node for the button's label
  href: PropTypes.string, // Optional string for the href attribute
  containerClassName: PropTypes.string, // Optional string for the container's class name
  onClick: PropTypes.func, // Optional function for the onClick handler
  markerFill: PropTypes.string, // Optional string for the marker's fill
};
