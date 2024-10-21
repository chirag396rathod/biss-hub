import axios from "axios";
import { useFormik } from "formik";
import React from "react";

const SignUpModal = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      conPassword: "",
    },
    onSubmit: async (values) => {
      const reqBody = {
        firstName: values?.firstName,
        lastName: values?.lastName,
        email: values?.email,
        password: values?.password,
      };
      try {
        const response = await axios({
          method: "POST",
          url: "https://uniqual.dev:3001/api/v1/auth/register",
          data: reqBody,
        });
        if (response) {
          const token = response?.data?.data?.authentication?.accessToken;
          localStorage.setItem("access_token", token);
        }
      } catch (error) {
        console.log(error);
      }
    },
  });
  return <div></div>;
};

export default SignUpModal;
