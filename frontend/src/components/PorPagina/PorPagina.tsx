import { Select } from 'antd';
import React, { useState } from 'react';
import { useProdutoListaStore } from '../../stores/ProdutoListaStore';
import { fetchAPI } from '../../services/fetchProdutosAPI';
import { useQueryStringStore } from '../../stores/QueryStringStore';

function PorPagina() {
  const [input, setInput] = useState('10');
  const [porPagina, setListaTodosProdutos, setCarregandoLista] =
    useProdutoListaStore((state) => [
      state.porPagina,
      state.setListaTodosProdutos,
      state.setCarregandoLista,
    ]);
  const busca = useQueryStringStore((state) => state.termo);

  const fetchProdutos = (porPagina: number) => {
    setCarregandoLista(true);
    fetchAPI({
      pagina: 1,
      porPagina,
      busca,
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
    setInput(value);
    fetchProdutos(parseInt(value));
  };

  React.useEffect(() => {
    setInput(porPagina.toString());
  }, [porPagina]);

  return (
    <>
      <Select
        defaultValue={'10'}
        style={{ width: 120 }}
        onChange={handleChange}
        value={input}
        options={[
          { value: '10', label: '10' },
          { value: '15', label: '15' },
          { value: '20', label: '20' },
          { value: '25', label: '25' },
        ]}
      />
    </>
  );
}

export default PorPagina;
