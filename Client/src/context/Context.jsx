import React, { createContext, useContext, useEffect, useState } from "react";
import { ethers } from "ethers";
import Abi from "../Json/contract.json";
import CryptoJS from "crypto-js";

const ContraContext = createContext();

export const ContextProvider = ({ children }) => {
  const [isMetamaskInstalled, setIsMetamaskInstalled] = useState(true);
  const [pop, setPop] = useState(true);
  const [contract, setContract] = useState("");
  const [isConnected, setIsConnected] = useState(false);
  const [balance, setBalance] = useState("");
  const [account, setAccount] = useState("");
  const [decBal, setBalance_Dec] = useState("");
  const [decAcc, setAccount_Dec] = useState("");
  const contractAddress = "0xe83aaf495e3e764e748c8d863a920db068821fe5";
  const SECRET_KEY =
    "6b86d8ec0028179ad97a5fb46b13457731a7c8d0ff1c40e83b9d0df43250e233";

  useEffect(() => {
    if (!window.ethereum) {
      setIsMetamaskInstalled(false);
    }

    const iconTimer = setTimeout(() => {
      setPop(false);
    }, 10000);

    return () => clearTimeout(iconTimer);
  }, []);

  // Encrypt and Decrypt functions
  const Encrypt = (textToEncrypt) =>
    CryptoJS.AES.encrypt(textToEncrypt, SECRET_KEY).toString();
  const Decrypt = (textToDecrypt) =>
    CryptoJS.AES.decrypt(textToDecrypt, SECRET_KEY).toString(CryptoJS.enc.Utf8);

  // Store values in localStorage
  const storeValuesInLocalStorage = () => {
    if (isConnected) {
      window.localStorage.setItem("Connected", "true");
      window.localStorage.setItem("Account", Encrypt(account));
      window.localStorage.setItem("Balance", Encrypt(balance));
    }
  };

  // Retrieve values from localStorage
  const retrieveValuesFromLocalStorage = () => {
    const accountFromLocal = window.localStorage.getItem("Account");
    const balanceFromLocal = window.localStorage.getItem("Balance");

    if (accountFromLocal && balanceFromLocal) {
      const decAcc = Decrypt(accountFromLocal);
      const decBal = Decrypt(balanceFromLocal);

      setAccount_Dec(decAcc);
      setBalance_Dec(decBal);
    } else {
      setAccount_Dec("");
      setBalance_Dec("");
    }
  };

  useEffect(() => {
    retrieveValuesFromLocalStorage();
  }, []);

  // Connect function
  const Connect = async () => {
    try {
      const isMobile = /iPhone|iPad|ipod|Android/i.test(navigator.userAgent);
      if (isMobile) {
        try {
          window.location.href = "metamask://";
          setTimeout(() => {
            window.location.href = "https://metamask.io/download.html";
          }, 3000);
        } catch (err) {
          console.log("Error in opening MetaMask", err);
        }
      } else {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const accountUser = await signer.getAddress();
        const balanceOfUser = await provider.getBalance(accountUser);
        const toEth = ethers.formatEther(balanceOfUser);
        const contract = new ethers.Contract(contractAddress, Abi.abi, signer);

        setContract(contract);
        setIsConnected(true);
        setAccount(accountUser);
        setBalance(toEth);

        // Store values in localStorage
        storeValuesInLocalStorage();
      }
    } catch (err) {
      console.error("Error connecting to MetaMask", err);
    }
  };

  const values = { Connect, isConnected, decAcc, decBal };

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
            MetaMask not installed
            <span className="ml-2">🦊</span>
          </h1>
        </div>
      )}
      {children}
    </ContraContext.Provider>
  );
};

export const UseContractProvider = () => {
  const context = useContext(ContraContext);
  if (!context) {
    throw new Error("Context not found");
  }
  return context;
};
