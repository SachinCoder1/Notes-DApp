import React from "react";
import Badge from "../badges/Badge";
import Btn from "./Btn";

export default function ConnectWallet({
  currentAccount,
  setCurrentAccount,
  correctNetwork,
  setCorrectNetwork,
  isWeb3Enabled,
  setisWeb3Enabled,
}) {
  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        console.log("Metamask not detected");
        setisWeb3Enabled(false);
        return;
      } else {
        setisWeb3Enabled(true);
      }
      let chainId = await ethereum.request({ method: "eth_chainId" });
      console.log("Connected to chain:" + chainId);

      const rinkebyChainId = "0x4";

      if (chainId !== rinkebyChainId) {
        alert("You are not connected to the Rinkeby Testnet!");
        setCorrectNetwork(false);
        return;
      } else {
        setCorrectNetwork(true);
      }

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      console.log("Found account", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log("Error connecting to metamask", error);
    }
  };

  return (
    <div className=" text-red-900">
      {currentAccount ? (
        <Badge text={`${currentAccount.slice(0, 7)}...${currentAccount.slice(currentAccount.length - 4)}`} />
      ) : (
        <Btn text="Connect Wallet" onClick={connectWallet} />
      )}
    </div>
  );
}
