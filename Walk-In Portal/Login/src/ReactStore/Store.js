import create from 'zustand';


const useLoginStore = create((set) => ({
  email: '',
  password: '',
  rememberMe: false,
  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
  setRememberMe: (value) => set({ rememberMe: value }),
}));

export default useLoginStore;
