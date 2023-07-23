export default function formattedBalance(balance) {
  const usFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(balance)
  return usFormat
}
