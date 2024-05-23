import SectionTitle from "../../components/SectionTitle.jsx";
import FoodCard from "../../components/FoodCard.jsx";
import useMenu from "../../hooks/useMenu.jsx";
import Loading from "../../components/Loading.jsx";

const Recommend = () => {
    const [menu, loading] = useMenu();
    const filteredItems  = menu.filter(item => item.category === 'offered');
    const items = filteredItems.slice(0,3);

    return (
        <section className='mb-20'>
            <SectionTitle heading={'CHEF RECOMMENDS'} subheading={'---Should Try---'}/>
            {loading ? <Loading/> : <FoodCard items={items} loading={loading}/>}
        </section>
    );
};

export default Recommend;
