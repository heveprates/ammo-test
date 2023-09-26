import { Input } from 'antd';

function Busca() {
  const onSearch = (value: string) => console.log(value);

  return (
    <>
      <Input.Search
        placeholder="Pesquise por um produto"
        allowClear
        onSearch={onSearch}
      />
    </>
  );
}

export default Busca;
