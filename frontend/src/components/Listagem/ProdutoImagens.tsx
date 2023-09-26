import { Space } from 'antd';

type ProdutoImagensProps = {
  imagens: string[];
};

function ProdutoImagens({ imagens }: ProdutoImagensProps) {
  const imagesToShow = imagens.slice(0, 4);
  return (
    <Space>
      {imagesToShow.map((imagem) => (
        <img
          style={{ objectFit: 'cover' }}
          width={50}
          height={50}
          src={imagem}
          key={imagem}
        />
      ))}
    </Space>
  );
}

export default ProdutoImagens;
