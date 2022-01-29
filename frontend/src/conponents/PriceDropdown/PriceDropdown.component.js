import React, {PureComponent} from 'react';
import vectorUp from '../../img/vectorUp.png'
import vectorDown from "../../img/vectorDown.png";
import {changeCurrency} from "../../actions/actions";
import {connect} from "react-redux";

class PriceDropdownComponent extends PureComponent {
    constructor() {
        super();
        this.state = {
            currencies: '',
            currency: ''
        }
        //this.selectedCurrency = this.selectedCurrency.bind(this)
    }

    // selectedCurrency = (item) => {
    //     this.setState({
    //     });
    // }

    render() {

        let items = this.props.currencies.map((item) => (
            <ul onClick={(e) => {
                e.preventDefault();
                this.props.changeCurrency(item)
            }}>
                <li onClick={() => this.selectedCurrency(item)}> {item} </li>
            </ul>

        ))
        debugger;
        // {"\u20AC"}{"\uFF04"}{"\uFFE5"}
        //let stateCurrency = this.handleClick() this.state.currencies

        //let choosedCurrency = stateCurrency === " USD " ? "\uFF04" : stateCurrency === " EURO " ? "\u20AC" : "\uFFE5"
//let currency = this.props.currency.currency

        return (
            <div onClick={this.props.onClick} className="dropdown open" style={{position: 'relative'}}>
                <button className="btn btn-default dropdown-toggle" type="button">
                    {this.props.currency.currencySign}
                    {this.props.currency.currency}
                    {/*<span className="caret"/>*/}
                </button>
                {
                    this.props.open
                        ?
                        <div>
                            <ul className="dropdown-menu" style={{position: 'absolute'}}>

                                {items}

                            </ul>
                            <img src={vectorDown} alt='Vector down'/>

                        </div>

                        : <div>
                            <img src={vectorUp} alt='Vector up'/>

                        </div>
                    // null
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    debugger
    return {
        currency: state.currency
    }
}
const mapDispatchToProps = () => {

    return {
        // incrementCount,
        // decrementCount,
        changeCurrency
    }

}
export default connect(mapStateToProps, mapDispatchToProps())(PriceDropdownComponent);
