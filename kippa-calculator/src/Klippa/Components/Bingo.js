import React from "react";
import Win from "./bingo.jpg";
import { Image } from "semantic-ui-react";

function Bingo() {
  return (
    <div style={{ margin: "50px 0" }}>
      <Image src={Win} alt="bingo" />
    </div>
  );
}

export default Bingo;
