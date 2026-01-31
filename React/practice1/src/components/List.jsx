import React, { useEffect, useState } from "react";

const List = () => {
  const [color, setColor] = useState("white");
  function Change() {
    setColor(previous=>previous==="lightblue" ? "white":"lightblue" );
  }
  useEffect(()=>{
    document.body.style.backgroundColor=color;
  },[color]);
  return (
      <div>
        <button onClick={Change}>Change Background color</button>
      </div>
  );
};

export default List;
