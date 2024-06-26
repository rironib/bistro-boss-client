import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import slider1 from '/assets/home/slide1.jpg';
import slider2 from '/assets/home/slide2.jpg';
import slider3 from '/assets/home/slide3.jpg';
import slider4 from '/assets/home/slide4.jpg';
import slider5 from '/assets/home/slide5.jpg';
import SectionTitle from "../../../components/Shared/SectionTitle.jsx";

const Order = () => {
    return (
        <section className='mb-20'>
            <SectionTitle heading={'ORDER ONLINE'} subheading={'---From 11:00am to 10:00pm---'}/>
            <Swiper
                slidesPerView={4}
                spaceBetween={20}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide><img src={slider1}/></SwiperSlide>
                <SwiperSlide><img src={slider2}/></SwiperSlide>
                <SwiperSlide><img src={slider3}/></SwiperSlide>
                <SwiperSlide><img src={slider4}/></SwiperSlide>
                <SwiperSlide><img src={slider5}/></SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Order;
