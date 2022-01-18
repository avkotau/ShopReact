import {PureComponent} from 'react';
import CategoryPageContainer from './conponents/CategoryPages/CategoryPage.container'
import HeaderComponent from "./conponents/Header/Header.component";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {loadJobs} from "./query/ProductsQuery";
import {currencyMain} from "./query/currencyMain";
import {createStore} from "redux";
import {Provider} from "react-redux";
import reducers from "./reducers/index";
import NotFoundPage from "./conponents/NotFoundPage/NotFoundPage";


const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


class App extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            products: null,
            setProfile: this.setProfile,
        }

    };

    setProfile = (product) => {
        this.setState({product})
    }

    async componentDidMount() {
        const products = await loadJobs();
        this.setState({products})
        const currencies = await currencyMain();
        this.setState({currencies})
    }

    render() {
        const {products, currencies} = this.state;

        return (
            <BrowserRouter>
                <Provider store={store}>
                    {/*<div>*/}
                    <HeaderComponent products={products} currencies={currencies}/>
                    {/*<CategoryPageContainer products={products}/>*/}
                    <Routes>

                        <Route path="*" element={<NotFoundPage/>}/>
                        <Route path="/women" element={<CategoryPageContainer products={products}/>}/>
                        {/*<Route path="/men" element={<WomenPageComponent/>}/>*/}
                        {/*<Route path="/kinds" element={<WomenPageComponent/>}/>*/}
                    </Routes>
                    {/*</div>*/}
                </Provider>
            </BrowserRouter>
        );
    }
}

export default App;
