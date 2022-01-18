import {PureComponent} from 'react';
import ShowDropDownCardContainer from "../ShowDropDownCard/ShowDropDownCard.container";


class DropDownCardComponent extends PureComponent {

    render() {

        return (
            <div style={{position: 'absolute'}}>
                <p>DropDownCardComponent</p>
                <ShowDropDownCardContainer product={this.props.product}/>
            </div>
        );
    }
}

export default DropDownCardComponent;
