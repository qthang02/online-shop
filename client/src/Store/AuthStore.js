import { create } from 'zustand'

const useAuthStore = create((set, get) => ({
  jwtToken: null,
  setJwtToken: (token) => set({ jwtToken: token }),
  clearJwtToken: () => set({ jwtToken: null }),
  getToken: () => get().jwtToken,
}));

export default useAuthStore;
