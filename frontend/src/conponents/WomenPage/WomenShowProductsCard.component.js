import React, {PureComponent} from 'react';
import './WomenShowProductsCard.component.scss';
import {connect} from "react-redux";
import {addProductToCard} from "../../actions/actions";


class WomenShowProductsCardComponent extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            product: this.handleClick
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = (product) => {
        console.log(product)
        this.setState({product: product});
    }

    render() {
        const product = this.props.product.product
        if (!product) return null
        let images = product.gallery.map((picture, i) => (
            <div className={"picture_" + i}>
                <img src={picture} alt="Photo" className={"picture_products_card"}/>
            </div>
        ))

        let sizeItems = product.attributes[0].items.map((sizePart) => (
            <div>{sizePart.displayValue}</div>
        ))

//может установить description с помощью ramda?
        let createDescription = () => {
            return {__html: product.description};
        };
let count = 1
        return (
            <div className='box_product_card'>
                <div className='box_pictures'>
                    {images}
                </div>
                <div>
                    <h1>{product.name}</h1>
                    <h1>{product.attributes[0].name}</h1>
                    <h1>{sizeItems}sizeItems</h1>
                    <h1>Price: {product.prices[0].amount}</h1>
                    <div>
                        <button onClick={() => this.handleClick(product)}>Add to card</button>
                        <button onClick={(e) => {
                            e.preventDefault();
                            //this.props.addProductToCard(product, {[product.id]: count})
                            this.props.addProductToCard(product,  count)
                            console.log(product.description)
                        }}>ADD TO CARD FOR REDUX
                        </button>
                    </div>
                    <div dangerouslySetInnerHTML={createDescription()}/>
                    {/*<div>*/}
                    {/*    <button onClick={() => this.props.incrementCount()}>+</button>*/}
                    {/*    <button onClick={() => this.props.decrementCount()}>-</button>*/}
                    {/*</div>*/}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    debugger
    return {
        count: state.count,
    }
}

const mapDispatchToProps = () => {
    return {
        // incrementCount,
        // decrementCount,
        addProductToCard
    }

}


export default connect(mapStateToProps, mapDispatchToProps())(WomenShowProductsCardComponent);
