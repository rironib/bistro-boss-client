
import {Link} from "react-router-dom";
import cover from '/assets/home/featured.jpg';
import SectionTitle from "../../../components/Shared/SectionTitle.jsx";

const Featured = () => {
    return (
        <section style={{backgroundImage: `url(${cover})`}} className='mb-20 bg-fixed bg-cover bg-no-repeat bg-center text-white'>
            <div className='bg-[#151515B3] py-20'>
                <div className='w-11/12 lg:w-10/12 max-w-[1240px] mx-auto'>
                    <SectionTitle heading={'FROM OUR MENU'} subheading={'---Check it out---'}/>
                    <div className='grid grid-cols-2 items-center gap-16'>
                        <img src={cover} alt='Featured' className='h-[360px]'/>
                        <div className='space-y-2'>
                            <h5 className='text-xl'>March 20, 2023</h5>
                            <h5 className='text-xl'>WHERE CAN I GET SOME?</h5>
                            <p className='pb-6'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere,
                                deserunt
                                dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore
                                consequatur consequuntur omnis ullam maxime tenetur.
                            </p>
                            <Link to='/' className='py-3 px-6 font-semibold uppercase border-b-2 rounded-xl'>Read
                                More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Featured;
