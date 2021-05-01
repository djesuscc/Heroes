import React from "react";
import { HeroList } from "../heroe/HeroList";

export const Marvel = () => {
  return (
    <div>
      <h1>Marvel</h1>
      <hr />
      <HeroList publisher="Marvel Comics" />
    </div>
  );
};
