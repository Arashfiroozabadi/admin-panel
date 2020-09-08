import React, { forwardRef } from "react";
import styled from "styled-components/macro";

import { Typography, TextField } from "../themed";

interface PropsType {

}
export default forwardRef<HTMLFormElement>((props, ref) => (
  <Form ref={ref} >
    <Typography variant="h1">Add new task</Typography>
    <TextField label="test" placeholder="helllo" />
  </Form>
));

const Form = styled.form`

`;
