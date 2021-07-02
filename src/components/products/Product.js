import React, {Component} from 'react';
import {Modal, ModalHeader, ModalBody, ModalFooter, Button, ButtonGroup} from 'reactstrap'
class Product extends Component {
    constructor() {
        super();
        this.state = {
            content: null,
            modal: false,
            tempObject: null,
        }
    }
    componentDidMount() {
        this.getProductsList()
    }

    getProductsList = () => {

        const {data} = this.props

        this.setState({
            content: data.length ? data.map((item, index) => (
                    <div key={index} className="col-lg-3 col-md-4 col-sm-6">
                        <div className="card">
                            <img className="card-img-top" src={item.imgURL} alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">
                                    {item.name}, {item.brand}
                                </h5>
                                <p className="card-text font-italic">
                                    size: {item.size}
                                </p>
                                <p className="card-text font-weight-bold">
                                    price: {item.price}$
                                </p>
                                <button onClick={() => this.toggle(item)} className="mt-3 btn btn-dark btn-block">
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    </div>
                )) :
                <div className="d-flex justify-content-center text-center w-100 my-5">
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
        })

    }
    toggle = (item) => {
        this.setState({
                modal: !this.state.modal,
                tempObject: item ? item : null
            })
        this.props.changeCount(null, 'reset')
    }

    render() {

        const {content, modal, tempObject} = this.state
        const {changeCount, tempPrice, tempCount,addToCart,checkout} = this.props


        return (
            <section className="products-section">

                <div className="container">
                    <h1 className="text-center my-4">Product page</h1>
                    <div className="row pb-3">
                        {content}
                    </div>
                </div>

                <Modal isOpen={modal} toggle={this.toggle} className="modal-xl">
                    <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                    <ModalBody>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="card border-0 h-100">
                                        <div className="card-header bg-transparent">
                                            <h4 className="card-title">Info</h4>
                                        </div>
                                        <div className="card-body">
                                            <h5>{tempObject && tempObject.name}, {tempObject && tempObject.brand}</h5>
                                            <h6>Size: {tempObject && tempObject.size}</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="card border-0 h-100">
                                        <div className="card-header bg-transparent">
                                            <h4 className="card-title">Product</h4>
                                        </div>
                                        <div className="card-body">
                                            <img className="w-100" src={tempObject && tempObject.imgURL}
                                                 alt="product-img"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="card border-0 h-100">
                                        <div className="card-header bg-transparent">
                                            <h4 className="card-title">Action</h4>
                                        </div>
                                        <div className="card-body">
                                            <h6>Price:{tempObject && tempObject.price} $</h6>
                                            {tempPrice ?  <h6>Total price: {tempPrice} $</h6> : null}
                                            <h6>Total count: {tempCount}</h6>
                                            <ButtonGroup>
                                                <Button onClick={() => changeCount(tempObject, false)}>-</Button>
                                                <Button outline color="secondary" disabled>{tempCount}</Button>
                                                <Button onClick={() => changeCount(tempObject, true)}>+</Button>
                                            </ButtonGroup>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary"
                                checkout = {checkout}   onClick={() => addToCart(tempObject, this.setState({modal: false},))}>Submit</Button>{''}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </section>
        );
    }
}

export default Product;