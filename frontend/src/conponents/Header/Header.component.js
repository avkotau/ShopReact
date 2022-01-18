import React, {PureComponent} from 'react';
import {NavLink} from "react-router-dom";
import WomenPageComponent from "../CategoryPages/CategoryPage.container";
import './Header.component.scss';
import logo from '../../img/a-logo.svg';
import PriceDropdownComponent from "../PriceDropdown/PriceDropdown.container";
import DropDownCardContainer from "../DropDownCard/DropDownCard.container";

class HeaderComponent extends PureComponent {

    render() {
        const {products} = this.props;
        const {currencies} = this.props;
        return (
            <div className="block_nav">
                <div className="block_nav_name">
                    <NavLink to="/women" className="block_nav_women">
                        <span>women</span>
                    </NavLink>
                    <NavLink to="/men" className="block_nav_men">
                        <span>men</span>
                    </NavLink>
                    <NavLink to="/kinds" className="block_nav_kinds">
                        <span>kinds</span>
                    </NavLink>
                </div>
                <div className="block_nav_logo">
                    <NavLink to="/" className="block_nav_logo">
                        <img src={logo} alt="Logo"/>
                    </NavLink>
                </div>
                <div className="block_nav_shop">
                    <NavLink to="/women" component={WomenPageComponent} className="block_nav_shop">

                        {/*Why put all products in there?*/}
                        <PriceDropdownComponent products={products} currencies={currencies}/>
                        <DropDownCardContainer/>
                    </NavLink>
                </div>

            </div>
        )
    }
}

export default HeaderComponent;
