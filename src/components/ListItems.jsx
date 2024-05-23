import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import Loading from "./Loading.jsx";

const ListItems = ({items, title, loading}) => {
    return (
        <section className='mb-12'>
            {
                loading ? (
                    <Loading/>
                ) : (
                    <div className='grid lg:grid-cols-2 gap-8 text-[#737373]'>
                        {
                            items.map(item => (
                                <div key={item._id} className='flex gap-1'>
                                    <img src={item.image} alt={item.name}
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
                <Link to={`/shop/${title}`} className='py-3 px-8 font-semibold uppercase border-b-2 border-gray-800 rounded-md'>
                    ORDER YOUR FAVOURITE FOOD
                </Link>
            </div>
        </section>
    );
};

ListItems.propTypes = {
    items: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
}

export default ListItems;
