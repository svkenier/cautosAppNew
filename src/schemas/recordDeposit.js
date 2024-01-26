import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  receivingAccount: Yup.string().required("cuenta receptora requerida"),
  amount: Yup.string().required("Monto requerido"),
  reference: Yup.string().required("Referncia requerida"),
  date: Yup.string().required("Fecha requerido"),
});

export const initialValues = {
  receivingAccount: "",
  amount: "",
  reference: "",
  date: "",
};