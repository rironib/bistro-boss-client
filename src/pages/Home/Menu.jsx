import SectionTitle from "../../components/SectionTitle.jsx";
import {useEffect, useState} from "react";
import axios from "axios";

const Menu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        axios.get('/menu.json')
            .then(res => {
                const result = res.data;
                const filteredData = result.filter(item => item.category === 'popular');
                setMenu(filteredData)
            })
    }, []);

    return (
        <section className='mb-20'>
            <SectionTitle heading={'FROM OUR MENU'} subheading={'---Check it out---'}/>
            <div className='grid grid-cols-2 gap-8 text-[#737373]'>
                {
                    menu.map(item => (
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
        </section>
    );
};

export default Menu;
