import React, {PureComponent} from 'react';
import vectorDown from "../../img/vectorDown.png";
import {connect} from "react-redux";
import PriceDropdownComponent from "./PriceDropdown.component";


class PriceDropdownContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            value: "USD",
            open: false
        };

        this.handleChange = this.handleChange.bind(this);
    }

    _handleDropDown() {

        this.setState({
            open: !this.state.open
        })
    }


    handleChange(event) {
        console.log('Your favorite flavor is: ' + event.target.value);
        this.setState({value: event.target.value});
    }

    render() {
        if (!this.props.products || !this.props.currencies) return null

        let dropDownCurrencies = this.props.currencies.map((item, i) => (
            <option key={i} value={item.value} style={{border: 0 + 'px', background: 'white'}}>
                {item}
            </option>
        ))

        let showForm = <form onSubmit={this.handleSubmit}>
            <br/>
            <br/>
            <label>
                <img src={vectorDown} alt='Vector down'/>

                <select value={this.state.value} onChange={this.handleChange} style={{border: 0 + 'px'}}>
                    {dropDownCurrencies}
                </select>
            </label>
            <input type="submit" value="Submit"/>
        </form>

        return (
            <div>
                <PriceDropdownComponent open={this.state.open} onClick={this._handleDropDown.bind(this)}
                                        currencies={this.props.currencies}/>
                {showForm}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        product: state.product,
        state: state
    }
}

export default connect(mapStateToProps)(PriceDropdownContainer);
