import { create } from 'zustand'

interface Person {
  name: string
  nick: string
  fatherName?: string
  motherName?: string
}

interface WeddingEvent {
  address: string
  addressLocation: string
  mapLink: string
  wazeLink: string
  date: Date
  dates?: {
    day: string
    date: string
    month: string
    year: string
  }
  time?: string
  endDate: Date
}

interface Programme {
  title: string
  description: string
}

interface Gallery {
  imageUrl: string
}

interface Gift {
  bank: {
    bankName: string
    bankNo?: string
    accountName: string
    qrImg: string
    qrDownloadImg: string
  }[]
  wishlist?: {
    itemName: string
    imgSrc: string
    itemLink: string
    hasReceived: boolean
  }[]
}

export interface WeddingDetails {
  eventType: string
  reservedPax: number
  noOfPax: number
  gift?: Gift
  title: string
  weddingPhoto?: string
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
    reservedPax: 0,
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
