"use client";
import React, { useState } from "react";
import axios from "axios";

export default function CadastroLogin() {
  const [isRegister, setIsRegister] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleCadastro = async (e: any) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/cadastro", {
        username,
        password,
      });
      console.log("Cadastro bem-sucedido:", response.data);
    } catch (error) {
      console.error("Erro no cadastro:", error);
    }
  };

  const handleLogin = async (e: any) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/login", {
        username,
        password,
      });
      console.log("Login bem-sucedido:", response.data);
    } catch (error) {
      console.error("Erro no login:", error);
    }
  };

  return (
    <div className="bg-[#09738a] min-h-screen flex flex-col items-center">
      <main className="container mx-auto flex flex-col items-center justify-center flex-1 text-[#092b5a] mt-8">
        {isRegister ? (
          <>
            <h2 className="text-3xl font-semibold mb-4 text-white">
              Cadastro de Usuário
            </h2>
            <form onSubmit={handleCadastro} className="mb-4 flex items-center">
              <input
                type="text"
                placeholder="Nome de Usuário"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="border rounded-l p-2 focus:ring focus:ring-[#092b5a] focus:border-[#092b5a] w-48"
              />
              <input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border rounded-l p-2 focus:ring focus:ring-[#092b5a] focus:border-[#092b5a] w-48"
              />
              <button
                type="submit"
                className="bg-[#092b5a] text-white px-4 py-2 rounded-r hover:bg-blue-600 focus:outline-none focus:ring focus:ring-[#092b5a]"
              >
                Cadastrar
              </button>
            </form>
          </>
        ) : (
          <>
            <h2 className="text-3xl font-semibold mb-4 text-white">
              Login de Usuário
            </h2>
            <form onSubmit={handleLogin} className="mb-4 flex items-center">
              <input
                type="text"
                placeholder="Nome de Usuário"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="border rounded-l p-2 focus:ring focus:ring-[#092b5a] focus:border-[#092b5a] w-48"
              />
              <input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border rounded-l p-2 focus:ring focus:ring-[#092b5a] focus:border-[#092b5a] w-48"
              />
              <button
                type="submit"
                className="bg-[#092b5a] text-white px-4 py-2 rounded-r hover:bg-blue-600 focus:outline-none focus:ring focus:ring-[#092b5a]"
              >
                Login
              </button>
            </form>
          </>
        )}
      </main>
    </div>
  );
}
