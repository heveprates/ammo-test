import { Select } from 'antd';
import React, { useState } from 'react';
import { useProdutoListaStore } from '../../stores/ProdutoListaStore';

function PorPagina() {
  const [porPagina, setPorPagina] = useState('10');
  const porPaginaAtual = useProdutoListaStore((state) => state.porPaginas);

  const handleChange = (value: string) => {
    setPorPagina(value);
  };

  React.useEffect(() => {
    setPorPagina(porPaginaAtual.toString());
  }, [porPaginaAtual]);

  return (
    <>
      <Select
        defaultValue={'10'}
        style={{ width: 220 }}
        onChange={handleChange}
        value={porPagina}
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
