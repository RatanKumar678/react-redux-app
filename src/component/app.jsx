import React, { Component } from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetail from './product-detail';
import { BrowserRouter , Route } from 'react-router-dom';


class App extends Component {
    render() {
        return (
            <>
                <BrowserRouter>
                    <div className="header-section">
                        <Header onFormSubmit={this.onSubmit}/>
                    </div>
                    <div className="main-section">
                        <Route path="/" exact component={ProductList}/>
                        <Route path="/Product-detail" component={ProductDetail}/>
                    </div> 
                </BrowserRouter>
            </>
        );
    }
}

export default App;
