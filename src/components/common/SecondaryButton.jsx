import { Link } from "react-router-dom";

const SecondaryButton = ({ to, children, className }) => {
  return (
    <button className="secondaryButton text-gray-950 relative leading-7 z-10 hover:text-gray-50 overflow-hidden rounded-full border border-gray-700 py-2 px-6  bg-transparent after:bg-gradient-to-r from-gray-950 to-gray-900 hover:shadow-md">
      <Link to={`${to}`} className={` ${className}`}>
        {children}
      </Link>
    </button>
  );
};

export default SecondaryButton;
