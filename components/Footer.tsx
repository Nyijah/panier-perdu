import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-2xl border-t border-trait px-5 py-8 text-sm">
      <nav className="flex flex-col gap-3 sm:flex-row sm:gap-6">
        <Link href="/mentions-legales" className="underline">
          Mentions légales
        </Link>
        <Link href="/cgv" className="underline">
          Conditions générales de vente
        </Link>
        <Link href="/confidentialite" className="underline">
          Politique de confidentialité
        </Link>
      </nav>
      <p className="mt-4 text-encre/70">© Panier Perdu</p>
    </footer>
  );
}
