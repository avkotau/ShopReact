import React, {PureComponent} from 'react';

class ShowDropDownCardContainer extends PureComponent {

    render() {
        debugger;
        let showItems = this.props.product.product.map((item) => (

            <div>
                <div>{item.name}</div>
                <div>{item.prices[0].currency}</div>
                <div>{item.prices[0].amount}</div>
                <img src={item.gallery[0]} style={{width: 80 + 'px'}} alt='??????'/>
            </div>
        ))

        return (
            <>
                {showItems}
            </>
        );
    }
}


export default ShowDropDownCardContainer;
