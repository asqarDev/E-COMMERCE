import React, {Component} from 'react'
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Product from "./components/products/Product";
import Footer from "./components/Footer";
import Texnologiya from "./components/products/Texnologiya";
import Malumotlar from "./components/Card/Malumotlar";

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

class App extends Component {

    constructor() {
        super();
        this.state = {

            products: [
                {
                    id: 1, name: 'T-shirt', brand: 'Nike', size: 'XL',
                    price: 25, imgURL: '/images/t-shirt-nike.jpg'
                },
                {
                    id: 2, name: 'T-shirt', brand: 'Reebok', size: 'L',
                    price: 20, imgURL: '/images/t-shirt-reebok.jpg'
                },
                {
                    id: 3, name: 'Pants', brand: 'Reebok', size: 'M',
                    price: 35, imgURL: '/images/pants-reebok.jpg'
                },
                {
                    id: 4, name: 'Pants', brand: 'Nike', size: 'S',
                    price: 40, imgURL: '/images/pants-nike.jpg'
                },
                {
                    id: 5, name: 'Cap', brand: 'Nike', size: 'standart',
                    price: 30, imgURL: '/images/cap-nike.jpg'
                },
                {
                    id: 6, name: 'Cap', brand: 'Adidas', size: 'XXL',
                    price: 32, imgURL: '/images/cap-adidas.jpg'
                },
                {
                    id: 7, name: 'Snickers', brand: 'Adidas', size: 'M',
                    price: 125, imgURL: '/images/snickers-adidas.jpg'
                },
                {
                    id: 8, name: 'Snickers', brand: 'Nike', size: 'S',
                    price: 150, imgURL: '/images/snickers-nike.jpg'
                }
            ],
            texnologiya: [
                {id: 1, name: 'Acer', brand: 'core', size: 'i7', price: 700, imgURL: 'images/ASUS.jpg'},
                {id: 2, name: 'Acer', brand: 'core', size: 'i7', price: 600, imgURL: 'images/Acer.jfif'},
                {id: 3, name: 'Acer', brand: 'core', size: 'i7', price: 800, imgURL: 'images/aseri7.jfif'},
                {id: 4, name: 'Acer', brand: 'core', size: 'i7', price: 700, imgURL: 'images/Notebook.jfif'},
                {id: 5, name: 'Lenovo', brand: 'core', size: 'i5', price: 1000, imgURL: 'images/Lenovo.jfif'},
                {id: 6, name: 'Apple', brand: 'core', size: 'i5', price: 1200, imgURL: 'images/Apple5.jfif'},
                {id: 7, name: 'Apple', brand: 'core', size: 'i5', price: 1100, imgURL: 'images/Appel2019.jfif'},
                {id: 8, name: 'Apple', brand: 'core', size: 'i5', price: 900, imgURL: 'images/Appel20.jfif'},
                {id: 9, name: 'Acer', brand: 'core', size: 'i7', price: 700, imgURL: 'images/Appel.jfif'},
                {id: 10, name: 'Acer', brand: 'core', size: 'i3', price: 700, imgURL: 'images/kompyuter.jpg'},
                {id: 11, name: 'Acer', brand: 'core', size: 'i3', price: 700, imgURL: 'images/ITRasmi.jfif'},
                {id: 12, name: 'Acer', brand: 'core', size: 'i5', price: 700, imgURL: 'images/check.jfif'},
            ],
            cardInfo: [
                {
                    name: "Lee",
                    number: 12345678,
                    month: 1,
                    year: 2019,
                    cvv: 1234,
                    balance:10000
                },
                {
                    name: "Donold",
                    number: 12345678,
                    month: 1,
                    year: 2020,
                    cvv: 1235,
                    balance:20000
                },
                {
                    name: "Asqar",
                    number: 12345678,
                    month: 1,
                    year: 2021,
                    cvv: 1236,
                    balance:30000

                },
            ],
            orderInfo:
                {
                    id: 123456,
                    FirstName: 'Jackie',
                    LastName: 'Chan',
                    totalPrice: 0,

                },
            orderProducts: [],
            tempCount: 1,
            tempPrice: 0,
        }

    }

    changeCount = (item, status) => {
        if (status !== 'reset') {
            if (status === true) {
                this.setState({
                    tempCount: this.state.tempCount + 1,
                    tempPrice: (this.state.tempCount + 1) * item.price
                })
            } else if (this.state.tempCount >= 1 && !status) {
                this.setState({
                    tempCount: this.state.tempCount - 1,
                    tempPrice: (this.state.tempCount - 1) * item.price
                })
            } else if (status === 'cart-plus') {
                let {orderProducts} = this.state
                let objectId = this.state.orderProducts.findIndex(obj => obj.id === item)
                orderProducts[objectId].TotalCount += 1
                orderProducts[objectId].totalPrice = orderProducts[objectId].TotalCount * orderProducts[objectId].price
                this.setState({
                    orderProducts: orderProducts
                })
                this.calculateAllPrices()
            } else if (status === 'cart-minus') {
                let {orderProducts} = this.state
                let objectId = this.state.orderProducts.findIndex(obj => obj.id === item)
                if (orderProducts[objectId].TotalCount >= 1) {
                    orderProducts[objectId].TotalCount -= 1
                }
                orderProducts[objectId].totalPrice = orderProducts[objectId].TotalCount * orderProducts[objectId].price
                this.setState({
                    orderProducts: orderProducts
                })
                this.calculateAllPrices()
            }
        } else {
            this.setState({
                tempCount: 1,
                tempPrice: 0,
            })
        }

    }

    addToCart = (item) => {
        const {tempCount, orderInfo, orderProducts} = this.state
        if (tempCount >= 1) {
            item.orderInfo = orderInfo.id
            item.TotalCount = tempCount
            item.totalPrice = tempCount * item.price
            orderProducts.push(item)
        }
    }

    calculateAllPrices = () => {
        let priceCount = 0
        const {orderProducts, orderInfo} = this.state
        orderProducts.map(item => {
            priceCount = priceCount + item.totalPrice
        })
        orderInfo.totalPrice = priceCount
        this.setState({
            orderInfo: orderInfo
        })


    }
    deleteProductFromCart = (id) => {
        const {orderProducts} = this.state
        let objectId = orderProducts.findIndex(item => item.id === id);
        orderProducts.splice(objectId, 1)
        this.setState({
            orderProducts: orderProducts
        })
        this.calculateAllPrices()
    }


    render() {

        const {products, texnologiya, tempCount, tempPrice, orderProducts, orderInfo, checkout,cardInfo} = this.state

        return (
            <Router>
                <Navbar orderInfo={orderInfo} orderProducts={orderProducts} allProductsPrice={orderInfo.totalPrice}
                        calculateAllPrices={this.calculateAllPrices}/>
                <Switch>
                    <Route exact path="/">
                        <Section/>
                    </Route>
                   
                    <Route path="/products" render={() => (
                        <Product tempCount={tempCount} tempPrice={tempPrice} data={products}
                                 changeCount={(item, status) => this.changeCount(item, status)}
                                 addToCart={(item) => this.addToCart(item)} checkout={checkout}
                        />
                    )}/>
                    <Route path="/texnologiya" render={() => (
                        <Texnologiya tempCount={tempCount} tempPrice={tempPrice} data={texnologiya}
                                     changeCount={(item, status) => this.changeCount(item, status)}
                                     addToCart={(item) => this.addToCart(item)} checkout={checkout}
                        />
                    )}/>
                    <Route path="/malumotlar" render={() => (
                        <Malumotlar
                            deleteProductFromCart={(id) => this.deleteProductFromCart(id)}
                            orderProducts={orderProducts} allProductsPrice={orderInfo.totalPrice}
                            changeCount={(item, status) => this.changeCount(item, status)}
                            calculateAllPrices={this.calculateAllPrices} checkout={checkout}
                            cardInfo={cardInfo}
                        />
                    )}/>
                </Switch>
                <Footer/>
            </Router>
        );
    }
}

export default App;

