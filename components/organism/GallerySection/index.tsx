import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { useState } from 'react'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import { FreeMode, Navigation, Thumbs } from 'swiper'
import { Box, Heading } from '@chakra-ui/react'
import { AttentionSeeker, Fade } from 'react-awesome-reveal'
import { useDataStore } from '@/store/data.store'

export default function GallerySection() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  const data = useDataStore((state) => state.data)
  if (!data.galleries) return null
  return (
    <Box sx={{ background: 'brand.200' }} p={6} id='gallery'>
      <Fade duration={2000}>
        <AttentionSeeker effect='pulse'>
          <Heading textAlign='center' mb={8} color='brand.100'>
            Gallery
          </Heading>
        </AttentionSeeker>
        <Swiper
          style={
            {
              '--swiper-navigation-color': '#ffff',
              '--swiper-pagination-color': '#ffff',
            } as React.CSSProperties
          }
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className='mySwiper2'
        >
          {data.galleries?.map((item: any, index: any) => (
            <SwiperSlide key={index}>
              <img
                style={{
                  borderRadius: '8px',
                  objectFit: 'cover',
                  minHeight: '500px',
                }}
                src={item.imageUrl}
                width={400}
                height={400}
                alt='album'
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          onSwiper={() => setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className='mySwiper'
        >
          {data.galleries?.map((item: any, index: any) => (
            <SwiperSlide key={index}>
              <img
                style={{
                  marginTop: '8px',
                  borderRadius: '8px',
                  objectFit: 'cover',
                  minHeight: '120px',
                }}
                src={item.imageUrl}
                width={200}
                height={200}
                alt='album'
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Fade>
    </Box>
  )
}
