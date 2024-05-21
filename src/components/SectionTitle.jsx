import PropTypes from "prop-types";

const SectionTitle = ({heading, subheading}) => {
    return (
        <div className='mb-12 text-center'>
            <p className='mb-3 text-[#D99904] italic'>
                {subheading}
            </p>
            <h2 className='w-max mx-auto py-3 px-12 text-3xl font-semibold border-y-2'>
                {heading}
            </h2>
        </div>
    );
};

SectionTitle.propTypes = {
    heading: PropTypes.string,
    subheading: PropTypes.string,
}

export default SectionTitle;
