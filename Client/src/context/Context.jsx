import React, { createContext, useContext, useEffect, useState } from "react";
import { ethers } from "ethers";
import Abi from "../../../backend/artifacts/contracts/Farmer.sol/Farmer.json";

const ContraContext = createContext();

const ContextProvider = ({ children }) => {
  const [isMetamaskInstalled, setIsMetamaskInstalled] = useState(true);
  const [Cross, setCross] = useState(true);
  const [pop, setPop] = useState(true);
  const [contract, setContract] = useState("");
  const contractAddress = "0xe83aaf495e3e764e748c8d863a920db068821fe5";

  useEffect(() => {
    if (!window.ethereum) {
      setIsMetamaskInstalled(!isMetamaskInstalled);
    }
    const iconTimer = setTimeout(() => {
      setCross(!Cross);
    }, 5000);

    return () => clearTimeout(iconTimer);
  }, []); //handles the connect part

  const HandleCross = () => {
    setPop(!pop);
  };

  const Connect = async () => {
    try {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(contractAddress, Abi.abi, signer);
      setContract(contract);
    } catch (err) {
      console.error(err);
    }
    console.log(contract);
  };

  const values = { Connect };

  return (
    <ContraContext.Provider value={values}>
      {!isMetamaskInstalled && (
        <div
          className={
            pop
              ? "flex justify-end rounded-lg absolute z-50 mt-24 m-4 bg-bg p-4 capitalize text-white font-bold cursor-pointer"
              : "hidden"
          }
        >
          <h1 className="flex items-center">
            metamask not installed
            {Cross ? (
              <span className="ml-2">🦊</span>
            ) : (
              <svg
                className="w-6 h-6 ml-2"
                fill="none"
                stroke="red"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                onClick={HandleCross}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            )}
          </h1>
        </div>
      )}
      {children}
    </ContraContext.Provider>
  );
};

export { ContextProvider };

export const UseContractProvider = () => {
  const context = useContext(ContraContext);
  if (!context) {
    throw new Error("error in context");
  }
  return context;
};
