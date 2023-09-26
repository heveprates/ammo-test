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
  isCarregandoLista: boolean;
};

type Actions = {
  setListaTodosProdutos: (
    data: Parameters<typeof setListaTodosProdutos>[0],
  ) => void;
  setListaPaginaAtual: (
    data: Parameters<typeof setListaPaginaAtual>[0],
  ) => void;
  setCarregandoLista: (data: boolean) => void;
};

const setListaTodosProdutos = (
  data: Omit<State, 'listaProdutos' | 'isCarregandoLista'> & {
    produtos: ProdutoType[];
  },
): State => {
  return {
    ...data,
    isCarregandoLista: false,
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
    isCarregandoLista: false,
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
  isCarregandoLista: false,
  setListaTodosProdutos: (data) => set(setListaTodosProdutos(data)),
  setListaPaginaAtual: (data) =>
    set((state) => setListaPaginaAtual(data, state)),
  setCarregandoLista: (data) => set({ isCarregandoLista: data }),
}));
