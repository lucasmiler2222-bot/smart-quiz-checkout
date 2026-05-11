import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/checkout")({
  component: CheckoutPage,
  head: () => ({
    meta: [{ title: "Checkout — Pêra-Manca Tinto 2019" }],
  }),
});

function CheckoutPage() {
  return (
    <div className="min-h-screen bg-[#f4f4f4]">
      <div className="h-3 bg-[#e30613]" />
      <main className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="text-2xl font-bold text-center">Finalizar Compra</h1>
        <div className="mt-8 rounded-xl bg-white shadow-sm p-8 text-center">
          <p className="text-neutral-700">
            Aguardando layout da página de checkout. Envie a imagem para que eu replique exatamente.
          </p>
          <Link to="/produto" className="mt-6 inline-block text-[#e30613] underline">
            ← Voltar ao produto
          </Link>
        </div>
      </main>
    </div>
  );
}
