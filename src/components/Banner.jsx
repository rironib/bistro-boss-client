import PropTypes from "prop-types";

const Banner = ({image, title, desc}) => {
    return (
        <div style={{backgroundImage: `url(${image})`}}
             className='mb-28 pt-[180px] pb-[110px] bg-fixed bg-cover bg-no-repeat bg-center'>
            <div className='w-8/12 mx-auto p-16 bg-[#15151599] font-cinzel text-white space-y-4 text-center'>
                <h2 className='font-bold text-6xl'>{title}</h2>
                <p className='px-12 font-medium text-xl'>{desc}</p>
            </div>
        </div>
    );
};

Banner.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    desc: PropTypes.string,
}

export default Banner;
