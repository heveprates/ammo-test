import { ProdutoType } from '../stores/ProdutoListaStore';

type FetchProdutosParams = {
  busca?: string;
  pagina: number;
  porPagina: number;
};

function mapProdutoAPItoProduto(produto: any): ProdutoType {
  return {
    id: produto.id,
    nome: produto.title,
    categoria: produto.category,
    descricao: produto.description,
    imagens: produto.images,
    precoOriginal: produto.price,
    precoPromocional: produto.price * (1 - produto.discountPercentage / 100),
  };
}

export const fetchAPI = async ({
  busca,
  pagina,
  porPagina,
}: FetchProdutosParams): Promise<{
  total: number;
  produtos: ProdutoType[];
}> => {
  const params = new URLSearchParams();
  let url = 'https://dummyjson.com/products';
  params.append('limit', String(porPagina));
  params.append('skip', String((pagina - 1) * porPagina));
  if (busca) {
    url += '/search';
    params.append('q', busca);
  }

  const response = await fetch(`${url}?${params}`);
  const json = await response.json();
  return {
    total: json.total,
    produtos: json.products.map(mapProdutoAPItoProduto),
  };
};
