import Button from "@mui/material/Button";
import { Stack, Box } from "@chakra-ui/react";

function Child({ data, name, role }) {
  return (
    <>
      {/* <Button onClick={()=>{data("hi all")}} variant="contained" endIcon={<SendIcon />}>
         Send
      </Button> */}
      <Button
        onClick={() => {
          data("Welcome");
        }}
        variant="outlined"
        color="error"
      >
        Error
      </Button>

      <Stack direction="row" h="20" spacing="4">
        <Box bg="blue.500" color="white" p="4">
          Box 1
        </Box>

        <Box bg="green.500" color="white" p="4">
          Box 2
        </Box>
      </Stack>
    </>
  );
}

export default Child;
