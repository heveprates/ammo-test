import { create } from 'zustand';

type State = {
  termo: string;
};

type Actions = {
  setTermo: (data: string) => void;
};

export const useQueryStringStore = create<State & Actions>((set) => ({
  termo: '',
  setTermo: (data) => set({ termo: data }),
}));
