import create from 'zustand';

const useColorScheme = create(set => ({
  colorScheme: 'dark',
  setColorScheme: colorScheme => set({ colorScheme })
}));

export default useColorScheme;

