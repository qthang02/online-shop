import { create } from 'zustand'

const useAuthStore = create((set) => ({
  jwtToken: null,

  actions: {
    setToken: (token) =>
      set((state) => ({
        jwtToken: token,
      })),
    clearToken: () =>
      set((state) => ({
        jwtToken: null,
      })),
  },
}));

export default useAuthStore;
