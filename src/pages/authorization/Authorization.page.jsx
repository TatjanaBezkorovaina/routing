import React from "react";
import { Formik } from "formik";
import axios from "axios";
import styles from "./authorization.module.scss";

const AuthorizationPage = () => {
  const formValues = {
    email: "",
    password: "",
  };

  const validateForm = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Please enter your email";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
    return errors;
  };

  const onSubmit = async (
    values,
    { setSubmitting, setErrors, setStatus, resetForm }
  ) => {
    console.log(values);
    const headers = new Headers();

    await axios
      .post(
        "https://beetroot-solodkui.herokuapp.com/beetroot-solodkui/users/authorization",
        values,
        headers
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        // щоб вивести помилку з сервера на сторінку:
        // const errorResponse = error.response.data;
        // setErrors({ email: errorResponse.message.ua });

        // console.log("ERROR", errorResponse);
        resetForm({});
      });
    // setTimeout(() => {
    //   setSubmitting(true);
    // }, 400);
  };

  return (
    <div className={styles.authorizationPage}>
      <div className={styles.authorizationPageWrapper}>
        <h2>Authorization.page</h2>
        <Formik
          initialValues={formValues}
          validate={(values) => validateForm(values)}
          onSubmit={onSubmit}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder="email"
              />
              {errors.email && touched.email && errors.email}
              <br />
              <input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                placeholder="password"
                style={{ marginTop: "20px" }}
              />
              {errors.password && touched.password && errors.password}
              <br />
              <button
                type="submit"
                style={{ marginTop: "20px" }}
                disabled={isSubmitting}
              >
                Submit
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AuthorizationPage;
