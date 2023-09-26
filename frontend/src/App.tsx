import Home from './components/Home';
import { fetchAPI } from './services/fetchProdutosAPI';
import { useProdutoListaStore } from './stores/ProdutoListaStore';
import React from 'react';

const unsubscribe = useProdutoListaStore.subscribe((state) => {
  const states = useProdutoListaStore.getState();
  if (states.isCarregandoLista) {
    return;
  }
  unsubscribe();
  states.setCarregandoLista(true);
  fetchAPI({
    pagina: state.paginaAtual,
    porPagina: state.porPagina,
  }).then((response) => {
    states.setListaTodosProdutos({
      totalProdutos: response.total,
      porPagina: state.porPagina,
      paginaAtual: state.paginaAtual,
      produtos: response.produtos,
    });
  });
});

function App() {
  const [setListaTodosProdutos, setCarregandoLista] = useProdutoListaStore(
    (state) => [state.setListaTodosProdutos, state.setCarregandoLista],
  );

  React.useEffect(() => {
    setCarregandoLista(true);
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
