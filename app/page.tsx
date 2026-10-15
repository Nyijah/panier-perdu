import { PAYMENT_URL } from "@/lib/config";

function Cta({ className = "" }: { className?: string }) {
  const base =
    "flex min-h-14 w-full items-center justify-center rounded-lg px-6 text-lg font-semibold sm:w-auto";
  if (!PAYMENT_URL) {
    return (
      <span
        className={`${base} cursor-not-allowed bg-trait text-encre/60 ${className}`}
        aria-disabled="true"
      >
        Paiement bientôt ouvert
      </span>
    );
  }
  return (
    <a
      href={PAYMENT_URL}
      className={`${base} bg-brique text-white active:opacity-90 ${className}`}
    >
      Réserver mon accès fondateur
    </a>
  );
}

const benefices = [
  {
    titre: "Deux relances, pas dix",
    texte:
      "Un premier email pour rappeler le panier, un second quelques heures plus tard, avec un code de réduction si tu le souhaites.",
  },
  {
    titre: "Personnalisées",
    texte:
      "Chaque email reprend les produits que ton client a laissés dans son panier, avec le nom de ta boutique.",
  },
  {
    titre: "Un chiffre qui parle",
    texte:
      "Un compteur te montre, en euros, ce que les relances ont réellement rapporté à ta boutique.",
  },
];

export default function Accueil() {
  return (
    <main className="mx-auto w-full max-w-2xl px-5 pb-16 pt-8 sm:pt-14">
      <p className="text-sm font-semibold uppercase tracking-wide text-sapin">
        Pour les boutiques Shopify et WooCommerce
      </p>

      <h1 className="mt-4 font-titre text-4xl font-bold leading-tight sm:text-5xl">
        Tes clients ont rempli leur panier.{" "}
        <span className="text-brique">Récupère-les pour 29&nbsp;€ par mois.</span>
      </h1>

      <p className="mt-5 text-lg leading-relaxed">
        Environ 7&nbsp;paniers sur 10 sont abandonnés avant le paiement
        (source&nbsp;: Baymard Institute). Les outils de relance classiques sont
        pensés pour de gros volumes et coûtent trop cher pour une boutique qui
        fait quelques dizaines de commandes par mois. Résultat&nbsp;: personne
        ne relance, et l&apos;argent reste sur la table.
      </p>

      <div className="mt-8">
        <Cta />
        <p className="mt-3 text-sm text-encre/70">
          Sans engagement, résiliable à tout moment.
        </p>
      </div>

      <ul className="mt-12 space-y-6 border-t border-trait pt-8">
        {benefices.map((b) => (
          <li key={b.titre}>
            <h2 className="font-titre text-xl font-bold">{b.titre}</h2>
            <p className="mt-1 leading-relaxed">{b.texte}</p>
          </li>
        ))}
      </ul>

      <section
        id="offre"
        className="mt-12 rounded-lg border-2 border-encre bg-white p-6"
      >
        <h2 className="font-titre text-2xl font-bold">
          Offre fondatrice, en toute transparence
        </h2>
        <p className="mt-3 leading-relaxed">
          Panier Perdu est en construction. Les premiers accès sont livrés
          d&apos;ici 14&nbsp;jours, par email. Les clients fondateurs
          participent à la mise au point du produit et gardent le prix de
          29&nbsp;€ par mois et par boutique.
        </p>
        <p className="mt-4 rounded-md bg-papier p-4 font-semibold leading-relaxed">
          Remboursé en totalité sous 14&nbsp;jours, sur simple email, sans avoir
          à te justifier. Si l&apos;accès n&apos;est pas livré à temps, tu es
          remboursé aussi.
        </p>
        <div className="mt-6">
          <Cta />
          <p className="mt-3 text-sm text-encre/70">
            Sans engagement, résiliable à tout moment.
          </p>
        </div>
      </section>
    </main>
  );
}
