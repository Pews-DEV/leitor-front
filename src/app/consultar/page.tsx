"use client";
import React, { useState } from "react";
import axios from "axios"; // Importe o Axios

// Exemplo de dados do card (substitua por dados reais)
const cardData = {
  plate_number: "ABC123",
  city: "Sua Cidade",
  date: "01/01/0000 00:00",
  // Substitua 'imagemUrl' pela URL da imagem real
  image: "https://via.placeholder.com/150",
};

export default function Consultar() {
  const [consulta, setConsulta] = useState("");
  const [resultado, setResultado] = useState(cardData); // Simulação de resultado da consulta

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      // Aqui você pode realizar a consulta real à API usando Axios
      const response = await axios.get(
        `http://localhost:8080/plate/${consulta}`
      );

      // Se a consulta for bem-sucedida, atualize 'resultado' com os dados reais
      console.log(response.data.plate);
      setResultado(response.data.plate);
    } catch (error) {
      // Lide com erros de consulta aqui, se necessário
      console.error("Erro na consulta:", error);
    }
  };

  return (
    <div className="bg-[#09738a] min-h-screen flex flex-col items-center">
      <main className="container mx-auto flex flex-col items-center justify-center flex-1 text-[#092b5a] mt-8">
        <h2 className="text-3xl font-semibold mb-4 text-white">
          Consultar Placa de Carro
        </h2>
        <form onSubmit={handleSubmit} className="mb-4 flex items-center">
          <input
            type="text"
            placeholder="Digite a placa do carro"
            value={consulta}
            onChange={(e) => setConsulta(e.target.value)}
            className="border rounded-l p-2 focus:ring focus:ring-[#092b5a] focus:border-[#092b5a] w-48"
          />
          <button
            type="submit"
            className="bg-[#092b5a] text-white px-4 py-2 rounded-r hover:bg-blue-600 focus:outline-none focus:ring focus:ring-[#092b5a]"
          >
            Consultar
          </button>
        </form>
        {resultado && (
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <img
              src={resultado.image}
              alt={`Placa ${resultado.plate_number}`}
              className="object-contain mx-auto mb-2"
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
            <p className="text-lg font-semibold mb-2">
              Número da Placa: {resultado.plate_number}
            </p>
            <p className="text-lg font-semibold">Cidade: {resultado.city}</p>
            <p className="text-lg font-semibold">Data: {resultado.date}</p>
          </div>
        )}
      </main>
    </div>
  );
}
