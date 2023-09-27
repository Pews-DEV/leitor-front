'use client'
import React from 'react';

export default function Relatorio() {
  const handleDownload = async () => {
    try {
      const response = await fetch('http://localhost:8080/plates/report');

      if (!response.ok) {
        throw new Error('Erro ao gerar o relatório');
      }

      const arrayBuffer = await response.arrayBuffer();
      const blob = new Blob([arrayBuffer], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      window.open(url);
    } catch (error) {
      console.error('Erro ao gerar o relatório:', error);
    }
  };

  return (
    <div className="bg-[#09738a] min-h-screen flex flex-col items-center">
      <main className="container mx-auto flex flex-col items-center justify-center flex-1 text-[#092b5a] mt-8">
        <h2 className="text-3xl font-semibold mb-4 text-white">Gerar Relatório</h2>
        <button
          onClick={handleDownload}
          className="bg-[#092b5a] text-white px-6 py-3 rounded-full hover:bg-blue-600 focus:outline-none focus:ring focus:ring-[#092b5a]"
        >
          Gerar Relatório
        </button>
      </main>
    </div>
  );
}
