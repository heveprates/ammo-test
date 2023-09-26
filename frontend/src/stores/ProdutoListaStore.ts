import { create } from 'zustand';

export type Produto = {
  id: string;
  nome: string;
  descricao: string;
  precoPromocional: number;
  precoOriginal: number;
  imagens: string[];
  categoria: string;
};

type State = {
  listaProdutos: {
    [key: number]: Produto[];
  };
  totalProdutos: number;
  porPaginas: number;
  paginaAtual: number;
};

type Actions = {
  setListaTodosProdutos: (
    state: Parameters<typeof setListaTodosProdutos>[0],
  ) => void;
  setPaginaAtual: (state: Parameters<typeof setPaginaAtual>[0]) => void;
};

const setListaTodosProdutos = (
  data: Omit<State, 'listaProdutos'> & { produtos: Produto[] },
): State => {
  return {
    ...data,
    listaProdutos: { [data.paginaAtual]: data.produtos },
  };
};

const setPaginaAtual = (
  data: {
    listaProdutos: Produto[];
    paginaAtual: number;
  },
  state: State,
): State => {
  return {
    ...state,
    paginaAtual: data.paginaAtual,
    listaProdutos: {
      ...state.listaProdutos,
      [data.paginaAtual]: data.listaProdutos,
    },
  };
};

export const useProdutoListaStore = create<State & Actions>((set) => ({
  listaProdutos: {},
  totalProdutos: 0,
  porPaginas: 0,
  paginaAtual: 0,
  setListaTodosProdutos: (data) => set(setListaTodosProdutos(data)),
  setPaginaAtual: (data) => set((state) => setPaginaAtual(data, state)),
}));
