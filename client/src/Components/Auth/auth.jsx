import {
  InputField,
  InputFile,
  PasswordInput,
  SubmitButton,
} from "./authComponent";
import ROBOTIMG from "../../assets/registrationPagePics.png";
import { AuthNav } from "../NavBar/navBar";
import { useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Dropzone from "react-dropzone";
import { setLogin } from "../state";
// import dotenv from "dotenv"
// dotenv.config();
// const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:3001";

const BACKEND_URL =
  "https://lama-server-9kdt.onrender.com" || "http://localhost:3001";


const registerSchema = yup.object().shape({
  fullName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  password: yup.string().required("required"),
  address: yup.string().required("required"),
  phone: yup.number().required("required"),
  occupation: yup.string().required("required"),
  picture: yup.string().required("required"),
});

const loginSchema = yup.object().shape({
  email: yup.string().email("invalid email").required("required"),
  password: yup.string().required("required"),
});

const initialValuesRegister = {
  fullName: "",
  email: "",
  password: "",
  address: "",
  phone: "",
  occupation: "",
  education: "",
  picture: "",
};

const initialValuesLogin = {
  email: "",
  password: "",
};

export const AuthenticationForm = () => {
  const [pageType, setPageType] = useState("login");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogin = pageType === "login";
  const isRegister = pageType === "register";

  const register = async (values, onSubmitProps) => {
    //this allows us to send form with image
    const formData = new FormData();
    console.log(values);
    for (let value in values) {
      console.log(value);
      formData.append(value, values[value]);
    }
    formData.append("picturePath", values.picture.name);
    const savedUserResponse = await fetch(`${BACKEND_URL}/auth/register`, {
      method: "POST",
      body: formData,
    });
    const savedUser = await savedUserResponse.json();
    console.log(savedUser);
    onSubmitProps.resetForm();

    if (savedUser) {
      setPageType("login");
    }
  };

  const login = async (values, onSubmitProps) => {
    const savedLoggedInResponse = await fetch(`${BACKEND_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    const loggedIn = await savedLoggedInResponse.json();
    onSubmitProps.resetForm();
    if (loggedIn) {
      dispatch(
        setLogin({
          user: loggedIn.user,
          token: loggedIn.token,
        })
      );
      navigate("/home");
    }
  };

  const handleFormSubmit = async (values, onSubmitProps) => {
    if (isLogin) {
      console.log(values, onSubmitProps);
      await login(values, onSubmitProps);
    }
    if (isRegister) {
      await register(values, onSubmitProps);
      console.log(values, onSubmitProps);
    }
  };
  return (
    <Formik
      onSubmit={handleFormSubmit}
      initialValues={isLogin ? initialValuesLogin : initialValuesRegister}
      validationSchema={isLogin ? loginSchema : registerSchema}
    >
      {({
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
        setFieldValue,
        resetForm,
      }) => (
        <form onSubmit={handleSubmit} className="flex items-center justify-center p-5 mt-8">
          <div className="w-full lg:w-[55%] h-full">
            {isRegister && (
              <>
                <InputField
                  type="text"
                  placeholder="Aayush"
                  icon="person"
                  label="Full Name"
                  id="fullName"
                  blur={handleBlur}
                  change={handleChange}
                  value={values.fullName}
                  error={Boolean(touched.fullName) && Boolean(errors.fullName)}
                  helperText={touched.fullName && errors.fullName}
                />
                <InputField
                  type="number"
                  placeholder="9812345678"
                  icon="phone"
                  label="Phone Number"
                  id="phone"
                  blur={handleBlur}
                  change={handleChange}
                  value={values.phone}
                  error={Boolean(touched.phone) && Boolean(errors.phone)}
                  helperText={touched.phone && errors.phone}
                />
                <InputField
                  type="text"
                  placeholder="Nepal"
                  icon="pin_drop"
                  label="Address"
                  id="address"
                  blur={handleBlur}
                  change={handleChange}
                  value={values.address}
                  error={Boolean(touched.address) && Boolean(errors.address)}
                  helperText={touched.address && errors.address}
                />
                <InputField
                  type="text"
                  placeholder="BIT"
                  icon="school"
                  label="Education"
                  id="education"
                  blur={handleBlur}
                  change={handleChange}
                  value={values.education}
                  error={
                    Boolean(touched.education) && Boolean(errors.education)
                  }
                  helperText={touched.education && errors.education}
                />
                <InputField
                  type="text"
                  placeholder="Devloper"
                  icon="work"
                  label="Occupation"
                  id="occupation"
                  blur={handleBlur}
                  change={handleChange}
                  value={values.occupation}
                  error={
                    Boolean(touched.occupation) && Boolean(errors.occupation)
                  }
                  helperText={touched.occupation && errors.occupation}
                />
                <div className="relative flex justify-center items-center flex-col w-full h-[80px] bg-[var(--surface-dark)] rounded-lg p-2 my-5 focus:bg-[var(--modal-dark)] active:bg-[var(--modal-dark)] focus-within:bg-[var(--modal-dark)] inputContainer cursor-pointer">
                  <Dropzone
                    acceptedFiles=".jpg,.jpeg,.png"
                    multiple={false}
                    onDrop={(acceptedFiles) => {
                      setFieldValue("picture", acceptedFiles[0]);
                    }}
                  >
                    {({ getRootProps, getInputProps }) => (
                      <div {...getRootProps()} className="w-full text-center">
                        <input {...getInputProps()} />
                        {!values.picture ? (
                          <p className="w-full p-4 border border-dashed border-[var(--primary-dark)] hover:border-double">
                            Add Picture Here
                          </p>
                        ) : (
                          <div className="flex items-center justify-between gap-4">
                            {values.picture.name}
                            <span className="material-symbols-outlined">edit</span>
                          </div>
                        )}
                      </div>
                    )}
                  </Dropzone>
                </div>
              </>
            )}
            <InputField
              type="email"
              placeholder="abc@gmail.com"
              icon="mail"
              label="Email"
              id="email"
              blur={handleBlur}
              change={handleChange}
              value={values.email}
              error={Boolean(touched.email) && Boolean(errors.email)}
              helperText={touched.email && errors.email}
            />
            <PasswordInput
              blur={handleBlur}
              change={handleChange}
              value={values.password}
              error={Boolean(touched.password) && Boolean(errors.password)}
              helperText={touched.password && errors.password}
            />

            {/* Button */}
            <SubmitButton value={isLogin ? "Login" : "Register"} />
            <p
              onClick={() => {
                setPageType(isLogin ? "register" : "login");
                resetForm();
              }}
              className="mt-4 text-center cursor-pointer hover:text-[var(--primary-dark)]"
            >
              {isLogin
                ? "Dont have an account? Sign up here"
                : "Already have an account? Login here."}
            </p>
          </div>
          {isRegister ? (
            <>
              <div className="hidden lg:block mx-2 border-l border-l-[var(--modal-dark)] line">
                {" "}
              </div>
              <div className="hidden lg:flex w-[45%] ml-5 min-h-[100vh] justify-center items-center">
                <img src={ROBOTIMG} />
              </div>
            </>
          ) : (
            <>
              <div className="hidden md:block mx-2 md:border-l border-l-[var(--modal-dark)] line"></div>
              <div className="hidden md:flex w-0 md:w-[45%] ml-5  justify-center items-center">
                <img src={ROBOTIMG} />
              </div>
            </>
          )}
        </form>
      )}
    </Formik>
  );
};

// export const RegisterForm = () => {
//   return (
//     <div className="flex items-center justify-center min-w-[100vw] min-h-[60vh] registerContainer my-5">
//       <div className="border w-[80%] registerBox">
//         <h1 className="pt-10 pb-5 mx-2 my-4 text-3xl text-center">
//           {" "}
//           Registration Form
//         </h1>
//         {/* <form method="post" action="/" className="flex p-5 mt-8">
//           <div className="w-full lg:w-[55%] h-full">
//             <InputField
//               type="text"
//               placeholder="Aayush"
//               icon="person"
//               label="Full Name"
//               id="fullName"
//             />
//             <InputField
//               type="email"
//               placeholder="abc@gmail.com"
//               icon="mail"
//               label="Email"
//               id="email"
//             />
//             <PasswordInput />
//             <InputField
//               type="number"
//               placeholder="9812345678"
//               icon="phone"
//               label="Phone Number"
//               id="phone"
//             />
//             <InputField
//               type="text"
//               placeholder="Nepal"
//               icon="pin_drop"
//               label="Address"
//               id="address"
//             />
//             <InputField
//               type="text"
//               placeholder="BIT"
//               icon="school"
//               label="Education"
//               id="education"
//             />
//             <InputField
//               type="text"
//               placeholder="Devloper"
//               icon="work"
//               label="Occupation"
//               id="occupation"
//             />

//             <InputFile />

//             <SubmitButton value="Submit" />
//             <p className="p-2 my-2 text-center">
//               Already have an account?{" "}
//               <a
//                 href="/"
//                 className="text-[var(--primary-dark)] cursor-pointer hover:text-[var(--primary-light)]"
//               >
//                 Login Here.
//               </a>
//             </p>
//           </div>
//           <div className="hidden lg:block mx-2 border-l border-l-[var(--modal-dark)] line"></div>
//           <div className="hidden lg:flex w-[45%] ml-5 min-h-[100vh] justify-center items-center">
//             <img src={ROBOTIMG} />
//           </div>
//         </form> */}
//         <AuthenticationForm />
//       </div>
//     </div>
//   );
// };

// export const LoginForm = () => {
//   return (
//     <div className="flex items-center justify-center min-w-[100vw] min-h-[60vh] loginContainer mt-10">
//       <div className="border w-[60%] loginBox">
//         <h1 className="py-5 mx-2 my-4 text-3xl text-center"> Login Form</h1>
//         {/* <form method="post" action="/" className="flex p-5 mt-8">
//           <div className="w-full md:w-[55%] h-full">
//             <InputField
//               type="email"
//               placeholder="abc@gmail.com"
//               icon="mail"
//               label="Email"
//               id="email"
//             />
//             <PasswordInput />
//             <SubmitButton value="Login" />
//             <p className="p-2 my-2 text-center">
//               Dont have an Account?{" "}
//               <a
//                 href="/register"
//                 className="text-[var(--secondary-dark)] cursor-pointer hover:text-[var(--secondary-light)]"
//               >
//                 Regsiter Now.
//               </a>
//             </p>
//           </div>
//           <div className="hidden md:block mx-2 md:border-l border-l-[var(--modal-dark)] line"></div>
//           <div className="hidden md:flex w-0 md:w-[45%] ml-5  justify-center items-center">
//             <img src={ROBOTIMG} />
//           </div>
//         </form> */}
//         <AuthenticationForm />
//       </div>
//     </div>
//   );
// };

// export const RegisterPage = () => {
//   return (
//     <div className="w-screen min-h-screen">
//       <AuthNav />
//       <RegisterForm />
//     </div>
//   );
// };

// export const LoginPage = () => {
//   return (
//     <div className="w-screen min-h-screen">
//       <AuthNav />
//       <LoginForm />
//     </div>
//   );
// };

export const AuthPage = () => {
  return (
    <div className="w-screen min-h-screen">
      <AuthNav />
      <div className="flex items-center justify-center min-w-[100vw] min-h-[60vh] registerContainer my-5">
        <div className="border w-[80%] registerBox">
          <h1 className="pt-10 pb-5 mx-2 my-4 text-3xl text-center">
            Welcome to{" "}
            <span className="text-[var(--primary-dark)]">LAMA Social App.</span>
          </h1>
          <AuthenticationForm />
        </div>
      </div>
    </div>
  );
};
