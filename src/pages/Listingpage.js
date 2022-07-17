import Listing from "../components/listing/Listing";
import data from '../data/etsy';

const Listingpage = () => {
    return (
        <Listing items={data}/>
    );
}

export {Listingpage};