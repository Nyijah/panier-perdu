"use client";

import Link from "next/link";

export default function Erreur({ reset }: { reset: () => void }) {
  return (
    <main className="mx-auto w-full max-w-2xl px-5 py-20">
      <h1 className="font-titre text-4xl font-bold">
        Un problème est survenu.
      </h1>
      <p className="mt-4 text-lg">
        Ce n&apos;est pas de ta faute. Tu peux réessayer, ou revenir à
        l&apos;accueil.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <button
          onClick={() => reset()}
          className="flex min-h-14 items-center justify-center rounded-lg bg-brique px-6 text-lg font-semibold text-white"
        >
          Réessayer
        </button>
        <Link
          href="/"
          className="flex min-h-14 items-center justify-center rounded-lg border-2 border-encre px-6 text-lg font-semibold"
        >
          Retour à l&apos;accueil
        </Link>
      </div>
    </main>
  );
}
