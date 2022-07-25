import propTypes from "prop-types";
import classNames from 'classnames';

const ListItem = (props) => {
    const {item} = props;

    const quantityClassName = classNames('item-quantity', {
        'level-low': item.quantity <= 10,
        'level-medium': item.quantity > 10 && item.quantity <= 20,
        'level-high': item.quantity > 20,
    });

    const priceFormatter = (price, code) => {
        let result = '';
        if (!!code && !!price) {
            const formatter = new Intl.NumberFormat("ru", {
                style: "currency",
                currency: code,
                minimumFractionDigits: 2
            });
            result = formatter.format(price);
        } else {
            result = price;
        }

        return result;
    }


// fixme &hellip;
    const titleValidate = (title, n) => {
        return (title.length > n) ? title.substr(0, n - 1) + '...' : title;
    }

    return (
        <div className="item">
            <div className="item-image">
                <a href={item.url}>
                    <img src={item.MainImage.url_570xN} alt={item.title}/>
                </a>
            </div>
            <div className="item-details">
                <p className="item-title">{titleValidate(item.title, 50)}</p>
                <p className="item-price">{priceFormatter(item.price, item.currency_code)}</p>
                <p className={quantityClassName}>{item.quantity} left</p>
            </div>
        </div>
    );
};

ListItem.propTypes = {
    listing_id: propTypes.number, // уникальный идентификатор предложения
    url: propTypes.string, // ссылка на предложение
    MainImage: propTypes.string, //адрес главной картинки
    title: propTypes.string, // название предложения
    currency_code: propTypes.string, // код валюты
    price: propTypes.string, // цена
    quantity: propTypes.number, //доступное количество
};


export default ListItem;