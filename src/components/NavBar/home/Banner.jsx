import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/swiper-bundle.css'; // Estilos generales
import 'swiper/css/navigation'; // Opcional, si usas navegación
import 'swiper/css/pagination'; // Requerido para la paginación
import 'swiper/css/scrollbar'; // Opcional, si usas scrollbar
import 'swiper/css/autoplay'; // Opcional, si usas scrollbar

export const Banner = () => {
  return (
    <div className='banner container'>
        <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={12} // Espacio entre slides
        slidesPerView={1} // Número de slides visibles
        pagination={{ clickable: false }} // Paginación con clic
        autoplay={{ delay: 5000 }} // Reproducción automática
        loop={true} // Carrusel infinito
        >
        <SwiperSlide>
            <img className='img-banner' src="/src/assets/banners/1.jpg" alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
            <img className='img-banner' src="/src/assets/banners/2.jpg" alt="Slide 2" />
        </SwiperSlide>
        <SwiperSlide>
            <img className='img-banner' src="/src/assets/banners/3.jpg" alt="Slide 3" />
        </SwiperSlide>
        </Swiper>
  </div>
  )
}
