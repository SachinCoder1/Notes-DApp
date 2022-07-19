import React from "react";
import ConnectWallet from "./subcomponents/btns/ConnectWallet";
import Logo from "./subcomponents/logo/Logo";

export default function Navbar({
  currentAccount,
  setCurrentAccount,
  correctNetwork,
  setCorrectNetwork,
  isWeb3Enabled,
  setisWeb3Enabled
}) {
  return (
    <div className="flex justify-between items-center py-5 px-5 border-b-2 border-b-slate-300">
      <Logo />
      <ConnectWallet
        currentAccount={currentAccount}
        setCurrentAccount={setCurrentAccount}
        correctNetwork={correctNetwork}
        setCorrectNetwork={setCorrectNetwork}
        isWeb3Enabled={isWeb3Enabled}
        setisWeb3Enabled={setisWeb3Enabled}
      />
    </div>
  );
}
