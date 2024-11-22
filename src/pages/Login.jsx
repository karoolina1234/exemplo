import React from "react";

// O NOME DA FUNÇÃO AQUI VAI SER ESSSE NOME Q VAI SER EXPORTADO naquele importe Login from '../pages/Login.jsx'
function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    console.log("Email:", email);
    console.log("Password:", password);

    if (email && password) {
      window.location.href = "/home";
    }
  };

  return (
    // HTML FICA DENTRO DO RETORNO
    <div
      className="w3-container w3-display-middle w3-card w3-white w3-left-align"
      style={{
        width: "500px",
        maxWidth: "500px",
        borderRadius: "12px",
        boxShadow: "0 6px 15px rgba(0, 0, 0, 0.2)",
        padding: "40px",
      }}
    >
      <h2
        className="w3-center w3-text-teal"
        style={{
          fontWeight: "bold",
          marginBottom: "30px",
          fontSize: "28px",
        }}
      >
        Login
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="w3-margin-bottom">
          <label
            htmlFor="email"
            className="w3-text-teal"
            style={{
              fontWeight: "bold",
              fontSize: "16px",
              marginBottom: "10px",
              display: "block",
            }}
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w3-input w3-border w3-round"
            placeholder="Digite seu email"
            required
            style={{
              padding: "14px",
              fontSize: "16px",
              marginBottom: "15px",
            }}
          />
        </div>

        <div className="w3-margin-bottom">
          <label
            htmlFor="password"
            className="w3-text-teal"
            style={{
              fontWeight: "bold",
              fontSize: "16px",
              marginBottom: "10px",
              display: "block",
            }}
          >
            Senha
          </label>
          <input
            id="password"
            type="password"
            className="w3-input w3-border w3-round"
            placeholder="Digite sua senha"
            required
            style={{
              padding: "14px",
              fontSize: "16px",
              marginBottom: "20px",
            }}
          />
        </div>

        <button
          type="submit"
          className="w3-button w3-teal w3-block w3-round"
          style={{
            padding: "14px",
            fontSize: "18px",
            fontWeight: "bold",
            textTransform: "uppercase",
            transition: "background 0.3s ease",
          }}
        >
          Entrar
        </button>
      </form>
    </div>
  );
}

export default Login;
