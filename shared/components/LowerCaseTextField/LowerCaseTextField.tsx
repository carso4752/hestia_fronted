import TextField from "@mui/material/TextField";
import { fieldToTextField, TextFieldProps } from "formik-mui";
import { useCallback } from "react";

const LowerCaseTextField = (props: TextFieldProps) => {
  const {
    form: { setFieldValue },
    field: { name },
  } = props;
  const onChange = useCallback(
    (event: any) => {
      const { value } = event.target;
      setFieldValue(name, value ? value.toLowerCase() : "");
    },
    [setFieldValue, name]
  );
  return <TextField {...fieldToTextField(props)} onChange={onChange} />;
};

export default LowerCaseTextField;
