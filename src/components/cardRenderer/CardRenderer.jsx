import React from "react";
import Card from "../card/Card";
import "./CardRenderer.css";

function Cardrender({ data }) {
  return (
    <div className="cardlistcontainer">
      {data.length > 0 ? (
        <div className="cards">
          {data.map((item, index) => (
            <div key={index}>
              <Card blogData={item} />
            </div>
          ))}
        </div>
      ) : (
        <>No Notes Found</>
      )}
    </div>
  );
}

export default Cardrender;
