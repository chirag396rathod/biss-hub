import axios from "axios";
import { Col, Modal, Row } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import { SignUpContainer } from "./styled.jsx";
import InputComponent from "../../../components/InputComponent";
import CommonButton from "../../../components/CommonButton";
import { useState } from "react";
import { BASE_API } from "../../../utils/constants.jsx";
import { IoMdClose } from "react-icons/io";
import { setUser } from "../../../redux/features/auth/commonSlice.js";
import { useDispatch } from "react-redux";

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("First name is required")
    .min(2, "First name must be at least 2 characters long"),

  lastName: Yup.string()
    .required("Last name is required")
    .min(2, "Last name must be at least 2 characters long"),

  email: Yup.string()
    .required("Email is required")
    .email("Email must be a valid email address"),

  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long"),

  conPassword: Yup.string()
    .required("Confirm Password is required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

const SignUpModal = ({ show, handleClose, handleSignIn }) => {
  const [loading, setLoaiding] = useState(false);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      conPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const reqBody = {
        firstName: values?.firstName,
        lastName: values?.lastName,
        email: values?.email,
        password: values?.password,
        confirmPassword: values?.conPassword,
      };
      setLoaiding(true);
      try {
        const response = await axios({
          method: "POST",
          url: `${BASE_API}/api/v1/auth/register`,
          data: reqBody,
        });
        if (response) {
          if (response.status === 200) {
            const data = response.data?.data;
            localStorage.setItem(
              "access_token",
              data?.authentication?.accessToken
            );
            localStorage.setItem(
              "userInfo",
              JSON.stringify({
                authentication: undefined,
                ...data,
              })
            );
            dispatch(setUser(data));
            handleClose();
          }
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoaiding(false);
      }
    },
  });
  return (
    <Modal className='auth-modal' size="lg" centered show={show} onHide={handleClose}>
      <Modal.Body>
        <SignUpContainer onSubmit={formik.handleSubmit}>
          <div className="close-icon" onClick={handleClose}>
            <IoMdClose size={24} />
          </div>
          <div className="title">Create Your Account</div>
          <div className="content">
            <Row className="margin-30">
              <Col>
                <InputComponent
                  name="firstName"
                  label="First Name"
                  placeholder="First Name"
                  onChange={formik.handleChange}
                  error={formik.touched.firstName && formik.errors.firstName}
                />
              </Col>
              <Col>
                <InputComponent
                  name="lastName"
                  label="Last Name"
                  placeholder="Last Name"
                  onChange={formik.handleChange}
                  error={formik.touched.lastName && formik.errors.lastName}
                />
              </Col>
            </Row>
            <InputComponent
              className="margin-30"
              name="email"
              label="Email"
              placeholder="Enter Email"
              onChange={formik.handleChange}
              error={formik.touched.email && formik.errors.email}
            />
            <InputComponent
              name="password"
              type="password"
              label="Password"
              className="margin-30"
              placeholder="Password"
              onChange={formik.handleChange}
              error={formik.touched.password && formik.errors.password}
            />
            <InputComponent
              name="conPassword"
              className="margin-30"
              type="password"
              label="Confirm Password"
              placeholder=" Confirm Password"
              onChange={formik.handleChange}
              error={formik.touched.conPassword && formik.errors.conPassword}
            />
            <CommonButton
              className={"margin-50"}
              text={loading ? "Loading..." : "Sign up"}
              type="submit"
            />
            <div className="footer-link">
              Already have an account?{" "}
              <span
                onClick={() => {
                  handleClose();
                  handleSignIn();
                }}
              >
                {" "}
                Sign In
              </span>
            </div>
          </div>
        </SignUpContainer>
      </Modal.Body>
    </Modal>
  );
};

export default SignUpModal;
