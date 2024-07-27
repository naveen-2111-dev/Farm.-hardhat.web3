import React from "react";
import Logo from "../assets/logo.png";
import MetaMask from "../assets/meta.png";
import plus from "../assets/add.png";

const Navbar = () => {
  const [active, setActive] = React.useState("All");

  const HandleActive = (actState) => {
    setActive(actState);
  };

  return (
    <div className="bg-black text-white flex justify-between items-center">
      <div>
        <div className="flex items-center p-2">
          <img src={Logo} className="h-12"></img>
          <div className="m-3">
            <h1 className="font-black text-xl">Farmer</h1>
            <p className="font-extralight text-xs">sell by yourself</p>
          </div>
        </div>
      </div>
      <div className="w-fit p-3 cursor-pointer">
        {/* navbar elements */}
        <div className="flex gap-5 items-center">
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
      </div>
      {/* buttons */}
      <div className="w-fit m-3">
        <div className="flex gap-5">
          <button className="buttonclass flex items-center gap-2 bg-bg p-3 text-xs rounded-lg font-bold">
            Connect <img src={MetaMask} className="h-5" />
          </button>
          <button className="buttonclass flex items-center gap-2 bg-bg p-3 text-xs rounded-lg font-bold">
            Farmer <img src={plus} className="h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
