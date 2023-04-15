import { RegisterSchema } from "@/components/company/schemas";
import { withFormik } from "formik";
import InnerForm from "./InnerForm";

const FormRegister = withFormik({
  // Transform outer props into form values
  mapPropsToValues: ({}) => {
    return {
      id: 0,
      name: "",
      address: "",
    };
  },
  validationSchema: RegisterSchema,
  handleSubmit: (values) => {
    console.log({ values });
  },
})(InnerForm);

export default FormRegister;
