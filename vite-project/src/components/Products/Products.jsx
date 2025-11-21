import React from 'react';
import "./Products.scss";

const Products = (props) => {

    const {img, name, price} = props

    return (
        <div className="Product">
            <div className="ProductImg">
                <img id="imgProduct" src={img} alt=""/>
            </div>
            <div className="ProductNamePrice">
                <div className="ProductName">
                    {name}
                </div>
                <div className="ProductPrice">
                    {price}
                </div>
            </div>
        </div>
    );
};

export default Products;