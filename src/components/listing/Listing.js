import propTypes from "prop-types";
import ListItem from "./ListItem";

const Listing = (props) => {
    const {items} = props;

    return (
        <div className="item-list">
            {items.map(item => <ListItem key={item.listing_id} item={item}/>)}
        </div>
    );
};

Listing.propTypes = {
    items: propTypes.array.isRequired, // список предложений, массив объектов,
}

Listing.defaultProps = {
    items: []
};


export default Listing;