import {Helmet} from "react-helmet-async";
import bannerImage from "/assets/shop/banner2.jpg";
import Banner from "../../components/Banner.jsx";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import FoodCard from "../../components/FoodCard.jsx";
import useMenu from "../../hooks/useMenu.jsx";
import {useParams} from "react-router-dom";
import {useState} from "react";

const Shop = () => {
    const [menu, loading] = useMenu();
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
    const {category} = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex > 0 ? initialIndex : 4);

    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const soup = menu.filter(item => item.category === 'soup');
    const dessert = menu.filter(item => item.category === 'dessert');
    const drinks = menu.filter(item => item.category === 'drinks');

    return (
        <>
            <Helmet>
                <title>Shop | Bistro Boss</title>
            </Helmet>
            <Banner image={bannerImage} title={'OUR SHOP'} desc={'Would you like to try a dish?'}/>
            <main className='w-11/12 lg:w-10/12 max-w-[1275px] mx-auto mb-20'>
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList className='mb-10 text-center uppercase'>
                        <Tab>salad</Tab>
                        <Tab>pizza</Tab>
                        <Tab>soup</Tab>
                        <Tab>dessert</Tab>
                        <Tab>drinks</Tab>
                    </TabList>

                    <TabPanel>
                        <FoodCard items={salad} loading={loading} />
                    </TabPanel>
                    <TabPanel>
                        <FoodCard items={pizza} loading={loading} />
                    </TabPanel>
                    <TabPanel>
                        <FoodCard items={soup} loading={loading} />
                    </TabPanel>
                    <TabPanel>
                        <FoodCard items={dessert} loading={loading} />
                    </TabPanel>
                    <TabPanel>
                        <FoodCard items={drinks} loading={loading} />
                    </TabPanel>
                </Tabs>
            </main>
        </>
    );
};

export default Shop;
