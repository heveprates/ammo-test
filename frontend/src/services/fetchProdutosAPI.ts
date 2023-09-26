import { ProdutoType } from '../stores/ProdutoListaStore';

const API_URL = import.meta.env.VITE_API_URL;

type FetchProdutosParams = {
  busca?: string;
  pagina: number;
  porPagina: number;
};

function mapProdutoAPItoProduto(produto: any): ProdutoType {
  return {
    id: produto.id,
    nome: produto.nome,
    categoria: produto.categoria,
    descricao: produto.descricao,
    imagens: produto.imagens,
    precoOriginal: produto.precoOriginal,
    precoPromocional: produto.precoPromocional,
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
  let url = `${API_URL}/produtos`;
  params.append('limit', String(porPagina));
  params.append('offset', String((pagina - 1) * porPagina));
  if (busca) {
    params.append('search', busca);
  }

  const response = await fetch(`${url}?${params}`);
  const json = await response.json();
  return {
    total: json.total,
    produtos: json.products.map(mapProdutoAPItoProduto),
  };
};
