import Link from "next/link";

export function LegalPage({
  titre,
  maj,
  children,
}: {
  titre: string;
  maj: string;
  children: React.ReactNode;
}) {
  return (
    <main className="mx-auto w-full max-w-2xl px-5 pb-16 pt-8 sm:pt-14">
      <Link href="/" className="text-sm font-semibold text-sapin underline">
        &larr; Retour à l&apos;accueil
      </Link>
      <h1 className="mt-6 font-titre text-4xl font-bold leading-tight">
        {titre}
      </h1>
      <p className="mt-2 text-sm text-encre/70">Dernière mise à jour : {maj}</p>
      <div className="mt-8 space-y-4 leading-relaxed">{children}</div>
    </main>
  );
}

export function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="pt-4 font-titre text-2xl font-bold">{children}</h2>
  );
}
