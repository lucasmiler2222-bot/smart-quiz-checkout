import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/checkout")({
  component: CheckoutPage,
  head: () => ({
    meta: [{ title: "Checkout — Pêra-Manca Tinto 2019" }],
  }),
});

const CHECKOUT_URL = "https://checkout.waylinxpay.com/6833046036632739";

function CheckoutPage() {
  useEffect(() => {
    window.location.replace(CHECKOUT_URL);
  }, []);

  return (
    <div className="min-h-screen bg-[#f4f4f4] flex items-center justify-center">
      <div className="text-center">
        <p className="text-neutral-700">A redirecionar para o checkout seguro...</p>
        <a href={CHECKOUT_URL} className="mt-3 inline-block text-[#e30613] underline">
          Clique aqui se não for redirecionado
        </a>
      </div>
    </div>
  );
}
