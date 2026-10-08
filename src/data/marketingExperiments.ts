/**
 * Marketing A/B Experimentation Proposal Document
 *
 * Prepared for ad campaign resumption (Google Ads / LinkedIn Ads).
 * NOTE: As requested in technical specifications, NO active runtime experiment is enabled
 * and NO winner is declared. This file documents the hypothesis and copy variants for
 * administrative review and approval.
 */

export interface ABVariant {
  id: string;
  name: string;
  heroHeadlineMobile: string;
  heroHeadlineDesktop: string;
  ctaText: string;
  hypothesis: string;
  targetAudience: string;
}

export const MARKETING_AB_PROPOSAL = {
  status: 'PENDIENTE_DE_APROBACION',
  lastUpdated: '2026-10-08',
  objective: 'Optimizar la conversión a solicitud de presupuesto B2B sin fricción',
  notes:
    'No activar en producción hasta que se aprueben las directrices de campaña y se definan los identificadores oficiales en GA4 y Google Ads.',
  variants: [
    {
      id: 'variant-control-a',
      name: 'Variante A (Control Actual Aprobado)',
      heroHeadlineMobile: 'Tu transporte, con presupuesto personalizado',
      heroHeadlineDesktop: 'Agencia de Transporte para Empresas en España y Europa',
      ctaText: 'Quiero mi presupuesto',
      hypothesis:
        'El enfoque directo centrado en presupuesto personalizado genera confianza inmediata para tráfico corporativo cualificado.',
      targetAudience: 'Búsqueda transaccional de empresas con necesidad inmediata de transporte.',
    },
    {
      id: 'variant-candidate-b',
      name: 'Variante B (Candidata Propuesta - Pendiente de Aprobación)',
      heroHeadlineMobile: 'Un gestor, una llamada, tres opciones',
      heroHeadlineDesktop: 'Un gestor, una llamada, tres opciones de transporte para tu empresa',
      ctaText: 'Pedir presupuesto personalizado',
      hypothesis:
        'Enfatizar el modelo de gestor único y la claridad de recibir tres opciones sin coste reduce la percepción de fricción administrativa.',
      targetAudience: 'Directores de logística y compras industriales insatisfechos con centralitas impersonales.',
    },
  ] as ABVariant[],
};
