import UpperCaseTextField from "@/shared/components/UpperCaseTextField/UpperCaseTextField";
import { Button, LinearProgress } from "@mui/material";
import { FormikProps, Form, Field } from "formik";
import { Company } from "../../../models";

const InnerForm = (props: FormikProps<Company>) => {
  const { isSubmitting, submitForm } = props;
  return (
    <Form>
      <Field
        component={UpperCaseTextField}
        name="name"
        label="Nombre"
        placeholder="Ingrese su nombre"
      />
      <br />

      <Field
        component={UpperCaseTextField}
        name="address"
        label="Dirección"
        placeholder="Example: Carrera 60 # 11 - 11"
      />
      <br />

      {isSubmitting && <LinearProgress />}
      <Button
        variant="contained"
        color="primary"
        disabled={isSubmitting}
        onClick={submitForm}
      >
        Registrar
      </Button>
    </Form>
  );
};

export default InnerForm;
