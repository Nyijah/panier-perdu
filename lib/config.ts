// Lien de paiement Stripe : on le branchera à l'étape 2.
// Tant qu'il est vide, le bouton affiche « Paiement bientôt ouvert ».
export const PAYMENT_URL = process.env.NEXT_PUBLIC_PAYMENT_URL ?? "";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://panier-perdu.vercel.app";
