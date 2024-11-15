// import axios from 'axios'

export const getData = async () => {
  // const url = process.env.NEXT_PUBLIC_API as string
  // const data = await axios.get(url)
  return {
    eventType: 'Akad Nikah',
    noOfPax: 200,
    title: 'Amira & Aliff',
    weddingPhoto:
      'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D',
    grooms: {
      name: 'Aliff Azfar',
      nick: 'Aliff',
      fatherName: 'Aris Abdullah',
      motherName: 'Wan Faizah Megat Ahmad',
    },
    brides: {
      name: 'Faten Amira',
      nick: 'Amira',
      fatherName: 'Hamidi Bin Abdul Hamid',
    },
    countDownDate: '2025-01-25T09:00:00+08:00',
    weddingCeremony: {
      date: '2025-01-25T09:00:00+08:00',
      endDate: '2025-01-25T14:00:00+08:00',
      dates: {
        day: 'Sabtu',
        date: '25',
        month: 'January',
        year: '2025',
      },
      time: 'Pukul 09.00 pagi - 2.00 petang',
      address: '47977, Jalan Ara 3/2, 43000 Kajang, Selangor',
      addressLocation: 'Serambi Villa',
      mapLink: 'https://maps.app.goo.gl/1J4dEpjxgyHZ6jqC9',
      wazeLink:
        'https://ul.waze.com/ul?place=ChIJ_8T7WiPJzTERAZ6Signfm1E&ll=2.92312270%2C101.73384790&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location',
    },
    // weddingReception: {
    //   noOfPax: 200,
    //   date: '2025-01-25T09:00:00+08:00',
    //   endDate: '2025-01-25T14:00:00+08:00',
    //   dates: {
    //     day: 'Sabtu',
    //     date: '25',
    //     month: 'January',
    //     year: '2025',
    //   },
    //   time: 'Pukul 09.00 pagi - 2.00 petang',
    //   address: 'Serambi Villa',
    //   addressLocation: '47977, Jalan Ara 3/2, 43000 Kajang, Selangor',
    // },
    programme: [
      {
        title: 'Kehadiran Keluarga',
        description: '9:00 pagi',
      },
      {
        title: 'Akad Nikah',
        description: '10:00 pagi',
      },
      {
        title: 'Kehadiran Tetamu',
        description: '11:00 pagi',
      },
      {
        title: 'Majlis Berakhir',
        description: '1:00 petang',
      },
    ],
    // galleries: [
    //   {
    //     imageUrl:
    //       'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D',
    //   },
    //   {
    //     imageUrl:
    //       'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D',
    //   },
    //   {
    //     imageUrl:
    //       'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D',
    //   },
    //   {
    //     imageUrl:
    //       'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D',
    //   },
    // ],
  }
}
