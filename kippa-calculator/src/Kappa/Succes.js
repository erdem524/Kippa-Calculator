import React from "react";
import Bingo from "./bingo.jpg";
import { Image } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
function Succes() {
  const history = useHistory();
  return (
    <div style={{ margin: "50px 0" }} className="ui container">
      <Image src={Bingo} alt="bingo" />
      <button
        class="ui labeled icon black button"
        onClick={() => {
          history.goBack();
        }}
        style={{ margin: "50px 0" }}
      >
        <i class="angle left icon"></i>
        Back
      </button>
    </div>
  );
}

export default Succes;
