import CarouselCard from '../CarouselCard/CarouselCard'
import { Swiper, SwiperSlide, } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';

// import Persons from '../../assets/icon/Persons';
// import Diagram from '../../assets/icon/Diagram';
// import Stopwatch from '../../assets/icon/Stopwatch';
// import Tv from '../../assets/icon/Tv';
// import Handshake from '../../assets/icon/Handshake';
// import Сontinuously from '../../assets/icon/Сontinuously';
import ArrowLeftCarousel from '../../assets/icon/ArrowLeftCarousel';
import ArrowRightCarousel from '../../assets/icon/ArrowRightCarousel';

function CarouselForServis() {
    const [data, setData] = useState([]);
    const { i18n } = useTranslation();
    useEffect(() => {
        fetch('http://360tcrp.uz/api/project/advantage/',{
            headers: {
                'Accept-Language': i18n?.language ?? 'uz'
            }
        })
            .then(res => { return res.json() })
            .then(res => (
                setData(res)
            ))
            .catch(error => {
                console.log(error)
            }) 
    }, [i18n?.language])
    return (
        <>
            <Swiper
                modules={[Autoplay, Navigation]}
                spaceBetween={20}
                slidesPerView={3}
                navigation={{
                    nextEl: '.next',
                    prevEl: '.prev',
                }}
                autoplay={{
                    delay: 5000,
                }}
                loop={false}
                breakpoints={{
                    768: {
                        slidesPerView: 3,
                    },
                    500: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    400: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    300: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    200: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                }}
            >
                {
                    data.map((item, id) => {
                        return (
                            <SwiperSlide key={id}>
                                <CarouselCard {...item} key={id} />
                            </SwiperSlide>
                        )
                    })
                }
                {/* <SwiperSlide>
                    <CarouselCard title={'RAQOBAT AFZALLIKLARI'}
                        text={'360 virtual turdan foydalanib, mijozga imkon qadar ko’proq ma’lumotlarni taqdim etgan holda, raqobatchilardan ajralib turish imkoniyatlarini yaratadi.'}
                        file={<Persons />} />
                </SwiperSlide>
                <SwiperSlide>
                    <CarouselCard title={'POZITSIYALARNI O‘SISHI'}
                        text={'360 tur orqali O’zbekiston bozoridagi o’z pozitsiyangizni o’zgartiring va mijozlaringizni ko’paytiring .'}
                        file={<Diagram />} />
                </SwiperSlide>
                <SwiperSlide>
                    <CarouselCard title={'VAQTNI TEJASH'}
                        text={'Insonlar o’z vaqtlarini tejashga va uylaridan chiqmasdan maksimal darajada ma’lumotlar olish imkoniyatini yaratadi.'}
                        file={<Stopwatch />} />
                </SwiperSlide>
                <SwiperSlide>
                    <CarouselCard title={'KO’RSATISHNING ENG YAXSHI USULI'}
                        text={'Bugungi kunda vizual ma’lumot maydonini ko’rsatib berish uchun eng yaxshi  vosita – bu virtual tur.'}
                        file={<Tv />} />
                </SwiperSlide>
                <SwiperSlide>
                    <CarouselCard title={'ISHONCH OSHISHI'}
                        text={'Virtual turni ko’rgan mijozlarning 75% (sotib olish,arendaga olish va borib ko’rish) qarorlari ijobiy ta’sir qilganini ta’kidlashgan.'}
                        file={<Handshake />} />
                </SwiperSlide>
                <SwiperSlide>
                    <CarouselCard title={'24/7 REKLAMA'}
                        text={'Virtual turni dunyoning istalgan nuqtasidan va istalgan vaqtda ko’rish imkoniyati mavjudligi.'}
                        file={<Сontinuously />} />
                </SwiperSlide> */}
            </Swiper>
            <div className='next arrow'><ArrowLeftCarousel /></div>
            <div className='prev arrow'> <ArrowRightCarousel /></div>
        </>
    )
}

export default CarouselForServis
