import React, { useEffect, useState } from 'react';
import { SwiperSlide, Swiper } from "swiper/react"
import 'swiper/css';
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import plant_1 from '../assets/plant-1.webp';
import plant_2 from '../assets/plants-2.jpg';
import plant_3 from '../assets/plant-3.jpg';
import plant_4 from '../assets/plant-4.jpg';
import MyContainer from '../components/MyContainer';
import PlantCard from '../components/PlantCard';


const HomePage = () => {
    const [plants, setPlants] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/plants.json')
            .then(res => res.json())
            .then(data => {
                setPlants(data.slice(0, 6)); // Display 6 plants
                setLoading(false);
            })
            .catch(err => {
                console.error("Error fetching plants:", err);
                setLoading(false);
            });
    }, []);

    return (
        <div className='pb-20'>
            {/* Hero Section */}
            <div className="py-10">
                <MyContainer>
                    <Swiper
                        navigation={true}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        modules={[Navigation, Pagination, Autoplay]}
                        className="w-full h-[450px] md:h-[550px] rounded-3xl overflow-hidden shadow-2xl"
                    >
                        <SwiperSlide>
                            <div className="relative w-full h-full">
                                <img src={plant_1} alt="Nature" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-center p-6">
                                    <h2 className="text-white text-3xl md:text-5xl lg:text-6xl font-black mb-4 drop-shadow-lg">
                                        Greener Trees, <span className="text-green-400">Cleaner Future</span>
                                    </h2>
                                    <p className="text-white/90 text-lg md:text-xl max-w-2xl font-medium">
                                        Bring the serenity of nature into your home with our handpicked indoor plants.
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="relative w-full h-full">
                                <img src={plant_2} alt="Nature" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-center p-6">
                                    <h2 className="text-white text-3xl md:text-5xl lg:text-6xl font-black mb-4 drop-shadow-lg">
                                        Breathe <span className="text-green-400">Pure Air</span>
                                    </h2>
                                    <p className="text-white/90 text-lg md:text-xl max-w-2xl font-medium">
                                        Our air-purifying plants work day and night to keep your home healthy.
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="relative w-full h-full">
                                <img src={plant_3} alt="Nature" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-center p-6">
                                    <h2 className="text-white text-3xl md:text-5xl lg:text-6xl font-black mb-4 drop-shadow-lg">
                                        Decorate with <span className="text-green-400">Style</span>
                                    </h2>
                                    <p className="text-white/90 text-lg md:text-xl max-w-2xl font-medium">
                                        Transform your space into a lush, green sanctuary with modern botanical decor.
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </MyContainer>
            </div>

            {/* Top Rated Indoor Plants Section */}
            <div className="py-16 bg-green-50/30">
                <MyContainer>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Top Rated Indoor Plants</h2>
                        <div className="w-20 h-1.5 bg-green-500 mx-auto mt-4 rounded-full"></div>
                        <p className="text-gray-600 mt-4 max-w-lg mx-auto">
                            Discover our most loved plants, curated for their beauty and health benefits.
                        </p>
                    </div>

                    {loading ? (
                        <div className="flex justify-center items-center min-h-[300px]">
                            <span className="loading loading-spinner loading-lg text-green-600"></span>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {plants.map(plant => (
                                <PlantCard key={plant.plantId} plant={plant} />
                            ))}
                        </div>
                    )}
                </MyContainer>
            </div>

            {/* Placeholder for other sections */}
        </div>
    );
};

export default HomePage;
