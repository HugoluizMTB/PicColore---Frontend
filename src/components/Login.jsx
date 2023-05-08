import React, { useState } from "react";
import useAuth from "../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleLogin = () => {
    if (!email | !senha) {
      setError("Preencha todos os campos");
      return;
    }

    const res = signin(email, senha);

    if (res) {
      setError(res);
      return;
    }

    navigate("/");
  };

  return (
    <div>
      <h1>Please Log In</h1>
      <form onSubmit={handleLogin}>
        <label>
          <p>Login</p>
          <input type="email"
            placeholder="Digite seu E-mail"
            value={email}
            onChange={(e) => [setEmail(e.target.value), setError("")]} />
        </label>
        <label>
          <p>Senha</p>
          <input
            type="password"
            placeholder="Digite sua Senha"
            value={senha}
            onChange={(e) => [setSenha(e.target.value), setError("")]}
          />
        </label>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}
