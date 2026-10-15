import type { Metadata } from "next";
import { LegalPage, H2 } from "@/components/Legal";
import { ENTREPRISE as E } from "@/lib/entreprise";

export const metadata: Metadata = {
  title: "Politique de confidentialité — Panier Perdu",
  description: "Quelles données Panier Perdu collecte, pourquoi et comment les exercer tes droits.",
};

export default function Confidentialite() {
  return (
    <LegalPage titre="Politique de confidentialité" maj={E.maj}>
      <H2>Responsable du traitement</H2>
      <p>
        {E.nom}, {E.statut}, SIRET {E.siret}, {E.adresse},{" "}
        {E.codePostalVille}. Contact : {E.email}.
      </p>

      <H2>Données collectées</H2>
      <ul className="list-disc space-y-1 pl-5">
        <li>
          Lors du paiement : ton nom, ton adresse email et les informations de
          facturation, recueillies par Stripe.
        </li>
        <li>
          Lors de nos échanges par email : les informations que tu nous
          envoies.
        </li>
      </ul>
      <p>
        Les numéros de carte bancaire sont traités uniquement par Stripe et ne
        nous parviennent jamais.
      </p>

      <H2>Pourquoi et sur quelle base</H2>
      <ul className="list-disc space-y-1 pl-5">
        <li>
          Exécuter ta commande et te livrer l&apos;accès (exécution du contrat).
        </li>
        <li>
          Émettre les factures et reçus et respecter nos obligations comptables
          (obligation légale).
        </li>
        <li>Répondre à tes demandes (intérêt légitime).</li>
      </ul>

      <H2>Destinataires</H2>
      <p>
        Tes données sont accessibles à l&apos;éditeur et à nos prestataires
        techniques : Stripe (paiement) et Vercel (hébergement). Nous ne vendons
        pas tes données.
      </p>

      <H2>Durée de conservation</H2>
      <p>
        Les données de facturation sont conservées 10 ans, conformément aux
        obligations comptables. Les autres données sont conservées pendant la
        durée de la relation commerciale, puis au maximum 3 ans.
      </p>

      <H2>Cookies et mesure d&apos;audience</H2>
      <p>
        Ce site ne dépose actuellement aucun cookie de suivi publicitaire. Si
        nous ajoutons une mesure d&apos;audience, elle sera respectueuse de la
        vie privée et cette page sera mise à jour.
      </p>

      <H2>Tes droits</H2>
      <p>
        Tu peux demander l&apos;accès, la rectification, l&apos;effacement ou
        la portabilité de tes données, et t&apos;opposer à leur traitement, en
        écrivant à {E.email}. Tu peux aussi introduire une réclamation auprès
        de la CNIL (cnil.fr).
      </p>
    </LegalPage>
  );
}
