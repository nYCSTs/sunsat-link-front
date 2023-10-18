import { useState } from "react";
import TextInput from "../../component/TextInput";
import Authentication from "../../component/Authentication";
import Button from "../../component/Button";

import '../../app.scss';
import './style.scss';

interface ILoginForm {
  email: string;
  password: string;
  confirmationPassword: string;
}

const Register = () => {
  const [registerForm, setRegisterForm] = useState<ILoginForm>({ email: "", password: "", confirmationPassword: "" });

  const handleLoginForm = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterForm({ ...registerForm, [event.target.name]: event.target.value })
  };

  const register = () => {
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
              value={registerForm.email}
              onChange={handleLoginForm}
              placeholder="Insira o seu email"
            />
            <TextInput
              label="Senha"
              name="password"
              type="password"
              value={registerForm.password}
              onChange={handleLoginForm}
              placeholder="Insira a sua senha"
            />
            <TextInput
              label="Confirmação de Senha"
              name="confirmationPassword"
              type="password"
              value={registerForm.confirmationPassword}
              onChange={handleLoginForm}
              placeholder="Insira a sua senha novamente"
            />
          </div>
          <Button text="Cadastrar" onClick={register} />
          <span className="auth-form-text">
            Já possui uma conta?
            {" "}
            <a className="auth-form-link" href="/login">
              Login
            </a>
          </span>
        </div>
      </Authentication>
    </div >
  )
}

export default Register;