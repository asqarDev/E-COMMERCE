import React from 'react';
import {ButtonGroup, Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import {toast} from "react-toastify";
import {AvForm, AvField} from 'availity-reactstrap-validation';
import {useState} from 'react'

export default function Malumotlar(props) {

    const [modal, setModal] = useState(false);
    const toggle = () => {
        setModal(!modal)
    }
    const handleValidSubmit = (event, values) => {

        const {cardInfo, allProductsPrice} = props

        let counter = 0
        let tempObject = null

        cardInfo.map(item => {
            if (item.name === values.name && item.number === parseInt(values.number) && item.month === parseInt(values.month) && item.year === parseInt(values.year) && item.cvv === parseInt(values.cvv)) {
                counter = 1
                tempObject = item.id
            }
        })
        if (counter === 1) {
            let cardIndex = cardInfo.findIndex(obj => obj.id === tempObject)
            cardInfo[cardIndex].balance -= allProductsPrice
            toast.success('yes')
        } else if (counter === 0) {
            toast.error('no')
        }


    }
    const {orderProducts,allProductsPrice, changeCount, deleteProductFromCart} = props
    return (

        <div className="section">
            <div className="container my-5">
                <div className="d-flex justify-content-between">
                    <h1 className="mb-5">My cart</h1>
                    <div className="d-flex align-items-center mb-5">
                        <h4>All products price: <span className="badge badge-primary">{allProductsPrice}$</span></h4>
                        <Button color="warning" className="ml-3" onClick={toggle}>Checkout</Button>
                    </div>
                </div>
                <div className="row">
                    {orderProducts.length ? orderProducts.map((item, index) => (
                            <div className="col-lg-6 col-md-4 col-sm-6">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="card border-0">
                                            <img className="w-100 h-100" src={item.imgURL} alt="product"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="card border-0">
                                            <h5>{item.name}, {item.brand}</h5>
                                            <h5>Size: {item.size}</h5>
                                            <h5>Price: <span className="badge badge-danger">{item.price}$</span></h5>
                                            <h5>Total count: <span className="badge badge-warning">{item.TotalCount}</span>
                                            </h5>
                                            <h5>Total price: <span className="badge badge-danger">{item.totalPrice}$</span>
                                            </h5>
                                        </div>
                                        <div className="card border-0 my-4">
                                            <ButtonGroup>
                                                <Button onClick={() => changeCount(item.id, "cart-minus")}>-</Button>
                                                <Button outline color="secondary" disabled>{item.TotalCount}</Button>
                                                <Button onClick={() => changeCount(item.id, "cart-plus")}>+</Button>
                                            </ButtonGroup>
                                        </div>
                                        <div className="card border-0">
                                            <Button color="danger"
                                                    onClick={() => deleteProductFromCart(item.id)}>Remove</Button>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <hr/>
                                    </div>
                                </div>
                            </div>

                        )) :
                        <div className="col-lg-2 offset-lg-5">
                            <div className="card border-0">
                                <h4>No data</h4>
                            </div>
                        </div>

                    }
                </div>
            </div>
            <div className="container my-container">
                <div className="row">
                    <div className="col-lg-12 p-0">

                        <Modal isOpen={modal} toggle={toggle} backdrop="static">
                            <AvForm onValidSubmit={handleValidSubmit}>
                                <ModalHeader toggle={toggle}>Modal title
                                </ModalHeader>
                                <ModalBody>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <AvField name="text" label="Name on Card" type="text" required/>
                                        </div>
                                        <div className="col-lg-6">
                                            <AvField name="number" label="Card Number" type="number" required/>
                                        </div>
                                        <div className="col-lg-4">
                                            <AvField type="select" name="month" label="Option"
                                                     helpMessage="Idk, this is an example. Deal with it!">
                                                <option value="">Select a month</option>
                                                <option value="1">Janvary</option>
                                                <option value="2">Fevrary</option>
                                                <option value="3">March</option>

                                            </AvField>
                                        </div>
                                        <div className="col-lg-4">
                                            <AvField name="year" type="select" label=". ">
                                                <option value="1">2021</option>
                                                <option value="2">2020</option>
                                                <option value="3">2019</option>
                                            </AvField>
                                        </div>
                                        <div className="col-lg-4">
                                            <AvField name="text" label="CVV" maxLength="4" type="text" required/>
                                        </div>
                                    </div>

                                </ModalBody>
                                <ModalFooter>
                                    <Button color="primary">Pay</Button>{' '}
                                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                                </ModalFooter>
                            </AvForm>
                        </Modal>

                    </div>
                </div>
            </div>
        </div>
    )
}