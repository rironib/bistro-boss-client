import SectionTitle from "../../../components/Shared/SectionTitle.jsx";
import FoodCard from "../../../components/Public/FoodCard.jsx";
import useMenu from "../../../hooks/useMenu.jsx";
import Loading from "../../../components/Shared/Loading.jsx";

const Recommend = () => {
    const [menu, loading] = useMenu();
    const filteredItems  = menu.filter(item => item.category === 'offered');
    const items = filteredItems.slice(0,3);

    if (loading) {
        return <Loading/>
    }

    return (
        <section className='mb-20'>
            <SectionTitle heading={'CHEF RECOMMENDS'} subheading={'---Should Try---'}/>
            <div className='grid lg:grid-cols-3 gap-8'>
                {
                    items.map(item => <FoodCard key={item._id} item={item}/>)
                }
            </div>
        </section>
);
};

export default Recommend;
