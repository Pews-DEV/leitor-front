// Header.js
import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-[#092b5a] p-4 shadow-md">
      <nav className="container mx-auto flex items-center justify-between">
        <Link href="/">
          <p className="text-white text-2xl font-semibold">Placas.com</p>
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/cadastrar">
              <p className="text-white hover:text-gray-200">Cadastrar</p>
            </Link>
          </li>
          <li>
            <Link href="/consultar">
              <p className="text-white hover:text-gray-200">Consultar</p>
            </Link>
          </li>
          <li>
            <Link href="/relatorio">
              <p className="text-white hover:text-gray-200">Relatório</p>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
