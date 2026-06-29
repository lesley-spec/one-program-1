/*
  Action Explorer — Account branding registry.

  Each account drives the branded header logo + name and a single
  --explorer-accent CSS variable scoped to the Action Explorer subtree.
  All other surfaces remain on the global theme tokens.
*/

export interface Account {
  id: string;
  name: string;
  /** Hex accent color used for --explorer-accent inside Action Explorer only. */
  accent: string;
  /** Compact monogram shown in the rounded brand chip. */
  monogram: string;
}

export const ACCOUNTS: Account[] = [
  { id: "bestbuy", name: "Best Buy",  accent: "#0046BE", monogram: "BB" },
  { id: "target",  name: "Target",    accent: "#CC0000", monogram: "T"  },
  { id: "wayfair", name: "Wayfair",   accent: "#7B189F", monogram: "W"  },
  { id: "nike",    name: "Nike",      accent: "#111111", monogram: "N"  },
];

export const DEFAULT_ACCOUNT_ID = "bestbuy";

export function getAccount(id: string): Account {
  return ACCOUNTS.find((a) => a.id === id) || ACCOUNTS[0];
}
