import React, {PureComponent} from 'react';
import {decrementCount, incrementCount} from "../../actions/actions";
import {connect} from "react-redux";

class ShowDropDownCardContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            0: 1,
            units: 1,
            g: 1
        };
        // this.handleChange = this.handleChange.bind(this);

    }

//     handleChange() {
//
//     let b = this.props.units.product.map((el) => el.units)
//         this.setState(b = [b])
//         console.log('b')
//         console.log(b)
//
//         console.log('b')
//
// }


    // componentDidMount() {
    //     this.setState({ g: this.props.count.map(i=>Object.values(i)) });
    // }

    render() {
//let id = this.props.product.product[0].id
let units  = 1
let count = this.props.count
        debugger;
// console.log(Object.values(this.props.count.map(i=>i)));

        let showItems = this.props.product.product.map((item) => (
            <div>
                <div>

                    <button onClick={(e) => {
                        e.preventDefault();
                        // this.handleChange()

                        this.props.incrementCount({id: item.id, units: units})
                        debugger
                    }}>+</button>

                    {/*{Object.values(this.props.count)[0]+1}*/}
                    {/*{this.props.product.count.map(i => i === )}*/}

                    {(count.map(i=>Object.values(i)))}

                    {/*{this.props.count.map(i=>i)}*/}


                        <button onClick={(e) => {
                            e.preventDefault();
                            this.props.decrementCount(this.props.product.product)
                        }}>-</button>
                </div>
                <div>
                    <div>{item.name}</div>
                    <div>{item.prices[0].currency}</div>
                    <div>{item.prices[0].amount}</div>
                    <img src={item.gallery[0]} style={{width: 80 + 'px'}} alt='??????'/>
                </div>
            </div>


        ))

        return (
            <>
                {showItems}

            </>
        );
    }
}

const mapDispatchToProps = () => {
    return {
        incrementCount,
        decrementCount
    }
}

const mapStateToProps = (state) => {
    debugger
    return {
        product: state.countProducts,
        count: state.countProducts.count,
        units: state.units,
    }
}

export default connect(mapStateToProps, mapDispatchToProps())(ShowDropDownCardContainer);
