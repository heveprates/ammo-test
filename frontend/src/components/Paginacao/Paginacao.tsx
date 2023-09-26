import { Pagination } from 'antd';
import { useProdutoListaStore } from '../../stores/ProdutoListaStore';

function Paginacao() {
  const currentPage = useProdutoListaStore((state) => state.paginaAtual);
  const porPages = useProdutoListaStore((state) => state.porPaginas);
  const totalProdutos = useProdutoListaStore((state) => state.totalProdutos);

  return (
    <>
      <Pagination
        current={currentPage}
        pageSize={porPages}
        total={totalProdutos}
        showSizeChanger={false}
      />
    </>
  );
}

export default Paginacao;
