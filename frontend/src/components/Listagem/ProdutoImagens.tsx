import { Space } from 'antd';

type ProdutoImagensProps = {
  imagens: string[];
};

function ProdutoImagens({ imagens }: ProdutoImagensProps) {
  const imagesToShow = imagens.slice(0, 4);
  return (
    <Space
      align="center"
      style={{
        height: 60,
        width: '100%',
        justifyContent: 'space-around',
      }}
    >
      {imagesToShow.map((imagem) => (
        <img
          style={{ objectFit: 'contain', width: 55, height: 55 }}
          src={imagem}
          key={imagem}
        />
      ))}
    </Space>
  );
}

export default ProdutoImagens;
