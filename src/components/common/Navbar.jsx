import { Link, NavLink } from "react-router-dom";
// import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import logo from "../../assets/logo.png";

const links = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About Us" },
  { path: "/products", label: "Products" },
  { path: "/technology", label: "Technology" },
  { path: "/globalPresence", label: "Global Presence" },
];

const Navbar = () => {
  return (
    <header className="w-full px-20 py-2 fixed z-[40] bg-white shadow-sm">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link to="/" exact className="text-xl font-bold">
          <img src={logo} alt="MJH Pharma logo" width={85} />
        </Link>
        <nav className="stroke">
          <ul className="flex space-x-4 md:space-x-8 ">
            {" "}
            {links.map((link) => (
              <li key={link.path} className="inline-block">
                <NavLink
                  to={link.path}
                  exact
                  className={`navLink block uppercase ${({ isActive }) =>
                    isActive
                      ? "text-red-950 hover:text-red-800"
                      : "text-green-950 hover:text-green-800"}`}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        {/* <PrimaryButton to="/contact">Contact</PrimaryButton> */}
        <SecondaryButton to="/">Contact</SecondaryButton>
      </div>
    </header>
  );
};

export default Navbar;
