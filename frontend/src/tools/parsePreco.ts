const formatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

export function parsePreco(preco: number) {
  return formatter.format(preco);
}
