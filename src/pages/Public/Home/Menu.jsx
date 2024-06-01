import SectionTitle from "../../../components/Shared/SectionTitle.jsx";
import {Link} from "react-router-dom";
import useMenu from "../../../hooks/useMenu.jsx";
import Loading from "../../../components/Shared/Loading.jsx";

const Menu = () => {
    const [menu, loading] = useMenu();
    const items = menu.filter(item => item.category === 'popular');

    return (
        <section className='mb-20'>
            <SectionTitle heading={'FROM OUR MENU'} subheading={'---Check it out---'}/>
            {
                loading ? (
                    <Loading/>
                ) : (
                    <div className='grid lg:grid-cols-2 gap-8 text-[#737373]'>
                        {
                            items.map(item => (
                                <div key={item._id} className='flex gap-1'>
                                    <img src={item.image}
                                         className='h-20 w-24 rounded-tr-[50%] rounded-br-[50%] rounded-bl-[50%] mr-6'/>
                                    <div>
                                        <h3 className='mb-2 font-medium uppercase'>{item.name} ------------------</h3>
                                        <p className='text-justify'>{item.recipe}</p>
                                    </div>
                                    <div>
                                        ${item.price}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                )
            }
            <div className='mt-12 text-center'>
                <Link to='/menu' className='py-3 px-6 font-semibold uppercase border-b-2 border-gray-800 rounded-xl'>
                    View Full Menu
                </Link>
            </div>
        </section>
    );
};

export default Menu;
