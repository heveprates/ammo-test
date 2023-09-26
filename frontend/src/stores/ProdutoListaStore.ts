import { create } from 'zustand';

export type ProdutoType = {
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
    [key: number]: ProdutoType[];
  };
  totalProdutos: number;
  porPagina: number;
  paginaAtual: number;
};

type Actions = {
  setListaTodosProdutos: (
    data: Parameters<typeof setListaTodosProdutos>[0],
  ) => void;
  setListaPaginaAtual: (
    data: Parameters<typeof setListaPaginaAtual>[0],
  ) => void;
  setPorPagina: (data: number) => void;
  setPaginaAtual: (data: number) => void;
};

const setListaTodosProdutos = (
  data: Omit<State, 'listaProdutos'> & { produtos: ProdutoType[] },
): State => {
  return {
    ...data,
    listaProdutos: { [data.paginaAtual]: data.produtos },
  };
};

const setListaPaginaAtual = (
  data: {
    listaProdutos: ProdutoType[];
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
  porPagina: 0,
  paginaAtual: 0,
  setListaTodosProdutos: (data) => set(setListaTodosProdutos(data)),
  setListaPaginaAtual: (data) =>
    set((state) => setListaPaginaAtual(data, state)),
  setPorPagina: (data) => set({ porPagina: data }),
  setPaginaAtual: (data) => set({ paginaAtual: data }),
}));
