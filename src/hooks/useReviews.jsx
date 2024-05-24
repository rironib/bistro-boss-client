import {useEffect, useState} from "react";
import axios from "axios";

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:5000/reviews')
            .then(res => {
                setReviews(res.data);
                setLoading(false);
            })
    }, []);

    return [reviews, loading];
};

export default Reviews;
