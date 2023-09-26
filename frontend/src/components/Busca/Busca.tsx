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
  const [porPagina, setListaTodosProdutos, setCarregandoLista] =
    useProdutoListaStore((state) => [
      state.porPagina,
      state.setListaTodosProdutos,
      state.setCarregandoLista,
    ]);

  const onSearch = (value: string) => {
    setTermo(value);
    setCarregandoLista(true);
    fetchAPI({
      pagina: 1,
      porPagina,
      busca: value,
    }).then((response) => {
      setListaTodosProdutos({
        totalProdutos: response.total,
        porPagina,
        paginaAtual: 1,
        produtos: response.produtos,
      });
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
        style={{ width: 260 }}
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
