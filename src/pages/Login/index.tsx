import { useState } from "react";
import TextInput from "../../component/TextInput";
import Authentication from "../../component/Authentication";

import '../../app.scss';
import './style.scss';

import Button from "../../component/Button";

interface ILoginForm {
  email: string;
  password: string;
}

const Login = () => {
  const [loginForm, setLoginForm] = useState<ILoginForm>({ email: "", password: "" });

  const handleLoginForm = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm({ ...loginForm, [event.target.name]: event.target.value })
  };

  const login = () => {
    // TODO
  }

  return (
    <div className="auth-container">
      <Authentication>
        <div className="auth-form">
          <div className="auth-input-container">
            <TextInput
              label="Email"
              name="email"
              type="email"
              value={loginForm.email}
              onChange={handleLoginForm}
              placeholder="Insira o seu email"
            />
            <TextInput
              label="Senha"
              name="password"
              type="password"
              value={loginForm.password}
              onChange={handleLoginForm}
              placeholder="Insira a sua senha"
            />
          </div>
          <Button text="Confirmar" onClick={login} />
          <span className="auth-form-text">
            Não possui conta?
            {" "}
            <a className="auth-form-link" href="/register">
              Cadastre-se
            </a>
          </span>
        </div>
      </Authentication>
    </div >
  )
}

export default Login;