import type { Metadata } from "next";
import { LegalPage, H2 } from "@/components/Legal";
import { ENTREPRISE as E } from "@/lib/entreprise";

export const metadata: Metadata = {
  title: "Conditions générales de vente — Panier Perdu",
  description:
    "Prix, livraison, remboursement et résiliation de l'abonnement Panier Perdu.",
};

export default function Cgv() {
  return (
    <LegalPage titre="Conditions générales de vente" maj={E.maj}>
      <H2>1. Vendeur</H2>
      <p>
        {E.nom}, {E.statut}, SIRET {E.siret}, {E.adresse}, {E.codePostalVille}.
        Contact : {E.email}.
      </p>

      <H2>2. Objet</H2>
      <p>
        Panier Perdu est un service en ligne destiné aux boutiques Shopify et
        WooCommerce. Il lit les paniers abandonnés de la boutique et envoie deux
        relances écrites et personnalisées aux clients concernés, avec un code
        de réduction facultatif sur la seconde relance, et affiche le chiffre
        d&apos;affaires récupéré.
      </p>

      <H2>3. Offre fondatrice</H2>
      <p>
        Le service est en cours de développement. Les clients de l&apos;offre
        fondatrice reçoivent leur accès par email dans un délai maximum de 14
        jours à compter du paiement. Ils conservent le tarif de 29 € par mois
        et par boutique tant que leur abonnement reste actif.
      </p>

      <H2>4. Prix et paiement</H2>
      <p>
        L&apos;abonnement coûte 29 € par mois et par boutique, relances
        illimitées. {E.tva}
      </p>
      <p>
        Le paiement s&apos;effectue par carte bancaire via Stripe, à la
        souscription puis chaque mois à la même date. Un reçu est envoyé par
        email.
      </p>

      <H2>5. Durée et résiliation</H2>
      <p>
        L&apos;abonnement est sans engagement. Tu peux le résilier à tout
        moment en écrivant à {E.email}. La résiliation prend effet à la fin de
        la période mensuelle en cours, et aucun nouveau prélèvement n&apos;est
        effectué ensuite.
      </p>

      <H2>6. Garantie satisfait ou remboursé</H2>
      <p>
        Tu peux demander le remboursement intégral de ton premier paiement dans
        les 14 jours qui suivent ton achat, sans avoir à te justifier, en
        écrivant à {E.email}. Le remboursement est effectué sous 5 jours
        ouvrés sur le moyen de paiement utilisé.
      </p>
      <p>
        Si l&apos;accès n&apos;est pas livré dans les 14 jours suivant le
        paiement, tu peux aussi demander le remboursement complet.
      </p>

      <H2>7. Droit de rétractation</H2>
      <p>
        Si tu agis en tant que consommateur, tu disposes d&apos;un délai légal
        de rétractation de 14 jours à compter de la souscription. La garantie
        de remboursement ci-dessus s&apos;applique dans tous les cas, y compris
        si tu agis en tant que professionnel.
      </p>

      <H2>8. Responsabilité</H2>
      <p>
        Panier Perdu met en œuvre les moyens raisonnables pour assurer le
        service, sans garantir un niveau de chiffre d&apos;affaires récupéré
        précis. La responsabilité de l&apos;éditeur est limitée aux sommes
        payées au cours des 12 derniers mois, dans la mesure permise par la loi.
      </p>

      <H2>9. Données personnelles</H2>
      <p>
        Le traitement des données est décrit dans la politique de
        confidentialité du site.
      </p>

      <H2>10. Médiation et droit applicable</H2>
      <p>
        En cas de litige, contacte-nous d&apos;abord à {E.email}. Si tu es
        consommateur, tu peux ensuite recourir gratuitement au médiateur de la
        consommation : {E.mediateur}
      </p>
      <p>
        Les présentes conditions sont soumises au droit français. À défaut de
        solution amiable, les tribunaux français sont compétents.
      </p>
    </LegalPage>
  );
}
