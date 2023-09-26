export type ProdutosListInput = {
  id: number;
  nome: string;
  descricao: string;
  precoPromocional: number;
  precoOriginal: number;
  categoria: string;
  imagens: {
    id: number;
    url: string;
    produtoId: number;
  }[];
}[];

export type ProdutosListOutput = {
  id: number;
  nome: string;
  descricao: string;
  categoria: string;
  precoOriginal: number;
  precoPromocional: number;
  imagens: string[];
}[];

export function mapProdutosToResponse(
  produtos: ProdutosListInput,
): ProdutosListOutput {
  return produtos.map((produto) => ({
    id: produto.id,
    nome: produto.nome,
    descricao: produto.descricao,
    categoria: produto.categoria,
    precoOriginal: produto.precoOriginal,
    precoPromocional: produto.precoPromocional,
    imagens: produto.imagens.map((imagem) => imagem.url),
  }));
}
