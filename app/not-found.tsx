import Link from "next/link";

export default function NonTrouve() {
  return (
    <main className="mx-auto w-full max-w-2xl px-5 py-20">
      <p className="text-sm font-semibold uppercase tracking-wide text-brique">
        Erreur 404
      </p>
      <h1 className="mt-3 font-titre text-4xl font-bold">
        Cette page n&apos;existe pas.
      </h1>
      <p className="mt-4 text-lg">
        Le lien est peut-être incorrect ou la page a été déplacée.
      </p>
      <Link
        href="/"
        className="mt-8 flex min-h-14 w-full items-center justify-center rounded-lg bg-encre px-6 text-lg font-semibold text-white sm:w-auto"
      >
        Retour à l&apos;accueil
      </Link>
    </main>
  );
}
