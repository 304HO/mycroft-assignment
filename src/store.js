import create from 'zustand'

export const stateStore = create((set) => ({
  token: null,
  isLogin: false,

  setToken: (a) => set((state) => ({ token: (state = a) })),
  setIsLogin: () => set({ isLogin: true }),

  setTokenClear: () => set({ token: null }),
  setIsLogOut: () => set({ isLogin: false }),
}))
