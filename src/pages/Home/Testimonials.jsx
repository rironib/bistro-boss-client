import SectionTitle from "../../components/SectionTitle.jsx";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import {Rating} from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css';
import {FaQuoteLeft} from "react-icons/fa";
import useReviews from "../../hooks/useReviews.jsx";
import Loading from "../../components/Loading.jsx";

const Testimonials = () => {
    const [reviews, loading] = useReviews();

    if (loading) {
        return <Loading />
    }

    return (
        <section className='mb-20'>
            <SectionTitle heading={'TESTIMONIALS'} subheading={'---What Our Clients Say---'}/>
            <Swiper navigation={true} loop={true} autoplay={{delay: 2500, disableOnInteraction: false}} modules={[Autoplay, Navigation]} className="mySwiper">
                {
                    reviews.map((review) => (
                        <SwiperSlide key={review._id}>
                            <div className='flex flex-col justify-center items-center gap-12 px-20'>
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                                <div className='text-6xl'>
                                    <FaQuoteLeft />
                                </div>
                                <div className='space-y-4 text-center'>
                                    <p className='px-20'>{review.details}</p>
                                    <h3 className='text-[#D99904] text-xl font-semibold uppercase'>{review.name}</h3>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </section>
    );
};

export default Testimonials;
