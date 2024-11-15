import { create } from 'zustand'

export interface RsvpData {
  isComing: boolean
  attendance: number
  mobileNo: string
  name: string
  wish: string
  timestamp: string
}

type Store = {
  isOpen: boolean
  rsvps: RsvpData[]
}

type ActionStore = {
  setRsvps: (data: RsvpData[]) => void
  onOpen: () => void
  onClose: () => void
}

export const useRsvpStore = create<Store & ActionStore>()((set) => ({
  isOpen: false,
  rsvps: [],
  setRsvps(rsvps) {
    set({ rsvps })
  },
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}))
