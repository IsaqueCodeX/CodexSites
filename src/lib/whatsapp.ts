export const WHATSAPP_NUMBER = "5548984576217";
export const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export const DEFAULT_WHATSAPP_MESSAGE =
  "Olá! Vim pelo site da CodexSites e gostaria de solicitar um orçamento.";

export function getWhatsAppUrl(message: string = DEFAULT_WHATSAPP_MESSAGE): string {
  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`;
}
