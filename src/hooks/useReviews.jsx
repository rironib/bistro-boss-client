import axios from "axios";
import { useEffect, useState } from "react";

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://bistro-boss-bd.vercel.app/reviews')
            .then(res => {
                setReviews(res.data);
                setLoading(false);
            })
    }, []);

    return [reviews, loading];
};

export default Reviews;
