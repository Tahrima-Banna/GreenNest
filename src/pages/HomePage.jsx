import React from 'react';
import { SwiperSlide,Swiper } from "swiper/react"
import 'swiper/css';
import { Navigation,Pagination} from "swiper/modules";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import plant_1 from '../assets/plant-1.webp';
import plant_2 from '../assets/plants-2.jpg';
import plant_3 from '../assets/plant-3.jpg';
import plant_4 from '../assets/plant-4.jpg';
import MyContainer from '../components/MyContainer';


const HomePage = () => {
    return (
        <div className='py-20 xs:py-10'>
          <MyContainer>
             <Swiper
  navigation={true}
  pagination={{ clickable: true }}
  modules={[Navigation, Pagination]}
  className="w-full h-[320px] rounded-xl overflow-hidden"
>
  <SwiperSlide>
    <div className="relative w-full h-full">
      <img src={plant_1} alt="image" className="w-full h-full object-cover" />
      <h2 className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-black/50 text-white text-lg md:text-xl font-semibold px-4 py-2 rounded-lg">
      Greener trees, cleaner future.
      </h2>
    </div>
  </SwiperSlide>

  <SwiperSlide>
    <div className="relative w-full h-full">
      <img src={plant_2} alt="image" className="w-full h-full object-cover" />
      <h2 className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-black/50 text-white text-lg md:text-xl font-semibold px-4 py-2 rounded-lg">
      Be a part of the solution — plant trees.
      </h2>
    </div>
  </SwiperSlide>

  <SwiperSlide>
    <div className="relative w-full h-full">
      <img src={plant_3} alt="image" className="w-full h-full object-cover" />
      <h2 className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-black/50 text-white text-lg md:text-xl font-semibold px-4 py-2 rounded-lg">
       Trees heal the planet — help them grow.
      </h2>
    </div>
  </SwiperSlide>

  <SwiperSlide>
    <div className="relative w-full h-full">
      <img src={plant_4} alt="image" className="w-full h-full object-cover" />
      <h2 className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-black/50 text-white text-lg md:text-xl font-semibold px-4 py-2 rounded-lg">
       Nature grows where trees grow.
      </h2>
    </div>
  </SwiperSlide>
</Swiper>

          </MyContainer>
        </div>
    );
};

export default HomePage;