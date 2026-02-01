import React, { useEffect, useState } from "react";
import Button from '@mui/material/Button';
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
        <Button color="secondary" onClick={Change}>Change color</Button>
      </div>
  );
};

export default List;
