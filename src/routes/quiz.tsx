import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/quiz")({
  component: QuizPage,
  head: () => ({
    meta: [{ title: "Desafio de 250 Anos — Quiz" }],
  }),
});

type Question = {
  question: string;
  options: string[];
  correctIndex: number;
};

const QUESTIONS: Question[] = [
  {
    question: "Em que ano foi fundada a nossa adega, em Évora?",
    options: ["1820", "1776", "1901"],
    correctIndex: 1,
  },
  {
    question: "Em que região vinícola portuguesa é produzido o Pêra-Manca Tinto?",
    options: ["Douro", "Alentejo", "Bairrada"],
    correctIndex: 1,
  },
  {
    question: "Qual das seguintes características descreve melhor o perfil do Pêra-Manca Tinto?",
    options: [
      "Leve, fresco e frutado",
      "Jovem, simples e fácil de beber",
      "Estruturado, complexo e com longa capacidade de guarda",
    ],
    correctIndex: 2,
  },
  {
    question: "Qual das seguintes notas aromáticas está presente no Pêra-Manca Tinto 2019?",
    options: [
      "Citrinos e flores brancas",
      "Frutos negros, especiarias e madeira nobre",
      "Maçã verde e ervas frescas",
    ],
    correctIndex: 1,
  },
  {
    question: "O que desbloqueiam as primeiras 250 pessoas ao concluir o nosso Desafio?",
    options: [
      "Uma visita guiada à Adega",
      "O Pêra-Manca Tinto 2019 – Edição Especial Comemorativa",
      "Um livro sobre a história do vinho alentejano",
    ],
    correctIndex: 1,
  },
];

function QuizPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [wrongSet, setWrongSet] = useState<Set<number>>(new Set());

  const q = QUESTIONS[step];
  const isLast = step === QUESTIONS.length - 1;
  const progress = Math.round((step / QUESTIONS.length) * 100);
  const isCorrect = selected !== null && selected === q.correctIndex;

  const handleSelect = (idx: number) => {
    if (isCorrect) return; // locked once correct
    setSelected(idx);
    if (idx !== q.correctIndex) {
      setWrongSet((prev) => new Set(prev).add(idx));
    }
  };

  const handleContinue = () => {
    if (!isCorrect) return;
    if (isLast) {
      navigate({ to: "/sucesso" });
      return;
    }
    setStep((s) => s + 1);
    setSelected(null);
    setWrongSet(new Set());
  };

  const optionClass = (idx: number) => {
    const base =
      "w-full rounded-full border px-5 py-3 text-center text-[15px] transition-colors";
    if (wrongSet.has(idx)) {
      return `${base} border-red-500 bg-red-100 text-red-700 cursor-pointer`;
    }
    if (selected === idx && idx === q.correctIndex) {
      return `${base} border-green-500 bg-green-100 text-green-700 font-semibold cursor-default`;
    }
    if (isCorrect) {
      return `${base} border-neutral-200 bg-neutral-50 text-neutral-400 cursor-not-allowed`;
    }
    return `${base} border-neutral-300 bg-neutral-50 text-neutral-800 hover:bg-neutral-100 cursor-pointer`;
  };

  return (
    <div className="min-h-screen bg-[#f4f4f4]">
      <div className="h-3 bg-[#e30613]" />
      <main className="mx-auto max-w-2xl px-4 py-10">
        <h1 className="text-center text-3xl md:text-4xl font-extrabold tracking-tight text-black leading-tight">
          Desafio de<br />250 Anos
        </h1>

        <section className="mt-8 rounded-xl bg-white shadow-sm p-6 md:p-10">
          <h2 className="text-center text-xl font-bold text-black">
            Desafio de 250 Anos
          </h2>
          <p className="mt-2 text-center text-[15px] text-neutral-700">
            {q.question}
          </p>

          <div className="mt-6 space-y-3">
            {q.options.map((opt, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleSelect(idx)}
                disabled={wrongSet.has(idx) ? false : isCorrect && idx !== q.correctIndex}
                className={optionClass(idx)}
              >
                {opt}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={handleContinue}
            disabled={!isCorrect}
            className="mt-6 w-full rounded-md bg-[#e30613] px-6 py-3.5 text-base font-bold text-white tracking-wide hover:bg-[#c40510] disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
          >
            CONTINUAR
          </button>

          <p className="mt-4 text-right text-sm font-bold text-green-600">
            Progresso: {progress}%
          </p>
        </section>
      </main>
    </div>
  );
}
