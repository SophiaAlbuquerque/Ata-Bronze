import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './carousel.module.css';

function Carousel() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
      loop
      className={styles['carousel-container']}
    >
      <SwiperSlide>
        <div className={`${styles['slide-content']} ${styles['bg-slide-1']}`}>
          <div>
            <h2 className={styles['slide-title']}>Novidades</h2>
            <p className={styles['slide-text']}>Beleza de verdade começa aqui!</p>
          </div>
          <img src="/images/banner1.png" alt="Produtos" className={styles['slide-image']} />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className={`${styles['slide-content']} ${styles['bg-slide-2']}`}>
          <div>
            <h2 className={styles['slide-title']}>Promoções</h2>
            <p className={styles['slide-text']}>Descontos incríveis em cosméticos</p>
          </div>
          <img src="/images/banner2.png" alt="Produtos" className={styles['slide-image']} />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default Carousel;