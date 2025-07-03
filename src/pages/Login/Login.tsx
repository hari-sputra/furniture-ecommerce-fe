import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { LoginForm } from "../../types/login";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Swal from "sweetalert2";
import FormInput from "../../components/FormInput/formInput";

const loginSchema = yup.object().shape({
  email: yup.string().email("Email is not valid").required("Email is required"),
  password: yup.string().required("Password is required"),
});

const Login = () => {
  const form = useForm<LoginForm>({
    resolver: yupResolver(loginSchema),
  });

  const submitHandler = (values: LoginForm) => {
    console.log(values);

    Swal.fire({
      toast: true,
      icon: "success",
      title: "Logged in successfully",
      showConfirmButton: false,
      timer: 1500,
      position: "top-end",
    });
  };

  return (
    <div className="login-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5">
            <div className="login-wrap p-4">
              <h2 className="section-title text-center mb-5">Masuk</h2>
              <form
                onSubmit={form.handleSubmit(submitHandler)}
                className="login-form"
              >
                <FormInput<LoginForm>
                  errors={form.formState.errors}
                  name="email"
                  register={form.register}
                  type="text"
                  placeholder="Email Address"
                />

                <FormInput<LoginForm>
                  errors={form.formState.errors}
                  name="password"
                  register={form.register}
                  type="password"
                  placeholder="Password"
                />

                {/* action */}
                <div className="form-group">
                  <button type="submit" className="btn btn-primary btn-block">
                    Masuk
                  </button>
                </div>
                <div className="text-center mt-4">
                  <p>
                    Belum punya akun?{" "}
                    <Link to="/register" className="text-primary">
                      Daftar di sini
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
