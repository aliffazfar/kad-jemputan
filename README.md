Kad Jemputan App

## Getting Started

First, setup environment variable :

NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain_here
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket_here
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id_here
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id_here
NEXT_PUBLIC_AUDIO=your_music_link

Second, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## Use your own data

```json
{
  "eventType": "Ijab Qabul",
  "noOfPax": 200,
  "title": "Amira & Aliff",
  "weddingPhoto": "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
  "grooms": {
    "name": "Aliff Azfar",
    "nick": "Aliff",
    "fatherName": "Aris Abdullah",
    "motherName": "Wan Faizah Megat Ahmad"
  },
  "brides": {
    "name": "Faten Amira",
    "nick": "Amira",
    "fatherName": "Hamidi Bin Abdul Hamid"
  },
  "countDownDate": "2025-01-25T09:00:00+08:00",
  "weddingCeremony": {
    "date": "2025-01-25T09:00:00+08:00",
    "endDate": "2025-01-25T14:00:00+08:00",
    "dates": {
      "day": "Sabtu",
      "date": "25",
      "month": "January",
      "year": "2025"
    },
    "time": "Pukul 09.00 pagi - 2.00 petang",
    "address": "47977, Jalan Ara 3/2, 43000 Kajang, Selangor",
    "addressLocation": "Serambi Villa",
    "mapLink": "https://maps.app.goo.gl/1J4dEpjxgyHZ6jqC9",
    "wazeLink": "https://ul.waze.com/ul?place=ChIJ_8T7WiPJzTERAZ6Signfm1E&ll=2.92312270%2C101.73384790&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location"
  },
  "weddingReception": {
    "noOfPax": 200,
    "date": "2025-01-25T09:00:00+08:00",
    "endDate": "2025-01-25T14:00:00+08:00",
    "dates": {
      "day": "Sabtu",
      "date": "25",
      "month": "January",
      "year": "2025"
    },
    "time": "Pukul 09.00 pagi - 2.00 petang",
    "address": "Serambi Villa",
    "addressLocation": "47977, Jalan Ara 3/2, 43000 Kajang, Selangor"
  },
  "programme": [
    {
      "title": "Kehadiran Keluarga",
      "description": "9:00 pagi"
    },
    {
      "title": "Akad Nikah",
      "description": "10:00 pagi"
    },
    {
      "title": "Kehadiran Tetamu",
      "description": "11:00 pagi"
    },
    {
      "title": "Majlis Berakhir",
      "description": "1:00 petang"
    }
  ],
  "galleries": [
    {
      "imageUrl": "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      "imageUrl": "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      "imageUrl": "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      "imageUrl": "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D"
    }
  ],
  gift: {
      bank: [
        {
          bankName: 'maybank',
          bankNo: '162385070417',
          accountName: 'Aliff Azfar Bin Aris',
          qrImg: '/qr/maeQr.jpg',
          qrDownloadImg: '/qr/maeDownload.jpg',
        },
        {
          bankName: 'tng',
          accountName: 'Aliff Azfar Bin Aris',
          bankNo: '151055437867',
          qrImg: '/qr/tngQr.jpg',
          qrDownloadImg: '/qr/tngDownload.jpg',
        },
      ],
      wishlist: [
        {
          itemName: 'Philips Double Wall Jug Kettle',
          imgSrc:
            'https://down-my.img.susercontent.com/file/sg-11134201-7rd4f-lwe51kbuoq0r40.webp',
          itemLink:
            'https://shopee.com.my/Philips-Double-Wall-Jug-Kettle-Black-(1.7L-2200W)-HD9395-HD9395-90-i.175347531.25513544575?sp_atk=311e4b0d-f053-4a00-8584-dba5a2daa5a3&xptdk=311e4b0d-f053-4a00-8584-dba5a2daa5a3',
          hasReceived: true,
        },
        {
          itemName: 'Dreamynight Home Clover King Size',
          imgSrc:
            'https://down-my.img.susercontent.com/file/my-11134207-7ras8-m2m9wm1m78di4e.webp',
          itemLink:
            'https://shopee.com.my/Dreamynight-Home-Clover-Plain-Color-Series-5-In-1-Clover-Solid-Color-710TC-High-Quality-Comforter-Set-i.55506411.4832614066?sp_atk=9c0c769d-9113-4f7b-b6dc-69686475a0d3&xptdk=9c0c769d-9113-4f7b-b6dc-69686475a0d3',
          hasReceived: false,
        },
        {
          itemName: 'Handheld Dust Mite Bed Vacuum Cleaner & Mop',
          imgSrc:
            'https://down-my.img.susercontent.com/file/my-11134207-7rasi-m1p9p6etxyq265.webp',
          itemLink:
            'https://shopee.com.my/HETCH-V3-Pro-Hyper-Clean-Handheld-Dust-Mite-Bed-Vacuum-Cleaner-Mop-HVC-1416-HC-i.5367548.11363702080?sp_atk=831285bd-052a-4369-b1b6-8513c0d9bf61&xptdk=831285bd-052a-4369-b1b6-8513c0d9bf61',
          hasReceived: false,
        },
        {
          itemName: 'Philips 1000 Series Steam Iron',
          imgSrc:
            'https://down-my.img.susercontent.com/file/sg-11134201-7rd5o-lwe4s8z3fpy524.webp',
          itemLink:
            'https://shopee.com.my/Philips-1000-Series-Steam-Iron-(1400W)-DST1010-DST1010-20-i.175347531.24863548846?sp_atk=f8c1cee6-83c0-4047-8478-19fb66ed1ded&xptdk=f8c1cee6-83c0-4047-8478-19fb66ed1ded',
          hasReceived: false,
        },
        {
          itemName: 'Philips 3000 Series Rice Cooker ',
          imgSrc:
            'https://down-my.img.susercontent.com/file/my-11134207-7r990-lza7c02rhw80d5.webp',
          itemLink:
            'https://shopee.com.my/-NEW-Philips-3000-Series-Rice-Cooker-(1.8L)-HD3213-HD3213-31-i.175347531.28608868401?sp_atk=cc754acd-e7b7-40ae-bba9-5d97a366c254&xptdk=cc754acd-e7b7-40ae-bba9-5d97a366c254',
          hasReceived: false,
        },
        {
          itemName: 'PerySmith 3D Air Fryer Ecohealth II Series',
          imgSrc:
            'https://down-my.img.susercontent.com/file/my-11134207-7rasj-m2j2m9hv26ylff.webp',
          itemLink:
            'https://shopee.com.my/PerySmith-3D-Air-Fryer-Ecohealth-II-Series-Blue-Design-(4.2L)-PS1530-i.130925376.3331589986?sp_atk=1f461936-36f5-4e22-97df-5b9da927edb7&xptdk=1f461936-36f5-4e22-97df-5b9da927edb7',
          hasReceived: false,
        },
        {
          itemName: 'Tefal Non Stick Cook & Clean 4pc Set',
          imgSrc:
            'https://down-my.img.susercontent.com/file/my-11134207-7r98q-llpv9327w5naff.webp',
          itemLink:
            'https://shopee.com.my/-NEW-Tefal-Non-Stick-Cook-Clean-4pc-Set-B225S4-Cookware-Set-Pots-and-Pans-Kuali-Periuk-Fry-Cook-i.301533779.15077595979?sp_atk=d6c894e9-f430-41ba-8faa-d2c0f7604792&xptdk=d6c894e9-f430-41ba-8faa-d2c0f7604792',
          hasReceived: false,
        },
      ],
}
```
