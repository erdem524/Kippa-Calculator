import React from "react";
import Bingo from "./bingo.jpg";
import { Image } from "semantic-ui-react";
function Succes() {
  return (
    <div style={{ margin: "50px 0" }}>
      <Image src={Bingo} alt="bingo" />
    </div>
  );
}

export default Succes;
