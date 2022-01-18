import React, {PureComponent} from 'react';
import vectorUp from '../../img/vectorUp.png'
import vectorDown from "../../img/vectorDown.png";

class PriceDropdownComponent extends PureComponent {
    constructor() {
        super();
        this.state = {
            value: "\uFF04"
        }
    }

    handleChange(event) {
        console.log('Your favorite flavor is: ' + event.target.value);
        this.setState({value: event.target.value});
    }

    render() {

        let items = this.props.currencies.map(function (item) {
            return <li><a href="#"> {item} </a></li>

        })

        return (
            <div onClick={this.props.onClick} className="dropdown open" style={{position: 'relative'}}>
                <button className="btn btn-default dropdown-toggle" type="button">
                    {this.state.value}
                    <span className="caret"/>
                </button>
                {
                    this.props.open
                        ?
                        <div>
                            <ul className="dropdown-menu" style={{position: 'absolute'}} onChange={this.handleChange}>
                                {items}
                            </ul>
                            <img src={vectorDown} alt='Vector down'/>
                        </div>

                        : <div><img src={vectorUp} alt='Vector down'/> {"\u20AC"}{"\uFF04"}{"\uFFE5"}</div>
                    // null
                }
            </div>
        )
    }
}


export default PriceDropdownComponent;
