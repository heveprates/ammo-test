import { Pagination } from 'antd';
import { useProdutoListaStore } from '../../stores/ProdutoListaStore';
import React from 'react';
import { fetchAPI } from '../../services/fetchProdutosAPI';
import { useQueryStringStore } from '../../stores/QueryStringStore';

function Paginacao() {
  const [input, setInput] = React.useState(1);
  const [currentPage, porPages, totalProdutos, setListaPaginaAtual] =
    useProdutoListaStore((state) => [
      state.paginaAtual,
      state.porPagina,
      state.totalProdutos,
      state.setListaPaginaAtual,
    ]);
  const busca = useQueryStringStore((state) => state.termo);

  async function handleChange(value: number) {
    setInput(value);
    const response = await fetchAPI({
      pagina: value,
      porPagina: porPages,
      busca: busca,
    });
    setListaPaginaAtual({
      listaProdutos: response.produtos,
      paginaAtual: value,
    });
  }

  React.useEffect(() => {
    setInput(currentPage);
  }, [currentPage]);

  return (
    <>
      <Pagination
        current={input}
        pageSize={porPages}
        total={totalProdutos}
        showSizeChanger={false}
        onChange={handleChange}
      />
    </>
  );
}

export default Paginacao;
