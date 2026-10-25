export function formatPhoneNumber(rawValue) {
  const digits = rawValue.replace(/\D/g, '').slice(0, 10)
  return digits.match(/.{1,2}/g)?.join(' ') ?? digits
}
