export const emailInput = () => {
  return <div className="emailTextContainer"></div>;
};

export const passwordInput = () => {
  <div className="passwordContainer"></div>;
};

export const InputField = (props) => {
  return (
    <div className="relative flex flex-col w-full h-[80px] bg-[var(--surface-dark)] rounded-lg p-2 my-3 focus:bg-[var(--modal-dark)] active:bg-[var(--modal-dark)]">
      <label for={props.id}>{props.label}</label>
      <input
        type={props.type}
        placeholder={props.placeholder}
        id={props.id}
        className="w-full h-[50px] bg-[var(--surface-dark)] outline-none pl-7 text-l focus:bg-[var(--modal-dark)]"
        autoComplete="off"
        required
      />
      <span class="material-symbols-outlined text-l text-[var(--primary-dark)] absolute top-[41px]">
        {props.icon}
      </span>
    </div>
  );
};
