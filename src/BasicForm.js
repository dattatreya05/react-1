import { useFormik } from "formik";
import * as yup from 'yup';

const validateForm = (values) => {
  console.log("validateForm", values);
  const errors = {};
  
  // min 5 - email
  // Valid email
  if(values.email.length < 5){
    errors.email = "Please provide a longer email";
  } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
    errors.email = "Please provide a valid email";
  }

  // min 8 characters
  if(values.password.length < 8){
    errors.password = "Please provide a longer password";
  } else if(values.password.length > 12){
    errors.password = "Please provide a shorter password";
  }
  // max 12- charcter password

  console.log("errors", errors);
  return errors;

}

// export function BasicForm() {
//   const formik = useFormik({
//     initialValues: { email: "", password: "" },
//     validate: validateForm,
//     onSubmit: (values) => {
//       console.log("onSubmit", values)
//       }
//   });
//   return (
//   <form onSubmit={formik.handleSubmit}>
//     <input 
//       id="email"
//       name="email"
//       value={formik.values.email} 
//       onChange={formik.handleChange}
//       onBlur={formik.handleBlur} 
//       type="email" placeholder="Email" />
//       {formik.errors.email && formik.touched.email 
//         ? formik.errors.email : ""}
//     <input
//       id="password"
//       name="password" 
//       value={formik.values.password} 
//       onChange={formik.handleChange}
//       onBlur={formik.handleBlur} 
//       type="password" placeholder="Password" />
//       {formik.errors.password && formik.touched.password
//         ? formik.errors.password : ""}
//     <button type="submit">Submit</button>
//   </form>
//   );
// }

// In th above code we are using the formik multiple times we have to reduce it and to improve code quality.

// Why to use validations?
// Preventing user from storing junk data in mock api/database.

// in the below code we are destructuring the formik and using it.

const formValidationSchema = yup.object({
  email: yup.string()
  .min(5, "Need a bigger email😁")
  .required("Why not fill this email😗")
  .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, "Pattern not matched🤣"), // giving custom message for that one.
  password: yup.string()
  .min(8, "Need a longer password😁").max(12, "Too much password😁").required("Why not fill this password😗"),
});

export function BasicForm() {
  const {handleSubmit, values, handleChange, handleBlur, errors, touched} = useFormik({
    initialValues: { email: "", password: "" },
    // validate: validateForm, // In this yup we are not using this one.
    validationSchema: formValidationSchema,
    onSubmit: (values) => {
      console.log("onSubmit", values)
      }
  });
  return (
  <form onSubmit={handleSubmit}>
    <input 
      id="email"
      name="email"
      value={values.email} 
      onChange={handleChange}
      onBlur={handleBlur} 
      type="email" placeholder="Email" />
      {errors.email && touched.email 
        ? errors.email : ""}
    <input
      id="password"
      name="password" 
      value={values.password} 
      onChange={handleChange}
      onBlur={handleBlur} 
      type="password" placeholder="Password" />
      {errors.password && touched.password
        ? errors.password : ""}
    <button type="submit">Submit</button>
  </form>
  );
}


//Task
// Add validation to the forms
// 1. AddMovie
// 2. EditMovie
// name - required
// poster - min 4, required
// rating - 0 - 10, required
// summary - min 20 chars, required
// trailer - min 4, required