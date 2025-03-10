import React from "react";

const Header = () => {
  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItem: "center",
          borderBottom: "1px solid white",
          height: "80px",
          backgroundColor: "green",
        }}
      >
        <div>
          <h1
            style={{
              padding: "0px 15px",
              color: "#FEE715",
              fontFamily: "monospace",
              fontSize: "40px",
            }}
          >
            Devendra Kandpal
          </h1>
        </div>
        <div>
          <h1>Option button</h1>
        </div>
      </div>
    </>
  );
};

export default Header;
