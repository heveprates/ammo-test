import { Col, List, Row, Typography } from 'antd';
import { useProdutoListaStore } from '../../stores/ProdutoListaStore';
import ProdutoItem from './ProdutoItem';

export default function Listagem() {
  const data = useProdutoListaStore(
    (state) => state.listaProdutos[state.paginaAtual],
  );
  const [totalProdutos] = useProdutoListaStore((state) => [
    state.totalProdutos,
  ]);

  return (
    <>
      <Row>
        <Col span={24}>
          <Typography.Text style={{ borderBottom: '4px solid #f06b41' }}>
            {totalProdutos} Produtos Encontrados
          </Typography.Text>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <List
            size="large"
            bordered
            dataSource={data}
            renderItem={(item) => (
              <List.Item>
                <ProdutoItem produto={item} />
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </>
  );
}
