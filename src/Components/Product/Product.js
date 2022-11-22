import React from 'react';
import './Product.css';

function Product(props) {
    const {name, picture, price} = props.product;
    return (
        <div className='productContainer'>
            <div className='productDescription'>
                <div className='productname'>
                    {name}
                </div>
                <div className='productPrice'>
                    {price}
                </div>
            </div>
            <div className='productPictureContainer'>
                <img className='productPicture' src={require(`../../resources/${picture}`)}/>
            </div>
        </div>
    )
}

export default Product;