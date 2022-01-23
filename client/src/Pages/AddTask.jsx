import React from "react";
import InputField from "../Components/InputField";
import { Box } from "@chakra-ui/react";

function AddTask(props) {
  const { dispatch } = props;
  return (
    <Box w="100%">
      <InputField inputType="text" dispatch={dispatch} />
    </Box>
  );
}

export default AddTask;
