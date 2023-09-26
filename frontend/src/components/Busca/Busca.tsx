import { Input } from 'antd';
import React, { useState } from 'react';
import { useQueryStringStore } from '../../stores/QueryStringStore';

function Busca() {
  const [inputText, setInputText] = useState('');
  const novoTermo = useQueryStringStore((state) => state.termo);
  const setTermo = useQueryStringStore((state) => state.setTermo);

  const onSearch = (value: string) => {
    setTermo(value);
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
