import axios from "axios";
import { Col, Modal, Row } from "react-bootstrap";
import { useFormik } from "formik";
import * as yup from "yup";
import { LoginContainer } from "./styled";
import InputComponent from "../../../components/InputComponent";
import CommonButton from "../../../components/CommonButton";
import { useState } from "react";
import { BASE_API } from "../../../utils/constants";
import CheckIcon from "../../../assets/box-checked.svg";
import { IoMdClose } from "react-icons/io";
import { useDispatch } from "react-redux";
import { setUser } from "../../../redux/features/auth/commonSlice";

const validationSchema = yup.object().shape({
  email: yup.string().email("Enter a valid email").required(),
  password: yup.string().min(8, "password must be and 8 digits.").required(),
});

const LoginModal = ({ show, handleClose, handleSignUp }) => {
  const [loading, setLoaiding] = useState(false);
  const dispatch = useDispatch();

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
      setLoaiding(true);
      try {
        const response = await axios({
          method: "POST",
          url: `${BASE_API}/api/v1/auth/login`,
          data: reqBody,
        });
        if (response) {
          if (response.status === 200) {
            const data = response.data?.data;
            localStorage.setItem("access_token",  data?.authentication?.accessToken);
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
        <LoginContainer onSubmit={formik.handleSubmit}>
          <div className="close-icon" onClick={handleClose}>
            <IoMdClose size={24} />
          </div>
          <div className="title">Login Your Account</div>
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
            <div className="remember-me-text">
              <img src={CheckIcon} alt="CheckIcon" />
              Remember me next time
            </div>
            <CommonButton
              text={loading ? "Loading..." : "Login"}
              type="submit"
            />
            <div className="footer-link">
              Don’t have account?{" "}
              <span
                onClick={() => {
                  handleClose();
                  handleSignUp();
                }}
              >
                {" "}
                Sign up
              </span>
            </div>
          </div>
        </LoginContainer>
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;
