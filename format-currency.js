const money = 1234567.89;

const moneyBRL = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
}).format(money);

const moneyEUR = new Intl.NumberFormat('de-DE', {
  style: 'currency',
  currency: 'EUR',
}).format(money);

const moneyJPY = new Intl.NumberFormat('ja-JP', {
  style: 'currency',
  currency: 'JPY',
  minimumFractionDigits: 3,
}).format(money);

console.log(moneyBRL); // R$ 1.234.567,89
console.log(moneyEUR); // 1.234.567,89 €
console.log(moneyJPY); // ￥1,234,567.890
