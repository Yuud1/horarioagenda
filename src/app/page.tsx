"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaArrowDown } from "react-icons/fa";

export default function Home() {
  const [openFaq1, setOpenFaq1] = useState(false);
  const [openFaq2, setOpenFaq2] = useState(false);
  const [openFaq3, setOpenFaq3] = useState(false);
  return (
    <div className="container mx-auto p-4">
      {/* Primeira seção */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:max-w-6xl mx-auto p-2 rounded-md mb-20">
        <div className="flex flex-col justify-center space-y-4 text-gray-800 max-w-md mx-auto">
          <h1 className="text-5xl font-extrabold mb-5 text-center md:text-left">
            Crie sua agenda personalizada
          </h1>
          <p className="text-xl text-center md:text-left">
            O Horarioagenda é um quadro branco virtual que ajuda você e sua
            equipe a colaborar e colocar em prática as suas melhores ideias.
            Cadastre-se para uma avaliação gratuita hoje mesmo.
          </p>
          <p>horario agenda</p>
          <div className="flex gap-8 justify-center md:justify-start">
            <button className="px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700 font-bold">
              Fazer agenda
            </button>
            <Link
              href="/"
              className="flex text-[#8075ff] hover:underline items-center font-bold"
            >
              Assistir vídeo
              <FaArrowDown className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>

        <div className="justify-center items-center max-w-md mx-auto hidden md:flex">
          <Image
            src="/background.png"
            alt="Descrição da imagem"
            width={400}
            height={400}
            className="rounded-md"
          />
        </div>
      </div>

      {/* Segunda seção com imagens e descrições empilhadas */}
      <div className="grid grid-cols-1 gap-8 md:max-w-5xl border mx-auto p-2 shadow-[13px_13px_0_rgba(0,0,0,0.1)] rounded-md">
        <h1 className="text-left text-4xl py-10 px-20 font-bold max-w-3xl">
          Planeje sua semana e visualize sua agenda semanal com o{" "}
          <span className="text-[#8075ff]">Horarioagenda</span>
        </h1>

        {/* Primeira imagem e descrição */}
        <div className="flex flex-col md:flex-row w-full gap-4 justify-between items-center">
          <div className="flex justify-center items-center w-full md:w-1/2">
            <Image
              src="/background.png"
              alt="Descrição da imagem"
              width={250}
              height={250}
              className="rounded-md"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-xl font-extrabold">
              Título da Primeira Descrição
            </h2>
            <p className="text-gray-600">
              Descrição da primeira imagem, explicando mais sobre o conteúdo.
            </p>
          </div>
        </div>

        {/* Segunda imagem e descrição */}
        <div className="flex flex-col md:flex-row w-full gap-4 justify-between items-center mb-12">
          <div className="flex justify-center items-center w-full md:w-1/2">
            <Image
              src="/background.png"
              alt="Descrição da imagem"
              width={250}
              height={250}
              className="rounded-md"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-xl font-extrabold">
              Título da Segunda Descrição
            </h2>
            <p className="text-gray-600">
              Descrição da segunda imagem, com mais detalhes sobre o conteúdo.
            </p>
          </div>
        </div>
      </div>

      {/* Última seção ajustada para o mesmo layout */}
      <div className="md:max-w-4xl mx-auto p-6 rounded-md mt-12">
        <h1 className="text-left text-4xl font-extrabold mb-8">
          Como fazer uma agenda
        </h1>
        <div className="flex flex-col gap-10 space-y-6">
          <div className="flex items-start gap-8">
            <h2 className="text-5xl font-extrabold">1</h2>
            <div>
              <h3 className="text-xl mb-3 font-extrabold">
                Priorize suas tarefas
              </h3>
              <p className="text-gray-600">
                Reúna suas tarefas e priorize-as antes de abrir seu planner
                digital. Inclua tarefas pessoais e leve em conta os prazos que
                possam surgir durante a semana.
              </p>
            </div>
          </div>

          {/* Exemplo de outro item na lista */}
          <div className="flex items-start gap-8">
            <h2 className="text-5xl font-extrabold">2</h2>
            <div>
              <h3 className="text-xl mb-3 font-extrabold">
                Defina metas diárias
              </h3>
              <p className="text-gray-600">
                Crie metas diárias para manter o foco e a produtividade ao longo
                da semana.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-8">
            <h2 className="text-5xl font-extrabold">3</h2>
            <div>
              <h3 className="text-xl mb-3 font-extrabold">
                Defina metas diárias
              </h3>
              <p className="text-gray-600">
                Crie metas diárias para manter o foco e a produtividade ao longo
                da semana.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-8">
            <h2 className="text-5xl font-extrabold">4</h2>
            <div>
              <h3 className="text-xl mb-3 font-extrabold">
                Defina metas diárias
              </h3>
              <p className="text-gray-600">
                Crie metas diárias para manter o foco e a produtividade ao longo
                da semana.
              </p>
            </div>
          </div>

          {/* Último botão centralizado no mobile */}
          <div className="flex justify-center md:justify-start">
            <button className="px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700 font-bold">
              Fazer agenda
            </button>
          </div>
        </div>
      </div>

      {/* Nova Div com Fundo Diferente */}
      <div className="bg-[#8075ff] p-8 mt-12 relative">
  <h2 className="text-3xl font-extrabold mb-8 text-center text-white">
    Perguntas frequentes sobre nossa agenda online*
  </h2>

  {/* Perguntas Frequentes (Dropdowns) */}
  <div>
    <div className="border-t max-w-[80%] mx-auto border-gray-300 pt-4">
      <button
        className="w-3/4 mx-auto flex items-center justify-between p-3 text-white font-semibold hover:text-gray-200"
        onClick={() => setOpenFaq1(!openFaq1)}
      >
        Como faço para criar uma agenda?
        <FaArrowDown
          className={`transition-transform ${openFaq1 ? "rotate-180" : ""}`}
        />
      </button>
      {openFaq1 && (
        <div className="w-3/4 mx-auto mt-2 pl-3 text-white">
          Para criar uma agenda, basta acessar o sistema e adicionar suas
          tarefas, definindo as datas e horários.
        </div>
      )}
    </div>

    <div className="border-t max-w-[80%] mx-auto border-gray-300 pt-4">
      <button
        className="w-3/4 mx-auto flex items-center justify-between p-3 text-white font-semibold hover:text-gray-200"
        onClick={() => setOpenFaq2(!openFaq2)}
      >
        Como posso visualizar minha agenda semanal?
        <FaArrowDown
          className={`transition-transform ${openFaq2 ? "rotate-180" : ""}`}
        />
      </button>
      {openFaq2 && (
        <div className="w-3/4 mx-auto mt-2 pl-3 text-white">
          Você pode visualizar sua agenda semanal clicando na opção no
          menu principal.
        </div>
      )}
    </div>

    <div className="border-t max-w-[80%] mx-auto border-gray-300 pt-4">
      <button
        className="w-3/4 mx-auto flex items-center justify-between p-3 text-white font-semibold hover:text-gray-200"
        onClick={() => setOpenFaq3(!openFaq3)}
      >
        O que acontece se eu perder um compromisso?
        <FaArrowDown
          className={`transition-transform ${openFaq3 ? "rotate-180" : ""}`}
        />
      </button>
      {openFaq3 && (
        <div className="w-3/4 mx-auto mt-2 pl-3 text-white">
          Se você perder um compromisso, a agenda será atualizada
          automaticamente com novos lembretes.
        </div>
      )}
    </div>
  </div>
  <h2 className="text-3xl mt-10 font-extrabold text-center text-white">
    See Horarioagenda in action
  </h2>
  <div className="h-[20rem]">

  </div>
</div>

<div className="relative">
  <video
    src="/" // substitua pelo caminho correto do seu vídeo
    controls
    className="relative left-1/2 transform -translate-x-1/2 bottom-[17rem]" // Ajuste para um valor mais negativo
    style={{ width: '70%' }} // ou outro valor de largura conforme necessário
  />
</div>


    </div>
  );
}
