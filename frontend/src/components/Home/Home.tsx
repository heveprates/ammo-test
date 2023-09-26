import { Layout, Space, Row, Col, Typography } from 'antd';
import * as styles from './styles';
import Busca from '../Busca';
import ResultadoBusca from '../ResultadoBusca';
import Listagem from '../Listagem';
import PorPagina from '../PorPagina';
import Paginacao from '../Paginacao';

export default function Home() {
  return (
    <Layout style={styles.containerStyle}>
      <Layout.Header style={styles.headerStyle}>
        <Layout.Content style={styles.contentStyle}>
          <Space direction="vertical" size="large" style={{ width: '100%' }}>
            <Row>
              <Col flex="auto">
                <Typography.Title level={3}>Teste Hévellyn</Typography.Title>
              </Col>
              <Col flex="none">
                <Busca />
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <ResultadoBusca />
              </Col>
            </Row>
            <Listagem />
            <Row align="middle" justify={'space-between'}>
              <Col flex="auto">
                <PorPagina />
              </Col>
              <Col flex="none">
                <Paginacao />
              </Col>
            </Row>
          </Space>
        </Layout.Content>
      </Layout.Header>
    </Layout>
  );
}
