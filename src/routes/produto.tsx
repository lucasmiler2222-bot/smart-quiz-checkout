import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Search, ShoppingBag, User, Facebook, Instagram, Youtube, Truck, CreditCard, Headphones, ZoomIn } from "lucide-react";
import bottleBox from "@/assets/pera-manca-box.png";
import bottleClose from "@/assets/pera-manca-bottle.png";
import dhlLogo from "@/assets/dhl-logo.png";

export const Route = createFileRoute("/produto")({
  component: ProductPage,
  head: () => ({
    meta: [
      { title: "Pêra-Manca Tinto 2019 — DOC Alentejo Évora" },
      { name: "description", content: "Pêra-Manca Tinto 2019 — Edição Especial Comemorativa 250 Anos. 49,90€." },
    ],
  }),
});

const BOTTLE = bottleBox;
const BOTTLE_ALT = bottleClose;

function ProductPage() {
  const images = [BOTTLE, BOTTLE_ALT];
  const [activeImg, setActiveImg] = useState(0);
  const [location, setLocation] = useState<string>("a sua região");

  useEffect(() => {
    let cancelled = false;
    fetch("https://ipwho.is/")
      .then((r) => r.json())
      .then((d) => {
        if (cancelled || !d?.success) return;
        const city = d.city as string | undefined;
        const region = d.region_code || d.region;
        const country = d.country as string | undefined;
        const parts = [city, region].filter(Boolean).join(", ");
        setLocation(parts || country || "a sua região");
      })
      .catch(() => {});
    return () => { cancelled = true; };
  }, []);

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* Top bar */}
      <div className="bg-[#e30613] text-white text-center text-xs py-2 tracking-wide">
        EDIÇÃO LIMITADA · ENVIO SEGURO · ORIGEM COMPROVADA
      </div>

      {/* Header */}
      <header className="border-b">
        <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between gap-6">
          <div className="hidden md:flex items-center gap-2 flex-1 max-w-xs">
            <Search className="w-4 h-4 text-neutral-500" />
            <input
              type="text"
              placeholder="O que procura?"
              className="w-full bg-transparent text-sm outline-none placeholder:text-neutral-500"
            />
          </div>
          <Link to="/" className="text-center">
            <span className="font-bold text-lg">Desafio</span>{" "}
            <span className="text-[#e30613] font-bold text-lg">250 Anos</span>
          </Link>
          <div className="flex items-center gap-4 flex-1 justify-end">
            <a className="text-sm hidden md:inline">Iniciar sessão ›</a>
            <User className="w-5 h-5" />
            <div className="relative">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">0</span>
            </div>
          </div>
        </div>
        <nav className="border-t">
          <div className="mx-auto max-w-7xl px-4 py-3 flex gap-8 text-sm font-medium">
            <Link to="/">INÍCIO</Link>
            <a>CATÁLOGO</a>
            <a>CONTACTO</a>
          </div>
        </nav>
      </header>

      {/* Product */}
      <section className="mx-auto max-w-7xl px-4 py-8 grid md:grid-cols-[100px_1fr_400px] gap-8">
        {/* Thumbs (desktop) */}
        <div className="hidden md:flex flex-col gap-3">
          {images.map((src, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActiveImg(i)}
              className={`border rounded-md p-2 cursor-pointer transition-colors ${
                activeImg === i ? "border-[#e30613] ring-1 ring-[#e30613]" : "border-neutral-200"
              }`}
            >
              <img src={src} alt={`Pêra-Manca thumb ${i + 1}`} className="w-full h-20 object-contain" />
            </button>
          ))}
        </div>

        {/* Main image */}
        <div className="bg-neutral-50 rounded-lg flex items-center justify-center relative min-h-[400px] md:min-h-[500px]">
          <img src={images[activeImg]} alt="Pêra-Manca Tinto 2019" className="max-h-[600px] object-contain" />
          <button className="absolute bottom-4 right-4 bg-white border rounded-full p-2 shadow-sm">
            <ZoomIn className="w-4 h-4" />
          </button>

          {/* Thumbs (mobile) */}
          <div className="md:hidden absolute bottom-3 left-3 flex gap-2">
            {images.map((src, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActiveImg(i)}
                className={`bg-white border rounded-md p-1 transition-colors ${
                  activeImg === i ? "border-[#e30613] ring-1 ring-[#e30613]" : "border-neutral-200"
                }`}
              >
                <img src={src} alt={`thumb ${i + 1}`} className="w-12 h-12 object-contain" />
              </button>
            ))}
          </div>
        </div>

        {/* Info */}
        <aside className="space-y-5">
          <div className="flex items-center gap-2">
            <span className="bg-black text-white text-[11px] font-bold px-2 py-1 rounded">312 RECLAMADO</span>
            <span className="bg-green-500 text-white text-[11px] font-bold px-2 py-1 rounded">DISPONÍVEL</span>
          </div>
          <h1 className="text-2xl font-bold">PÊRA-MANCA TINTO 2019</h1>
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-3xl font-bold">49,90 €</span>
            <span className="text-neutral-400 line-through">499,00 €</span>
            <span className="bg-black text-white text-xs font-bold px-2 py-1 rounded">POUPE 449,10 €</span>
          </div>

          <div className="flex items-start gap-3 border rounded-md p-3 bg-neutral-50">
            <img src={dhlLogo} alt="DHL" className="w-12 h-8 object-contain rounded" />
            <div className="text-sm">
              <div className="font-semibold">Entrega expressa <span className="font-normal">Entrega em 24 horas</span></div>
              <div className="text-neutral-600">para {location}</div>
            </div>
          </div>

          <div>
            <p className="text-center text-sm font-semibold mb-2">Restam apenas 15 unidades disponíveis</p>
            <div className="h-2 bg-neutral-200 rounded-full overflow-hidden">
              <div className="h-full bg-[#e30613]" style={{ width: "60%" }} />
            </div>
          </div>

          <Link
            to="/checkout"
            className="block w-full text-center bg-neutral-900 hover:bg-black text-white font-bold py-4 rounded-md tracking-wide"
          >
            COMPRAR AGORA
          </Link>

          <div className="border rounded-md p-3 flex gap-3 items-start">
            <CreditCard className="w-5 h-5 mt-1" />
            <div className="text-sm">
              <div className="text-neutral-700">Os pagamentos e as informações são seguros</div>
              <div className="text-neutral-500 text-xs mt-1">Site oficial. Todos os direitos reservados</div>
            </div>
          </div>
          <div className="border rounded-md p-3 flex gap-3 items-start">
            <Truck className="w-5 h-5 mt-1" />
            <div className="text-sm">
              <div className="font-semibold">Devoluções gratuitas</div>
              <div className="text-neutral-600 text-xs">Reembolso de 100% do valor</div>
              <div className="text-neutral-500 text-xs">Até 14 dias após a receção do produto.</div>
            </div>
          </div>
        </aside>
      </section>

      {/* Description */}
      <section className="mx-auto max-w-4xl px-4 py-12 space-y-10">
        <div>
          <h2 className="text-xl font-bold">PÊRA-MANCA TINTO 2019 — DOC ALENTEJO ÉVORA</h2>
          <p className="mt-4 text-neutral-700">
            Pêra-Manca é a marca que a Fundação Eugénio de Almeida reserva para os seus vinhos de excepção.
          </p>
          <p className="mt-3 text-neutral-700">
            Produzido a partir das castas Trincadeira e Aragonez, este vinho tinto distingue-se pelo seu perfil encorpado, complexo e elegante.
            Apresenta aromas a passas de frutos e notas provenientes das madeiras de estágio, revelando uma personalidade profunda e sofisticada.
          </p>
        </div>

        <hr />

        <div>
          <h3 className="text-lg font-bold">SOBRE O VINHO</h3>
          <p className="mt-3 text-neutral-700">
            Graças à elevada qualidade dos taninos e das madeiras utilizadas, o Pêra-Manca Tinto é um vinho de grande longevidade,
            que beneficia de algum tempo de guarda para revelar todo o seu potencial.
          </p>
          <p className="mt-3 text-neutral-700">
            Produzido pela primeira vez pela Fundação Eugénio de Almeida em 1990, tornou-se uma referência entre os grandes vinhos do Alentejo.
          </p>
        </div>

        <hr />

        <div>
          <h3 className="text-lg font-bold">FICHA TÉCNICA</h3>
          <ul className="mt-3 space-y-1 text-neutral-700 text-sm">
            <li>• Origem: DOC Alentejo — Évora</li>
            <li>• Castas: Trincadeira e Aragonez</li>
            <li>• Perfil: Encorpado, complexo e elegante</li>
            <li>• Ano: 2019</li>
          </ul>
          <p className="mt-4 text-neutral-700">
            Um vinho de excepção, criado para momentos especiais e para apreciadores que valorizam tradição, qualidade e autenticidade.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 pt-4">
          <div className="flex items-center gap-2 text-sm"><Truck className="w-5 h-5" /> <span className="underline">Acompanhamento da entrega</span></div>
          <div className="flex items-center gap-2 text-sm"><CreditCard className="w-5 h-5" /> <span className="underline">Prioridade</span></div>
          <div className="flex items-center gap-2 text-sm"><Headphones className="w-5 h-5" /> <span className="underline">Suporte profissional</span></div>
        </div>
      </section>

      {/* Sticky bar */}
      <div className="sticky bottom-0 bg-white border-t shadow-lg hidden md:flex items-center justify-between px-6 py-3 max-w-7xl mx-auto">
        <div className="flex items-center gap-4">
          <img src={BOTTLE} alt="Pêra-Manca" className="w-12 h-12 object-contain" />
          <span className="font-medium">Pêra-Manca Tinto 2019</span>
          <span className="text-neutral-500">•</span>
          <span className="font-semibold">€49,90</span>
        </div>
        <Link to="/checkout" className="bg-neutral-900 hover:bg-black text-white font-bold px-6 py-3 rounded-md">
          COMPRAR AGORA
        </Link>
      </div>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white mt-12">
        <div className="mx-auto max-w-7xl px-6 py-12 grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-xs tracking-wider text-neutral-400 mb-4">APOIO AO CLIENTE</h4>
            <p className="text-sm">🕐 Apoio ao cliente: De segunda a sábado, das 10h00 às 19h00</p>
            <p className="text-sm mt-3">✉️ E-mail : support@cartuxa250.com</p>
          </div>
          <div>
            <h4 className="text-xs tracking-wider text-neutral-400 mb-4">EDIÇÕES EXCLUSIVAS</h4>
            <p className="text-sm">Seja informado em primeira mão sobre as próximas edições limitadas da Adega Cartuxa.</p>
            <div className="mt-3 flex">
              <input className="flex-1 bg-neutral-800 px-3 py-2 rounded-l text-sm outline-none" placeholder="O seu e-mail" />
              <button className="bg-neutral-700 px-4 rounded-r">→</button>
            </div>
          </div>
          <div>
            <h4 className="text-xs tracking-wider text-neutral-400 mb-4">REDES SOCIAIS</h4>
            <div className="flex gap-2">
              <a className="w-10 h-10 bg-neutral-800 flex items-center justify-center rounded"><Facebook className="w-4 h-4" /></a>
              <a className="w-10 h-10 bg-neutral-800 flex items-center justify-center rounded"><Instagram className="w-4 h-4" /></a>
              <a className="w-10 h-10 bg-neutral-800 flex items-center justify-center rounded"><Youtube className="w-4 h-4" /></a>
            </div>
          </div>
        </div>
        <div className="bg-neutral-200 text-neutral-700 text-center text-xs py-3">
          © Adega Cartuxa | Fundação Eugénio de Almeida | Todos os direitos reservados. — Pêra-Manca Desafio 250 Anos
        </div>
      </footer>
    </div>
  );
}
