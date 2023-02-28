import React from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import Animation from "../Animation/coding.json";

const Anime = () => {
  return (
    <>
      <Player
        autoplay
        loop
        src={Animation}
        style={{ height: "550px", width: "400px" }}
      >
        <Controls
          visible={false}
          buttons={["play", "repeat", "frame", "debug"]}
        />
      </Player>
    </>
  );
};

export default Anime;

export const Hi = () => {
  return (
    <>
      <Player
        autoplay
        loop
        src="https://assets9.lottiefiles.com/packages/lf20_vWhFpWi9X5.json"
        style={{ height: "50px", width: "50px" }}
      >
        <Controls
          visible={false}
          buttons={["play", "repeat", "frame", "debug"]}
        />
      </Player>
    </>
  );
};
