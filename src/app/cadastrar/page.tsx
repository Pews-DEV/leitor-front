'use client'
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';

type FormData = {
  cidade: string;
  imagemDaPlaca: FileList;
};

export default function Cadastrar() {
  const { handleSubmit, control } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      // Ler a imagem selecionada e converter para base64
      const imageFile = data.imagemDaPlaca[0];
      const reader = new FileReader();
      reader.readAsDataURL(imageFile);
      reader.onload = async () => {
        const base64Image = reader.result?.toString();

        // Criar um objeto com os dados a serem enviados
        const requestData = {
          city: data.cidade,
          image: base64Image,
        };

        // Fazer a solicitação POST para o endpoint
        const response = await axios.post('http://localhost:8080/cadastroPlaca', requestData);

        // Lide com a resposta da API aqui
        console.log('Resposta da API:', response.data);
      };
    } catch (error) {
      // Lide com erros aqui, se necessário
      console.error('Erro ao cadastrar placa:', error);
    }
  };

  return (
    <div className="bg-[#09738a] min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-3xl font-semibold mb-4 text-white">Cadastrar Placa</h2>
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Cidade:</label>
            <Controller
              name="cidade"
              control={control}
              defaultValue=""
              rules={{ required: 'Campo obrigatório' }}
              render={({ field, fieldState }) => (
                <div>
                  <input
                    type="text"
                    {...field}
                    style={{ color: 'black' }}
                    className={`border rounded w-full p-2 focus:ring focus:ring-purple-400 ${
                      fieldState.error ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {fieldState.error && <p className="text-red-500 text-xs mt-1">{fieldState.error.message}</p>}
                </div>
              )}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Imagem da Placa:</label>
            <Controller
              name="imagemDaPlaca"
              control={control}
              rules={{ required: 'Campo obrigatório' }}
              render={({ field }) => (
                <div>
                  <input
                    type="file"
                    onChange={(e) => field.onChange(e.target.files)}
                    className={`border rounded w-full p-2 focus:ring focus:ring-purple-400`}
                  />
                </div>
              )}
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
