import PropTypes from "prop-types";
import Tilt from 'react-parallax-tilt';

const Cover = ({cover, title, desc}) => {
    return (
        <Tilt
            tiltEnable={false}
            glareEnable={true}
            glareMaxOpacity={0.8}
            glareColor="black"
            glarePosition="bottom"
        >
            <div style={{backgroundImage: `url(${cover})`}}
                 className='mb-28 py-[110px] bg-cover bg-no-repeat bg-center'>
                <div className='w-8/12 mx-auto p-16 bg-[#15151599] text-white space-y-4 text-center'>
                    <h2 className='font-cinzel font-bold text-4xl'>{title}</h2>
                    <p className='px-8'>{desc}</p>
                </div>
            </div>
        </Tilt>
    );
};

Cover.propTypes = {
    title: PropTypes.string,
    cover: PropTypes.string,
    desc: PropTypes.string,
}

export default Cover;
