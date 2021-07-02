import React, {Component} from 'react';
import {ButtonGroup, Modal, ModalHeader, ModalBody, ModalFooter, Button} from "reactstrap";
class Texnologiya extends Component {
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
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="card mb-2">
                            <img src={item.imgURL} className="card-img-top w-100" alt="img"/>
                            <div className="card-body">
                                <h5 className="card-title">
                                    {item.name}
                                </h5>
                                <p className="card-text font-italic">
                                    {item.brand} {item.size}
                                </p>
                                <p className="card-text font-weight-bold">
                                    {item.price} $
                                </p>
                                <button onClick={() => this.toggle(item)} className="mt-3 btn btn-dark btn-block"
                                        type="button">Add to card
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
            tempObject: item ? item : null,
        })
        this.props.changeCount(null,'reset')
    }


    render() {
        const {content, modal, tempObject} = this.state
        const {changeCount, tempCount, tempPrice,addToCart} = this.props
        return (
            <section className="products-section">
                <div className="container">
                    <h1 className="text-center p-5">
                        IT Texnologiyalari haqida malumot
                    </h1>
                    <div className="row">
                        {content}
                    </div>
                </div>

                <Modal isOpen={modal} toggle={this.toggle} className="modal-xl">
                    <ModalHeader toggle={this.toggle} className="text-center">
                        <div className="d-flex justify-content-end mb-2">
                            <h4>Maxsulotlarimiz bilan tanishing</h4>
                        </div>
                    </ModalHeader>
                    <ModalBody className="my-modal">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="card h-100">
                                        <div className="card-header bg-transparent text-center">
                                            <h3 className="card-title">Info</h3>

                                        </div>
                                        <div className="card-body">
                                            <h6 className="card-title">{tempObject && tempObject.name} </h6>
                                            <p className="card-title font-italic">size: {tempObject && tempObject.brand} {tempObject && tempObject.size}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="card h-100">
                                        <div className="card-header bg-transparent text-center">
                                            <h4 className="card-title">Texnologiyalar</h4>
                                        </div>
                                        <div className="card-body p-0">
                                            <img className="w-100" src={tempObject && tempObject.imgURL} alt="img-top"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="card h-100">
                                        <div className="card-header bg-transparent text-center">
                                            <h4 className="card-title">Action</h4>
                                        </div>
                                        <div className="card-body">
                                            <h6>price: {tempObject && tempObject.price} $</h6>
                                            {tempPrice ? <h6>Total price: {tempPrice}$</h6>:null}
                                            <h6>Total count: {tempCount}</h6>
                                            <ButtonGroup>
                                                <Button onClick={() => changeCount(tempObject, false)}>-</Button>
                                                <Button outline color="secondary " disabled>{tempCount}</Button>
                                                <Button onClick={() => changeCount(tempObject, true)}>+</Button>
                                            </ButtonGroup>

                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={()=>addToCart(tempObject,this.setState({modal:false}))}>Submit</Button>
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>

            </section>
        );
    }
}

export default Texnologiya;