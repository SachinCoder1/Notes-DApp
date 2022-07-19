import React from "react";
import Particles from "react-tsparticles";
import tsConfig from "../config/tsParticlesConfig.json";
import { loadFull } from "tsparticles";
export default function TSParticles() {
  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };
  return <Particles init={particlesInit} options={tsConfig} />;
}
