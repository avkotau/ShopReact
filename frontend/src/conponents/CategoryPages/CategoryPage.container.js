import React, {PureComponent} from 'react';
import CategoryWomanComponent from "../WomenPage/CategoryWoman.component";

class CategoryPageContainer extends PureComponent {

    render() {
        const {products} = this.props;

        return (
            <div>
                <CategoryWomanComponent products={products}/>
            </div>
        );
    }
}

export default CategoryPageContainer;
