import { UseFormRegister, Path, FieldErrors } from "react-hook-form";

interface InputProps<T extends Record<string, any>> {
  type: "text" | "password" | "number";
  placeholder?: string;
  register: UseFormRegister<T>;
  name: Path<T>;
  errors: FieldErrors<T>;
}

function FormInput<T extends Record<string, any>>(props: InputProps<T>) {
  const { type, placeholder, register, name, errors } = props;

  return (
    <div className="form-group mb-4">
      <input
        type={type}
        className={`form-control ${errors[name] ? "is-invalid" : ""}`}
        placeholder={placeholder}
        {...register(name)}
      />

      {/* is validation */}
      <div
        className={`text-danger ${errors[name] ? "" : "hidden"}`}
        style={{ height: 12 }}
      >
        <small>{(errors[name]?.message as string | null) ?? ""}</small>
      </div>
    </div>
  );
}

export default FormInput;
