import FoodCard from "../../components/FoodCard.jsx";
import Loading from "../../components/Loading.jsx";
import PropTypes from "prop-types";

const ItemsTab = ({items, loading}) => {
    if (loading) {
        return <Loading/>
    }

    return (
        <div className='grid lg:grid-cols-3 gap-8'>
            {
                items.map(item => <FoodCard key={item._id} item={item}/>)
            }
        </div>
    );
};

ItemsTab.propTypes = {
    items: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
}

export default ItemsTab;
