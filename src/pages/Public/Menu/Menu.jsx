import {Helmet} from "react-helmet-async";
import Banner from "../../../components/Public/Banner.jsx";
import SectionTitle from "../../../components/Shared/SectionTitle.jsx";
import ListItems from "../../../components/Public/ListItems.jsx";
import useMenu from "../../../hooks/useMenu.jsx";
import MenuCategory from "./MenuCategory.jsx";
import bannerImage from '/assets/menu/banner3.jpg';
import dessertBg from '/assets/menu/dessert-bg.jpeg';
import pizzaBg from '/assets/menu/pizza-bg.jpg';
import saladBg from '/assets/menu/salad-bg.jpg';
import soupBg from '/assets/menu/soup-bg.jpg';

const Menu = () => {
    const [menu, loading] = useMenu();
    const offer = menu.filter(item => item.category === 'offered');
    const dessert = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');

    return (
        <>
            <Helmet>
                <title>Menu | Bistro Boss</title>
            </Helmet>
            <>
                <Banner image={bannerImage} title={'OUR MENU'} desc={'Would you like to try a dish?'}/>

                <div className='w-11/12 lg:w-10/12 max-w-[1275px] mx-auto'>
                    <SectionTitle heading={'TODAY\'S OFFER'} subheading={'---Don\'t miss---'}/>

                    <ListItems items={offer} title={'offer'} loading={loading}/>

                    <MenuCategory items={dessert} loading={loading} cover={dessertBg} title={'dessert'} />
                    <MenuCategory items={pizza} loading={loading} cover={pizzaBg} title={'pizza'} />
                    <MenuCategory items={salad} loading={loading} cover={saladBg} title={'salad'} />
                    <MenuCategory items={soup} loading={loading} cover={soupBg} title={'soup'} />
                </div>
            </>
        </>
    );
};

export default Menu;
