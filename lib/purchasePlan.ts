export type PurchaseItem = {
  id: string;
  product: string;
  qty: number;
  fit_specs: string;
  notes: string;
  was_optional_opted_in?: boolean;
  alternate?: string;
};

export type PurchaseSection = {
  key: string;
  title: string;
  items: PurchaseItem[];
};

export const PURCHASE_PLAN: {
  title: string;
  subtitle: string;
  architecture_summary: string;
  sections: PurchaseSection[];
} = {
  title: "Reolink Two-Zone Security System Purchase Plan (House + Detached Garage)",
  subtitle: "Shopping-ready manifest grouped A–G with pinned models, quantities, fit specs, and install notes. No subscription assumptions; local-first posture.",
  architecture_summary: "Zone A (House H1–H4): 4× Reolink Argus 3 Ultra cameras on Wi-Fi to Netgear R7000 for real-time streaming; no microSD. Zone B (Garage G1–G2): 2× Reolink Argus 3 Ultra on Wi-Fi to TP-Link Archer A6 in AP mode; backhaul via TP-Link TL-PA9020P powerline to house router; local microSD + scheduled uploads due to ~30 Mbps bottleneck. Reolink Home Hub at house as the central brain with siren capability and centralized storage.",
  sections: []
};
