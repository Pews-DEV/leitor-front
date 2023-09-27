import React from 'react';

export default function Home() {
  return (
    <div className="bg-[#09738a] min-h-screen flex flex-col">
      <main className="container mx-auto flex flex-col items-center justify-center flex-1 text-[#092b5a]">
        <h2 className="text-4xl font-semibold text-white mb-4">Bem-vindo à nossa página inicial!</h2>
        <p className="text-[#092b5a] text-lg">
          Explore todas as funcionalidades incríveis do nosso aplicativo.
        </p>
      </main>
    </div>
  );
}
