import { createFileRoute, Link } from "@tanstack/react-router";
import bottleBox from "@/assets/pera-manca-box.png";

export const Route = createFileRoute("/sucesso")({
  component: SuccessPage,
  head: () => ({
    meta: [{ title: "Parabéns! — Pêra-Manca Tinto 2019" }],
  }),
});

function SuccessPage() {
  return (
    <div className="min-h-screen bg-[#f4f4f4]">
      <div className="h-3 bg-[#e30613]" />
      <main className="mx-auto max-w-2xl px-4 py-10">
        <h1 className="text-center text-3xl md:text-4xl font-extrabold tracking-tight text-black leading-tight">
          Desafio de<br />250 Anos
        </h1>

        <section className="mt-8 rounded-xl bg-white shadow-sm p-6 md:p-10">
          <h2 className="text-center text-2xl font-bold text-black">
            Parabéns! 🌟
          </h2>
          <p className="mt-3 text-center text-[15px] text-neutral-800">
            Provou o seu conhecimento e desbloqueou o{" "}
            <strong>
              Pêra-Manca Tinto 2019 – Edição Especial Comemorativa 250 Anos
            </strong>
            .
          </p>

          <div className="mt-8 flex justify-center">
            <img
              src={bottleBox}
              alt="Pêra-Manca Tinto 2019 com caixa de madeira"
              className="max-h-96 object-contain"
            />
          </div>

          <div className="mt-8 space-y-4 text-center text-[15px] text-neutral-800">
            <p>
              Uma garrafa avaliada em <strong>499€</strong>, disponível agora
              com mais de 90% de desconto.
              <br />
              Por apenas <strong>49,90€</strong> — acesso reservado a esta
              celebração única.
            </p>
            <p>
              ⚠️ Restam apenas <strong>250 garrafas</strong> disponíveis nesta
              edição comemorativa. Quando se esgotarem, esta ação encerra
              definitivamente.
            </p>
            <p>
              🍷 Há 250 anos a definir a excelência vinícola portuguesa — um
              vinho inconfundível que atravessa gerações. Agora, pode fazer
              parte da sua história.
            </p>

            <Link
              to="/produto"
              className="mt-4 inline-flex w-full items-center justify-center rounded-md bg-[#e30613] px-6 py-4 text-base font-bold text-white tracking-wide hover:bg-[#c40510] transition-colors"
            >
              RESGATAR PÊRA-MANCA
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
