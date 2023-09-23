import {
  InputField,
  InputFile,
  PasswordInput,
  SubmitButton,
} from "./authComponent";
import ROBOTIMG from "../../assets/registrationPagePics.png";

export const RegisterForm = () => {
  return (
    <div className="flex items-center justify-center min-w-[100vw] min-h-[60vh] registerContainer my-5">
      <div className="border w-[80%] registerBox">
        <h1 className="pt-10 pb-5 mx-2 my-4 text-3xl text-center">
          {" "}
          Registration Form
        </h1>
        <form method="post" action="/" className="flex p-5 mt-8">
          <div className="w-full lg:w-[55%] h-full">
            <InputField
              type="text"
              placeholder="Aayush"
              icon="person"
              label="Full Name"
              id="fullName"
            />
            <InputField
              type="email"
              placeholder="abc@gmail.com"
              icon="mail"
              label="Email"
              id="email"
            />
            <PasswordInput />
            <InputField
              type="number"
              placeholder="9812345678"
              icon="phone"
              label="Phone Number"
              id="phone"
            />
            <InputField
              type="text"
              placeholder="Nepal"
              icon="pin_drop"
              label="Address"
              id="address"
            />
            <InputField
              type="text"
              placeholder="BIT"
              icon="school"
              label="Education"
              id="education"
            />
            <InputField
              type="text"
              placeholder="Devloper"
              icon="work"
              label="Occupation"
              id="occupation"
            />

            <InputFile />

            <SubmitButton value="Submit" />
            <p className="p-2 my-2 text-center">
              Already have an account? {" "}
              <a
                href="/login"
                className="text-[var(--primary-dark)] cursor-pointer hover:text-[var(--primary-light)]"
              >
                Login Here.
              </a>
            </p>
          </div>
          <div className="hidden lg:block mx-2 border-l border-l-[var(--modal-dark)] line"></div>
          <div className="hidden lg:flex w-[45%] ml-5 min-h-[100vh] justify-center items-center">
            <img src={ROBOTIMG} />
          </div>
        </form>
      </div>
    </div>
  );
};

export const LoginForm = () => {
  return (
    <div className="flex items-center justify-center min-w-[100vw] min-h-[60vh] loginContainer mt-10">
      <div className="border w-[60%] loginBox">
        <h1 className="py-5 mx-2 my-4 text-3xl text-center"> Login Form</h1>
        <form method="post" action="/" className="flex p-5 mt-8">
          <div className="w-full md:w-[55%] h-full">
            <InputField
              type="email"
              placeholder="abc@gmail.com"
              icon="mail"
              label="Email"
              id="email"
            />
            <PasswordInput />
            <SubmitButton value="Login" />
            <p className="p-2 my-2 text-center">Dont have an Account? <a href="/register" className="text-[var(--secondary-dark)] cursor-pointer hover:text-[var(--secondary-light)]">Regsiter Now.</a></p>
          </div>
          <div className="hidden md:block mx-2 md:border-l border-l-[var(--modal-dark)] line"></div>
          <div className="hidden md:flex w-0 md:w-[45%] ml-5  justify-center items-center">
            <img src={ROBOTIMG} />
          </div>
        </form>
      </div>
    </div>
  );
};