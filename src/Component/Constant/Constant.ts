export const CONTACT_PHONE = '9999999999'
export const CONTACT_EMAIL = 'pixelavenuein@gmail.com'
export const WHATSAPP_PHONE = CONTACT_PHONE

export const CONTACT_LINKS = {
  phone: `tel:${CONTACT_PHONE}`,
  email: `mailto:${CONTACT_EMAIL}`,
  whatsapp: `https://wa.me/${WHATSAPP_PHONE}`,
} as const
