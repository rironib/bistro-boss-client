import {useEffect, useState} from "react";
import axios from "axios";

const Menu = () => {
    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('/menu.json')
            .then(res => {
                setMenu(res.data);
                setLoading(false);
            })
    }, []);

    return [menu, loading];
};

export default Menu;
