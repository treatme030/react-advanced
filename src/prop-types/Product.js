import React from 'react';
import PropTypes from 'prop-types'
import defaultImage from '../assets/default-image.jpeg'

//props로 전달될 때, image가 객체이고, 그 안에 url이 있는 경우 
//타입을 정해주지 않으면 url이 표시가 되지 않음
const Product = ({ image, name, price }) => {
    const url = image && image.url

    return (
        <article className="product">
            {/* '||'로 기본값 설정 */}
            <img src={url || defaultImage} alt={name || 'default name'} />
            <h4>{name}</h4>
            <p>${price || 3.99}</p>
        </article>
    );
};

Product.propTypes = {
    image: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}

// Product.defaultProps = {
//     name: 'default name',
//     price: 3.39,
//     image: defaultImage
// }

export default Product;