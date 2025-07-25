import { create } from "zustand";

type UiState = {
  isLoading: boolean;
  errorMessage: string | null;
  setLoading: (loading: boolean) => void;
  setError: (message: string | null) => void;
};

export const useUiStore = create<UiState>((set) => ({
  isLoading: false,
  errorMessage: null,
  setLoading: (loading) => set({ isLoading: loading }),
  setError: (message) => set({ errorMessage: message }),
}));
