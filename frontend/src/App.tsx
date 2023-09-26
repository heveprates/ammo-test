import Home from './components/Home';
import { useProdutoListaStore } from './stores/ProdutoListaStore';
import React from 'react';

const produtos = [
  {
    id: '1',
    nome: 'Produto 1',
    descricao: 'Descrição do Produto 1',
    precoPromocional: 20.99,
    precoOriginal: 30.99,
    imagens: [
      'https://via.placeholder.com/400x400?text=Produto1Image1',
      'https://via.placeholder.com/400x400?text=Produto1Image2',
      'https://via.placeholder.com/400x400?text=Produto1Image3',
      'https://via.placeholder.com/400x400?text=Produto1Image4',
    ],
    categoria: 'Categoria 1',
  },
  {
    id: '2',
    nome: 'Produto 2',
    descricao: 'Descrição do Produto 2',
    precoPromocional: 21.99,
    precoOriginal: 31.99,
    imagens: [
      'https://via.placeholder.com/400x400?text=Produto2Image1',
      'https://via.placeholder.com/400x400?text=Produto2Image2',
      'https://via.placeholder.com/400x400?text=Produto2Image3',
      'https://via.placeholder.com/400x400?text=Produto2Image4',
    ],
    categoria: 'Categoria 2',
  },
  {
    id: '3',
    nome: 'Produto 3',
    descricao: 'Descrição do Produto 3',
    precoPromocional: 21.99,
    precoOriginal: 31.99,
    imagens: [
      'https://via.placeholder.com/400x400?text=Produto3Image1',
      'https://via.placeholder.com/400x400?text=Produto3Image2',
      'https://via.placeholder.com/400x400?text=Produto3Image3',
      'https://via.placeholder.com/400x400?text=Produto3Image4',
    ],
    categoria: 'Categoria 3',
  },
  {
    id: '4',
    nome: 'Produto 4',
    descricao: 'Descrição do Produto 4',
    precoPromocional: 21.99,
    precoOriginal: 31.99,
    imagens: [
      'https://via.placeholder.com/400x400?text=Produto4Image1',
      'https://via.placeholder.com/400x400?text=Produto4Image2',
      'https://via.placeholder.com/400x400?text=Produto4Image3',
      'https://via.placeholder.com/400x400?text=Produto4Image4',
    ],
    categoria: 'Categoria 4',
  },
];

function App() {
  const setListaTodosProdutos = useProdutoListaStore(
    (state) => state.setListaTodosProdutos,
  );

  React.useEffect(() => {
    setListaTodosProdutos({
      produtos: produtos,
      paginaAtual: 1,
      porPaginas: 10,
      totalProdutos: 100,
    });
  }, [setListaTodosProdutos]);

  return <Home />;
}

export default App;
