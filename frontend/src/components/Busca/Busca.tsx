import { Input } from 'antd';
import React, { useState } from 'react';
import { useQueryStringStore } from '../../stores/QueryStringStore';
import { fetchAPI } from '../../services/fetchProdutosAPI';
import { useProdutoListaStore } from '../../stores/ProdutoListaStore';

function Busca() {
  const [inputText, setInputText] = useState('');
  const [novoTermo, setTermo] = useQueryStringStore((state) => [
    state.termo,
    state.setTermo,
  ]);
  const [porPagina, setListaTodosProdutos] = useProdutoListaStore((state) => [
    state.porPagina,
    state.setListaTodosProdutos,
  ]);

  const onSearch = async (value: string) => {
    setTermo(value);
    const response = await fetchAPI({
      pagina: 1,
      porPagina,
      busca: value,
    });
    setListaTodosProdutos({
      totalProdutos: response.total,
      porPagina,
      paginaAtual: 1,
      produtos: response.produtos,
    });
  };

  const handleChange = (value: string) => {
    setInputText(value);
  };

  React.useEffect(() => {
    setInputText(novoTermo);
  }, [novoTermo]);

  return (
    <>
      <Input.Search
        placeholder="Pesquise por um produto"
        allowClear
        value={inputText}
        onSearch={onSearch}
        onChange={(e) => handleChange(e.target.value)}
      />
    </>
  );
}

export default Busca;
