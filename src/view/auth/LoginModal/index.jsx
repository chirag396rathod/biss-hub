import axios from "axios";
import { Col, Modal, Row } from "react-bootstrap";
import { useFormik } from "formik";
import * as yup from "yup";
import { LoginContainer } from "./styled";
import InputComponent from "../../../components/InputComponent";
import CommonButton from "../../../components/CommonButton";
import { useState } from "react";

const validationSchema = yup.object().shape({
  email: yup.string().email("Enter a valid email").required(),
  password: yup.string().min(8, "password must be and 8 digits.").required(),
});

const LoginModal = ({ show, handleClose }) => {
    const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const reqBody = {
        email: values?.email,
        password: values?.password,
      };
      try {
        const response = await axios({
          method: "POST",
          url: "https://uniqual.dev:3001/api/v1/auth/login",
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
  return (
    <Modal size="lg" centered show={show} onHide={handleClose}>
      <Modal.Body>
        <LoginContainer onSubmit={formik.handleSubmit}>
          <div className="title">Create Your Account</div>
          <div className="content">
            <InputComponent
              name="email"
              label="Email"
              placeholder="Enter Email"
              onChange={formik.handleChange}
              error={formik.touched.email && formik.errors.email}
              className="email-input--group"
            />
            <InputComponent
              name="password"
              type="password"
              label="Password"
              placeholder="Password"
              onChange={formik.handleChange}
              error={formik.touched.password && formik.errors.password}
            />
            <div className="forgot-password-link">
              <a href="#">Forgot password?</a>
            </div>
            <div className="remember-me-text">Remember me next time</div>
            <CommonButton text="Login" type="submit" />
            <div className="footer-link">
              Don’t have account? <span> Sign up</span>
            </div>
          </div>
        </LoginContainer>
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;
