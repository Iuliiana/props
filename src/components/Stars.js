import Star from "./Star";
import propTypes from 'prop-types';

const Stars = (props) => {
    const {count} = props;
    // Если рейтинг меньше 1 или больше 5, или вообще не число, то компонент не должен иметь какого-либо представления в DOM.
    const isValidCountStars = (count) => {
        return count >= 1 && count <= 5 && typeof count === 'number'
    }

    return (
        <>
            {
                isValidCountStars(count) &&
                (
                    <ul className="card-body-stars u-clearfix">
                        {[...Array(count)].map((_, index) => <Star key={index}/>)}
                    </ul>
                )
            }
        </>
    );
};

Stars.defaultProps = {
    count: 0
};
Stars.propTypes = {
    count: propTypes.number.isRequired
};


export default Stars;