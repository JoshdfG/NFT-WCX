import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const LockModule = buildModule("LockModule", (m) => {
  const lock = m.contract("MetaNFT");

  return { lock };
});

export default LockModule;
