import React from "react";
import Logo from "../assets/logo.png";
import MetaMask from "../assets/meta.png";
import plus from "../assets/add.png";

const Navbar = () => {
  const [active, setActive] = React.useState("All");
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const HandleActive = (actState) => {
    setActive(actState);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-black text-white flex justify-between items-center p-4 relative">
      {/* Logo and Title */}
      <div className="flex items-center">
        <img src={Logo} className="h-12" alt="Logo" />
        <div className="ml-3">
          <h1 className="font-black text-xl">Farmer</h1>
          <p className="font-extralight text-xs">sell by yourself</p>
        </div>
      </div>

      {/* Navbar Elements for Large Screens */}
      <div className="hidden lg:flex gap-5 items-center">
        <div
          href="#"
          className={active === "All" ? "bg-bg p-2 rounded-lg" : ""}
          onClick={() => HandleActive("All")}
        >
          All
        </div>
        <div
          href="#"
          className={active === "veg" ? "bg-bg p-2 rounded-lg" : ""}
          onClick={() => HandleActive("veg")}
        >
          vegetables
        </div>
        <div
          href="#"
          className={active === "fert" ? "bg-bg p-2 rounded-lg" : ""}
          onClick={() => HandleActive("fert")}
        >
          fertilizers
        </div>
        <div
          href="#"
          className={active === "other" ? "bg-bg p-2 rounded-lg" : ""}
          onClick={() => HandleActive("other")}
        >
          other
        </div>
      </div>

      {/* Buttons for Large Screens */}
      <div className="hidden lg:flex gap-5">
        <button className="buttonclass flex items-center gap-2 bg-bg p-3 text-xs rounded-lg font-bold">
          Connect <img src={MetaMask} className="h-5" alt="MetaMask" />
        </button>
        <button className="buttonclass flex items-center gap-2 bg-bg p-3 text-xs rounded-lg font-bold">
          Farmer <img src={plus} className="h-5" alt="Plus" />
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden">
        <button onClick={toggleMenu} className="text-white bg-transparent">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-16 text-center left-0 w-full bg-black text-white">
          <div className="flex flex-col items-center gap-5 p-4">
            <div
              href="#"
              className={active === "All" ? "hover:bg:bg" : ""}
              onClick={() => HandleActive("All")}
            >
              All
            </div>
            <div
              href="#"
              className={active === "veg" ? "hover:bg:bg" : ""}
              onClick={() => HandleActive("veg")}
            >
              vegetables
            </div>
            <div
              href="#"
              className={active === "fert" ? "hover:bg:bg" : ""}
              onClick={() => HandleActive("fert")}
            >
              fertilizers
            </div>
            <div
              href="#"
              className={active === "other" ? "hover:bg:bg" : ""}
              onClick={() => HandleActive("other")}
            >
              other
            </div>
            <div className="flex gap-5 mt-14">
              <button className="buttonclass flex items-center gap-2 bg-bg p-3 text-xs rounded-lg font-bold">
                Connect <img src={MetaMask} className="h-5" alt="MetaMask" />
              </button>
              <button className="buttonclass flex items-center gap-2 bg-bg p-3 text-xs rounded-lg font-bold">
                Farmer <img src={plus} className="h-5" alt="Plus" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
