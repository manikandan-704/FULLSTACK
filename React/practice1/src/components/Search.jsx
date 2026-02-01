import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function Search() {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);
  const [error, seterror] = useState("");
  function Submit() {
    if (!text || text.trim() === "") {
      seterror("Enter somthing");
      return;
    }
    setItems((pre) => [...pre, text]);
    setText(null);
  }

  return (
    <>
      <div>
        <TextField
          label="Enter here"
          onChange={(e) => {
            setText(e.target.value);
            if (e.target.value.trim()) setError("");
          }}
          error={Boolean(error)}
          helperText={error}
          variant="standard"
        />
        <Button variant="contained" onClick={Submit} color="success">
          Add
        </Button>
        <ul>
          {items.map((items, index) => (
            <li key={index}>{items}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default Search;
