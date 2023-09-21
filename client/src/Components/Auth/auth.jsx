import { InputField } from "./authComponent";

export const RegisterForm = () => {
  return (
    <div className="flex items-center justify-center min-w-[100vw] min-h-[60vh] registerContainer">
      <div className="border">
        <h1 className="mx-2 my-4 text-3xl text-center"> Registration Form</h1>
        <form method="post" action="/" className="flex flex-col p-5 mt-8">
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
          <InputField
            type="password"
            placeholder="********"
            icon="lock"
            label="Password"
            id="password"
          />
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

          <InputField
            type="file"
            placeholder=""
            icon="attachment"
            label="Profile Picture"
            id="profilepic"
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export const LoginForm = () => {
  return <div className="loginContainer"></div>;
};
