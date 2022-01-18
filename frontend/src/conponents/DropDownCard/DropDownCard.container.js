import React, {PureComponent} from 'react';
import {connect} from "react-redux";
import DropDownCardComponent from "./DropDownCard.component"
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import emptyCart from "../../img/Empty Cart.png";

class DropDownCardContainer extends PureComponent {
    state = {
        showing: false,
    };

    // shouldComponentUpdate(prevProps, prevState) {
    //
    //         if(prevProps.product.id !== this.props.product.id) {
    //             return this.state.count +=0.5
    //           }
    //         return true
    // }

    render() {
        const {showing} = this.state;
        const count = this.props.product.product.length;

        return (
            <div>
                <div>
                    <img src={emptyCart} alt='Empty cart'/>
                    {count}
                </div>
                <button onClick={() => this.setState({showing: !showing})}>Click me</button>
                {(showing && count)
                    ? <DropDownCardComponent product={this.props.product} count={count} style={{position: 'relative'}}/>
                    : <NotFoundPage/>
                }
            </div>
        );
    }
}

debugger;
const mapStateToProps = (state) => {
    return {
        product: state.product,
    }
}
export default connect(mapStateToProps)(DropDownCardContainer);

