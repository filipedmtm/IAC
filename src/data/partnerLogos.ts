// Official supporters ("Apoiadores") from institutoamorecarinho.org
import alnylam from "@/assets/partners/alnylam.png.asset.json";
import biomarin from "@/assets/partners/biomarin.png.asset.json";
import biopas from "@/assets/partners/biopas.png.asset.json";
import bristol from "@/assets/partners/bristol-myers-squibb.png.asset.json";
import campinas from "@/assets/partners/campinas.png.asset.json";
import chiesi from "@/assets/partners/chiesi.png.asset.json";
import euroMarketing from "@/assets/partners/euro-marketing.png.asset.json";
import healthMeds from "@/assets/partners/health-meds.png.asset.json";
import igeim from "@/assets/partners/igeim.png.asset.json";
import kromos from "@/assets/partners/kromos.png.asset.json";
import medison from "@/assets/partners/medison.png.asset.json";
import mercosur from "@/assets/partners/mercosur.png.asset.json";
import patrulheiros from "@/assets/partners/patrulheiros-campinas.png.asset.json";
import pintPharma from "@/assets/partners/pint-pharma.png.asset.json";
import ptc from "@/assets/partners/ptc-therapeutics.png.asset.json";
import recordati from "@/assets/partners/recordati.png.asset.json";
import steincares from "@/assets/partners/steincares.png.asset.json";
import takeda from "@/assets/partners/takeda.png.asset.json";
import teva from "@/assets/partners/teva.png.asset.json";
import ultragenyx from "@/assets/partners/ultragenyx.png.asset.json";

export type PartnerLogo = { name: string; src: string };

export const partnerLogos: PartnerLogo[] = [
  { name: "Alnylam Pharmaceuticals", src: alnylam.url },
  { name: "BioMarin", src: biomarin.url },
  { name: "Biopas Laboratories", src: biopas.url },
  { name: "Bristol Myers Squibb", src: bristol.url },
  { name: "Chiesi", src: chiesi.url },
  { name: "Health Meds", src: healthMeds.url },
  { name: "IGEIM", src: igeim.url },
  { name: "Kromos", src: kromos.url },
  { name: "Medison", src: medison.url },
  { name: "Pint Pharma", src: pintPharma.url },
  { name: "PTC Therapeutics", src: ptc.url },
  { name: "Recordati", src: recordati.url },
  { name: "SteinCares", src: steincares.url },
  { name: "Takeda", src: takeda.url },
  { name: "Teva", src: teva.url },
  { name: "Ultragenyx", src: ultragenyx.url },
  { name: "Euro Marketing", src: euroMarketing.url },
  { name: "Câmara de Comércio Mercosul", src: mercosur.url },
  { name: "Município de Campinas", src: campinas.url },
  { name: "Patrulheiros de Campinas", src: patrulheiros.url },
];
