import { createFileRoute, Link } from "@tanstack/react-router";
import anniversaryImg from "@/assets/anniversary-250.png";

export const Route = createFileRoute("/")({
  component: Landing,
  head: () => ({
    meta: [
      { title: "Desafio de 250 Anos — Pêra-Manca" },
      { name: "description", content: "Participe no Desafio de 250 Anos da Adega Cartuxa e desbloqueie o Pêra-Manca Tinto 2019." },
    ],
  }),
});

function Landing() {
  return (
    <div className="min-h-screen bg-[#f4f4f4]">
      <div className="h-3 bg-[#e30613]" />
      <main className="mx-auto max-w-2xl px-4 py-10">
        <h1 className="text-center text-3xl md:text-4xl font-extrabold tracking-tight text-black leading-tight">
          Desafio de<br />250 Anos
        </h1>

        <section className="mt-8 rounded-xl bg-white shadow-sm p-6 md:p-10">
          <div className="flex justify-center">
            <img
              src={anniversaryImg}
              alt="250 Anos — Desde 1775"
              className="max-w-[320px] w-full h-auto"
            />
          </div>

          <div className="mt-8 space-y-5 text-center text-[15px] leading-relaxed text-neutral-800">
            <p>
              Em comemoração dos 250 anos de uma herança lendária da nossa Adega
              apresentamos uma acção exclusiva para verdadeiros apreciadores de
              vinho de excelência.
            </p>
            <p>
              Desde 1776, a tradição vinícola de Évora atravessa gerações — e
              hoje, com o <strong>Pêra-Manca Tinto 2019</strong>, atinge o seu
              nível mais icónico.
            </p>
            <p>
              Um vinho raro e profundamente elegante, com notas intensas de
              frutos negros, especiarias e madeira nobre, revelando estrutura,
              complexidade e um final longo e memorável.
            </p>
            <p>
              Participe no <strong>Desafio de 250 Anos</strong>: responda a 5
              perguntas sobre a história da marca e prove que merece um dos
              vinhos mais icónicos de Portugal.
            </p>
            <p>
              As <strong>primeiras 250 pessoas</strong> recebem o{" "}
              <strong>Pêra-Manca Tinto 2019 — edição especial comemorativa</strong>.
            </p>
            <p>
              Uma garrafa avaliada em <strong>499€</strong>, hoje disponível com
              mais de 90% de desconto.
              <br />
              Por apenas <strong>49,90€</strong> — acesso reservado a esta
              celebração única.
            </p>

            <Link
              to="/quiz"
              className="mt-4 inline-flex w-full items-center justify-center rounded-md bg-[#e30613] px-6 py-4 text-base font-bold text-white tracking-wide hover:bg-[#c40510] transition-colors"
            >
              INICIAR O DESAFIO
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
