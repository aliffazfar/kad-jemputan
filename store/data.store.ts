import { create } from 'zustand'

interface Person {
  name: string
  nick: string
  fatherName: string
  motherName: string
  instagram: string
  photo: string
}

interface WeddingEvent {
  address: string
  addressLocation: string
  mapLink: string
  wazeLink: string
  date: Date
  endDate: Date
}

interface Programme {
  title: string
  description: string
}

interface Gallery {
  imageUrl: string
}

export interface WeddingDetails {
  eventType: string
  noOfPax: number
  title: string
  weddingPhoto: string
  grooms: Person
  brides: Person
  countDownDate: Date
  weddingCeremony?: WeddingEvent
  weddingReception?: WeddingEvent
  programme?: Programme[]
  galleries?: Gallery[]
}

interface Store {
  data: WeddingDetails
}

interface ActionStore {
  setData: (data: WeddingDetails) => void
}

export const useDataStore = create<Store & ActionStore>()((set) => ({
  data: {
    eventType: '',
    noOfPax: 0,
    title: '',
    weddingPhoto: '',
    countDownDate: new Date(),
    grooms: {
      name: '',
      nick: '',
      fatherName: '',
      motherName: '',
      instagram: '',
      photo: '',
    },
    brides: {
      name: '',
      nick: '',
      fatherName: '',
      motherName: '',
      instagram: '',
      photo: '',
    },
  },
  setData(data) {
    set({ data })
  },
}))
