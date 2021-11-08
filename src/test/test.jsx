import * as Yup from "yup";
import { useFormik, ErrorMessage, FormikProvider } from "formik";

const schema = Yup.object({
  name: Yup.string()
    .required("Name is required")
    .min(3, "Name must be contain at least 3 characters"),
  age: Yup.number()
    .required("Age is required")
    .min(18, "This website is 18+ only"),
});

export default function TestForm() {
  const submitForm = (values) => {
    console.log(values);
    formik.resetForm({
      name: "",
      age: undefined,
    });
  };

  const formik = useFormik({
    validationSchema: schema,
    initialValues: {
      name: "",
      age: 0,
    },
    onSubmit: submitForm,
  });
  const { handleSubmit, values, touched, errors, handleChange, handleBlur } =
    formik;

  return (
    <FormikProvider value={formik}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <br />
        <input
          type="text"
          id="name"
          value={values.name}
          name="name"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <ErrorMessage name="name" />
        <br />
        <br />
        <label htmlFor="age"> Age </label>
        <br />
        <input
          type="number"
          name="age"
          id="age"
          value={values.age}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <br />
        <ErrorMessage name="age" />
        <button type="submit">Submit form</button>
      </form>
    </FormikProvider>
  );
}
