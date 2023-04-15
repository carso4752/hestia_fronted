import * as Yup from "yup";

export const RegisterSchema = Yup.object().shape({
  name: Yup.string().min(4, "Minimo 4 caracteres").required("Requerido"),
  address: Yup.string().required("Requerido"),
});
