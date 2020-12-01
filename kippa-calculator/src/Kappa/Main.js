import React from "react";

function Main() {
  return (
    <div>
      <div className="ui placeholder segment">
        <div className="ui two column very relaxed stackable grid">
          <div className="middle aligned column">
            <div style={{ fontSize: "50px" }} className="ui huge segment">
              8+8+15+19
            </div>
          </div>
          <div className="column">
            <div className="ui form">
              <div className="field">
                <label>Answer</label>
                <div className="ui left icon input">
                  <input type="text" placeholder="Pleace enter the Main" />
                  <i className="edit icon"></i>
                </div>
              </div>

              <div className="ui blue submit button">
                {" "}
                <button>
                  <a href="/bingo">Submit</a>
                </button>
              </div>

              <div className="ui negative message">
                <i className="close icon"></i>
                <div className="sement">Please try again!</div>
              </div>
              <div className="ui negative red message">
                <i className="close icon"></i>
                <div className="sement">Sorry, You have lost.</div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ fontSize: "50px" }} className="ui vertical divider">
          =
        </div>
      </div>
    </div>
  );
}

export default Main;
