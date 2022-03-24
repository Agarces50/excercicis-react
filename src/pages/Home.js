import { useState } from "react";
import ReactPlayer from "react-player";

export default function Home() {
  return (
    <>
      <h1 className="home">Bienvenido! </h1>
      <p> Click en los ejercicios para poder ver su desarrollo.</p>

      <div className="cabeceravideo">
        <ReactPlayer
          url={process.env.PUBLIC_URL + "/videos/mundo.mp4"}
          loop
          playing
          muted
          controls
          width={"1300px"}
          height={"800px"}
        />
      </div>
    </>
  );
}
