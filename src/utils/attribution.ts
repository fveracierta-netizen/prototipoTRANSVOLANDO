/**
 * Attribution & Marketing Analytics Utility
 *
 * Captures gclid, UTM parameters, entry landing page, device, and service.
 * Persists data across navigation steps in sessionStorage (with in-memory fallback).
 * Dispatches 'lead_empresa026' only after confirmed submission and 'click_tel' on phone calls.
 *
 * IMPORTANT NOTE ON EXTERNAL INTEGRATIONS:
 * There are currently NO real Zoho CRM endpoints, GA4 Measurement IDs, or Google Ads conversion tokens
 * provided in this repository. In accordance with technical requirements, credentials/endpoints are NOT
 * simulated and real network calls are NOT mocked. Dispatch is wired to window.dataLayer for Google Tag
 * Manager compatibility, and backend endpoints remain documented as pending configuration.
 */

export interface AttributionData {
  gclid?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  entrada: string;
  dispositivo: 'móvil' | 'escritorio';
  servicio?: string;
}

const STORAGE_KEY = 'transvolando_attribution';

let inMemoryAttribution: AttributionData | null = null;

export function initializeAttribution(currentService?: string): AttributionData {
  if (typeof window === 'undefined') {
    return {
      entrada: '/',
      dispositivo: 'escritorio',
      servicio: currentService,
    };
  }

  // Check if we already have saved attribution from first page arrival
  try {
    const saved = sessionStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved) as AttributionData;
      if (currentService) parsed.servicio = currentService;
      inMemoryAttribution = parsed;
      return parsed;
    }
  } catch {
    // sessionStorage not available or blocked
  }

  const searchParams = new URLSearchParams(window.location.search);
  const isMobile = window.innerWidth < 1024;

  const data: AttributionData = {
    gclid: searchParams.get('gclid') || undefined,
    utm_source: searchParams.get('utm_source') || undefined,
    utm_medium: searchParams.get('utm_medium') || undefined,
    utm_campaign: searchParams.get('utm_campaign') || undefined,
    utm_term: searchParams.get('utm_term') || undefined,
    utm_content: searchParams.get('utm_content') || undefined,
    entrada: window.location.pathname + window.location.search,
    dispositivo: isMobile ? 'móvil' : 'escritorio',
    servicio: currentService || undefined,
  };

  inMemoryAttribution = data;

  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // Fallback to inMemory
  }

  return data;
}

export function getAttributionData(currentService?: string): AttributionData {
  if (inMemoryAttribution) {
    if (currentService) inMemoryAttribution.servicio = currentService;
    return inMemoryAttribution;
  }
  return initializeAttribution(currentService);
}

/**
 * Fires the confirmed lead conversion event 'lead_empresa026'.
 * Must ONLY be called after user has completed all validation and submission has succeeded.
 */
export function trackLeadSubmitted(details: {
  service?: string;
  companyName?: string;
  contactName?: string;
  origin?: string;
  destination?: string;
}) {
  const attribution = getAttributionData(details.service);

  const payload = {
    event: 'lead_empresa026',
    timestamp: new Date().toISOString(),
    service: details.service || attribution.servicio || 'general',
    company: details.companyName || '',
    contact: details.contactName || '',
    route_origin: details.origin || '',
    route_dest: details.destination || '',
    device: attribution.dispositivo,
    entry_path: attribution.entrada,
    gclid: attribution.gclid || '',
    utm_source: attribution.utm_source || '',
    utm_medium: attribution.utm_medium || '',
    utm_campaign: attribution.utm_campaign || '',
  };

  if (typeof window !== 'undefined') {
    // Standard dataLayer push for GTM / GA4
    const win = window as unknown as { dataLayer?: unknown[] };
    win.dataLayer = win.dataLayer || [];
    win.dataLayer.push(payload);

    // Dispatch standard custom event for listeners
    window.dispatchEvent(new CustomEvent('transvolando_lead_confirmed', { detail: payload }));
  }

  return payload;
}

/**
 * Fires telephone click event 'click_tel' respecting existing consent.
 */
export function trackPhoneClick(phone: string = '674346912') {
  if (typeof window !== 'undefined') {
    const attribution = getAttributionData();
    const payload = {
      event: 'click_tel',
      phone_number: phone,
      device: attribution.dispositivo,
      page: window.location.pathname,
      timestamp: new Date().toISOString(),
    };

    const win = window as unknown as { dataLayer?: unknown[] };
    win.dataLayer = win.dataLayer || [];
    win.dataLayer.push(payload);

    window.dispatchEvent(new CustomEvent('transvolando_click_tel', { detail: payload }));
  }
}
