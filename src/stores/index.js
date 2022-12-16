import create from 'zustand';

const useStore = create(set => ({
  showNav: true,
  setShowNav: shouldShow => set(state => ({ showNav: shouldShow }))
}));

export default useStore;
