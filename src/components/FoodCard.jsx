import PropTypes from "prop-types";
import Loading from "./Loading.jsx";

const FoodCard = ({items, loading}) => {
    if (loading) {
        return <Loading />;
    }

    return (
        <div className='grid lg:grid-cols-3 gap-8'>
            {
                items.length > 0 ? (
                    items.map((item) => (
                        <div key={item._id} className='grid grid-rows-2 bg-[#F3F3F3]'>
                            <img src={item.image} alt={item.name} className='w-full'/>
                            <div className='grid justify-items-center items-center text-center px-10 py-8'>
                                <h3 className='font-semibold text-xl'>{item.name}</h3>
                                <p className='mb-4'>{item.recipe}</p>
                                <button
                                    className='w-max py-3 px-6 bg-[#E8E8E8] hover:bg-[#1F2937] text-yellow-600 font-semibold border-b-2 border-yellow-600 hover:border-[#1F2937] uppercase rounded-lg'>add
                                    to cart
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <div role="alert" className="alert alert-error text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none"
                             viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        <span>No items found!</span>
                    </div>
                )
            }
        </div>
    );
};

FoodCard.propTypes = {
    items: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
}

export default FoodCard;
