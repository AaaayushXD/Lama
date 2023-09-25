import { useState } from "react";


export const PasswordInput = (props) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  function toggleVisibility() {
    setPasswordVisible((prevState) => !prevState);
  }
  return (
    <div className="relative flex flex-col w-full h-[80px] bg-[var(--surface-dark)] rounded-lg p-2 my-5 focus:bg-[var(--modal-dark)] active:bg-[var(--modal-dark)] focus-within:bg-[var(--modal-dark)] passwordContainer inputContainer">
      <label for="password">Password</label>
      <input
        type={passwordVisible ? "text" : "password"}
        placeholder={passwordVisible ? "password" : "********"}
        id="password"
        className="w-full h-[50px] bg-[var(--surface-dark)] outline-none pl-7 py-2 text-l focus:bg-[var(--modal-dark)] inputBox rounded-lg"
        autoComplete="off"
        name="password"
        onBlur={props.blur}
        onChange={props.change}
        value={props.value}
        error={props.error}
        helperText={props.helperText}
        required
      />
      <span className="material-symbols-outlined text-l text-[var(--primary-dark)] absolute top-[41px]">
        lock
      </span>

      <button
        className="absolute top-[40px] right-[10px]"
        onClick={toggleVisibility}
        type="button"
      >
        {passwordVisible ? (
          <span className="material-symbols-outlined text-l text-[var(--primary-dark)]">
            visibility
          </span>
        ) : (
          <span className="material-symbols-outlined text-l text-[var(--primary-dark)]">
            visibility_off
          </span>
        )}
      </button>
    </div>
  );
};

export const InputField = (props) => {
  return (
    <div className="relative flex flex-col w-full h-[80px] bg-[var(--surface-dark)] rounded-lg p-2 my-5 focus:bg-[var(--modal-dark)] active:bg-[var(--modal-dark)] focus-within:bg-[var(--modal-dark)] inputContainer">
      <label for={props.id}>{props.label}</label>
      <input
        type={props.type}
        placeholder={props.placeholder}
        id={props.id}
        className="w-full h-[50px] bg-[var(--surface-dark)] outline-none pl-7 py-2 text-l focus:bg-[var(--modal-dark)] inputBox rounded-lg"
        autoComplete="off"
        name={props.id}
        onBlur={props.blur}
        onChange={props.change}
        value={props.value}
        error={props.error}
        helperText = {props.helperText}
        required
      />
      <span className="material-symbols-outlined text-l text-[var(--primary-dark)] absolute top-[41px]">
        {props.icon}
      </span>
    </div>
  );
};

export const SubmitButton = (props) => {
  return (
    <div className="flex justify-center w-full h-full mt-10">
      <button
        type="submit"
        className="p-3 w-[30%] min-w-[70px] text-l lg:text-2xl rounded-2xl font-bold ring-2 ring-[var(--primary-dark)] hover:ring-0 hover:bg-[var(--primary-light)]"
      >
        {props.value}
      </button>
    </div>
  );
};

export const InputFile = () => {
  return (
    <div className="relative flex flex-col w-full h-[80px] bg-[var(--surface-dark)] rounded-lg p-2 my-5 focus:bg-[var(--modal-dark)] active:bg-[var(--modal-dark)] focus-within:bg-[var(--modal-dark)] inputContainer cursor-pointer">
      <label for="file_input">Profile Picture</label>
      <input
        className="w-full text-sm rounded-lg cursor-pointer focus:outline-none h-[50px] pl-3 py-2 text-l focus:bg-[var(--modal-dark)] placeholder:bg-[var(--surface-dark)]"
        id="file_input"
        type="file"
        accept="image/*"
        name="picture"
      />
    </div>
  );
};
