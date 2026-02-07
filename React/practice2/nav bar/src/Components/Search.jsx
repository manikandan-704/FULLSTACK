import React, { useState } from 'react' 
export const Search = () => {
    
  const [show, setShow] = useState(false);

  return (
    <div style={{ padding: "20px" }}>
      <input
        type={show ? "text" : "password"}
        placeholder="Enter password"
      />

      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"}
      </button>
    </div>
  );

}