import create from 'zustand';

const useStore = create(set => ({
  showNav: true,
  setShowNav: shouldShow => set(() => ({ showNav: shouldShow }))
}));

export default useStore;
