import { create } from 'zustand'

type Store = {
  isOpen: boolean
}

type ActionStore = {
  onOpen: () => void
  onClose: () => void
}

export const useLocationStore = create<Store & ActionStore>()((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}))
