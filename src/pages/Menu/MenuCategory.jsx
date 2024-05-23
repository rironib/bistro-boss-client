import Cover from "../../components/Cover.jsx";
import ListItems from "../../components/ListItems.jsx";
import PropTypes from "prop-types";

const MenuCategory = ({items, cover, title, loading}) => {
    return (
        <>
            <Cover cover={cover} title={title}
                   desc={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
                   pt={'180px'}/>
            <ListItems items={items} title={title} loading={loading}/>
        </>
    );
};

MenuCategory.propTypes = {
    items: PropTypes.array.isRequired,
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
}

export default MenuCategory;
