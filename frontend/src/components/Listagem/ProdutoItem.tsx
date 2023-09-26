import { List, Space, Typography } from 'antd';
import { ProdutoType } from '../../stores/ProdutoListaStore';
import { parsePreco } from '../../tools/parsePreco';
import ProdutoImagens from './ProdutoImagens';

type ProdutoItemProps = {
  produto: ProdutoType;
};

function ProdutoItem({ produto }: ProdutoItemProps) {
  return (
    <>
      <List.Item.Meta
        avatar={<ProdutoImagens imagens={produto.imagens} />}
        title={produto.nome}
        description={
          <Typography.Paragraph
            type="secondary"
            ellipsis={{ rows: 2, expandable: false }}
          >
            <Typography.Text keyboard>{produto.categoria}</Typography.Text>
            <Typography.Text type="secondary">
              {' '}
              {produto.descricao}
            </Typography.Text>
          </Typography.Paragraph>
        }
      />
      <Space size={'small'}>
        <Typography.Text delete>
          {parsePreco(produto.precoOriginal)}
        </Typography.Text>
        por
        <Typography.Text strong>
          {parsePreco(produto.precoPromocional)}
        </Typography.Text>
      </Space>
    </>
  );
}

export default ProdutoItem;
