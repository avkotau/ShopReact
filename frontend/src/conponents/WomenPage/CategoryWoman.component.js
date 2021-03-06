import React, {Component} from 'react';
import './CategoryWoman.component.scss';
import WomenShowProductsCardComponent from "./WomenShowProductsCard.component";
import {connect} from "react-redux"

class CategoryWomanComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showing: true,
            product: '',
        };

        this.selectedProduct = this.selectedProduct.bind(this);
    }

    selectedProduct(prod) {
        console.log(prod.name)
        this.setState(
            {product: prod,}
        )
    }





    render() {

        if (!this.props.products) return null

debugger;
        let showProducts = this.props.products.map((prod, i) => (
                <div>
                    <ul className='product_card' key={prod.id} onClick={() => this.selectedProduct(prod, i)}>
                        <li>
                            {<img className='category_picture' alt="not found" src={this.props.products[i].gallery[0]}/>}
                        </li>
                        <li>{prod.name}</li>

                        {/*<li>{this.props.currency.currencySign} {this.props.products[i].prices[0].amount}</li>*/}
                        <li>{this.props.currency.currencySign || "\uFF04"} {
                            this.props.currency.currency === "JPY" ? this.props.products[i].prices[3].amount
                                : this.props.currency.currency === "GBP" ? this.props.products[i].prices[1].amount
                                    : this.props.currency.currency === "AUD" ? this.props.products[i].prices[2].amount
                                        : this.props.currency.currency === "RUB" ? this.props.products[i].prices[4].amount : this.props.products[i].prices[0].amount
                        }</li>

                    </ul>
                </div>
            )
        );

        const {showing} = this.state;

        return (
            <>
                <div className='box_general_style'>
                    <h1>Category product</h1>
                    {showing
                        ? <div className='box_products_card' onClick={() => this.setState({showing: !showing})}>
                            {showProducts}
                        </div>
                        : <div><WomenShowProductsCardComponent product={this.state}/></div>
                    }
                </div>
            </>
        );
    }
}
const mapStateToProps = (state) => {
    debugger
    return {
        currency: state.currency
    }
}

export default connect(mapStateToProps)(CategoryWomanComponent);
