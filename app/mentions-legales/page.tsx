import type { Metadata } from "next";
import { LegalPage, H2 } from "@/components/Legal";
import { ENTREPRISE as E } from "@/lib/entreprise";

export const metadata: Metadata = {
  title: "Mentions légales — Panier Perdu",
  description: "Informations légales sur l'éditeur du site Panier Perdu.",
};

export default function MentionsLegales() {
  return (
    <LegalPage titre="Mentions légales" maj={E.maj}>
      <H2>Éditeur du site</H2>
      <p>
        Le site Panier Perdu est édité par {E.nom}, {E.statut}.
      </p>
      <ul className="list-disc space-y-1 pl-5">
        <li>SIRET : {E.siret}</li>
        <li>
          Adresse : {E.adresse}, {E.codePostalVille}
        </li>
        <li>Email : {E.email}</li>
        <li>TVA : {E.tva}</li>
      </ul>

      <H2>Directeur de la publication</H2>
      <p>{E.nom}.</p>

      <H2>Hébergeur</H2>
      <p>
        Le site est hébergé par Vercel Inc., 440 N Barranca Ave #4133, Covina,
        CA 91723, États-Unis (vercel.com).
      </p>

      <H2>Paiement</H2>
      <p>
        Les paiements sont traités par Stripe. Panier Perdu ne voit ni ne
        conserve jamais les numéros de carte bancaire.
      </p>

      <H2>Propriété intellectuelle</H2>
      <p>
        Les textes, la mise en page et le nom Panier Perdu sont la propriété de
        l&apos;éditeur. Toute reproduction sans autorisation est interdite.
      </p>

      <H2>Contact</H2>
      <p>Pour toute question : {E.email}.</p>
    </LegalPage>
  );
}
