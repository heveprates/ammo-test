import Home from './components/Home';
import { fetchAPI } from './services/fetchProdutosAPI';
import { useProdutoListaStore } from './stores/ProdutoListaStore';
import React from 'react';

const unsubscribe = useProdutoListaStore.subscribe(async (state) => {
  unsubscribe();
  const response = await fetchAPI({
    pagina: state.paginaAtual,
    porPagina: state.porPagina,
  });
  useProdutoListaStore.getState().setListaTodosProdutos({
    totalProdutos: response.total,
    porPagina: state.porPagina,
    paginaAtual: state.paginaAtual,
    produtos: response.produtos,
  });
});

function App() {
  const setListaTodosProdutos = useProdutoListaStore(
    (state) => state.setListaTodosProdutos,
  );

  React.useEffect(() => {
    setListaTodosProdutos({
      produtos: [],
      paginaAtual: 1,
      porPagina: 10,
      totalProdutos: 0,
    });
  }, [setListaTodosProdutos]);

  return <Home />;
}

export default App;
