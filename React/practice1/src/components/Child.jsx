import Button from "@mui/material/Button";

function Child({ data, name, role }) {
  return (
    <>
      <h4>{name} {role}</h4>
      <Button
        onClick={() => {
          data(`Welcome I'm ${name} ${role}`);
        }}
        variant="contained"
      >
        Click!!
      </Button>
    </>
  );
}

export default Child;
