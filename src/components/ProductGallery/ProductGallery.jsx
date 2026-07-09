import { useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard } from "swiper/modules";
import "swiper/css";

const ProductGallery = ({ gallery, video, videoLabel, onSlideChange }) => {
  const swiperRef = useRef(null);

  if (!gallery || gallery.length === 0) return null;

  return (
    <div className="relative">
      <Swiper
        modules={[Keyboard]}
        keyboard={{ enabled: true }}
        slidesPerView={1}
        loop={false}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => onSlideChange(swiper.activeIndex)}
        className="aspect-4/3 overflow-hidden rounded-2xl bg-offwhite"
      >
        {gallery.map((item, index) => (
          <SwiperSlide key={`image-${index}`}>
            <img
              src={item.image}
              alt={item.caption || `Product image ${index + 1}`}
              className="h-full w-full object-contain"
            />
          </SwiperSlide>
        ))}
        {video && (
          <SwiperSlide key="video">
            <video
              src={video}
              controls
              aria-label={videoLabel || "Product video"}
              className="h-full w-full object-contain"
            >
              Your browser does not support embedded videos.
            </video>
          </SwiperSlide>
        )}
      </Swiper>

      <motion.button
        type="button"
        aria-label="Previous image"
        onClick={() => swiperRef.current?.slidePrev()}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.15 }}
        className="absolute left-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-lg text-charcoal shadow-sm transition-colors duration-200 hover:bg-white focus:outline-hidden focus-visible:ring-2 focus-visible:ring-accent"
      >
        ‹
      </motion.button>
      <motion.button
        type="button"
        aria-label="Next image"
        onClick={() => swiperRef.current?.slideNext()}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.15 }}
        className="absolute right-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-lg text-charcoal shadow-sm transition-colors duration-200 hover:bg-white focus:outline-hidden focus-visible:ring-2 focus-visible:ring-accent"
      >
        ›
      </motion.button>
    </div>
  );
};

export default ProductGallery;