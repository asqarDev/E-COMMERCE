import {Link} from "react-router-dom";
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import {useState} from 'react'

function Navbar(props) {

    const [dropdownOpen, changeDropdown] = useState(false)

    const toggle = () => {
        changeDropdown(!dropdownOpen)
        props.calculateAllPrices()
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <div className="container">
                  <a className="navbar-brand" href="#"> <img style={ {width: 40, height: 40}} src="/Logo.png"/> </a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse"
                          data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false"
                          aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                          <li className="nav-item active">
                              <Link className="nav-link" to="/">
                                  Home
                              </Link>
                          </li>
                          <li className="nav-item">
                              <Link className="nav-link" to="/products">
                                  Products
                              </Link>
                          </li>
                          <li className="nav-item">
                              <Link className="nav-link" to="/texnologiya">
                                  Texnologiya
                              </Link>
                          </li>

                      </ul>

                      <div className='ml-lg-auto'>
                          <div className="d-flex align-items-center">
                              <Dropdown className="bg-transparent" isOpen={dropdownOpen} toggle={toggle}>
                                  <DropdownToggle caret>
                                      Dropdown
                                  </DropdownToggle>
                                  <DropdownMenu>
                                      {props.orderProducts.length ?
                                          props.orderProducts.map((item, index) => (
                                              <DropdownItem key={index}>
                                                  {item.name} {item.TotalCount}x
                                              </DropdownItem>
                                          )) :
                                          <DropdownItem>
                                              No Data
                                          </DropdownItem>
                                      }
                                      <DropdownItem divider/>
                                      {props.orderProducts.length ?
                                          <DropdownItem>
                                              <Link to="/malumotlar">Total Price: {props.allProductsPrice} $</Link>
                                          </DropdownItem>:null
                                      }

                                  </DropdownMenu>
                              </Dropdown>
                              <h5 className="ml-2 text-white">
                                  {props.orderInfo.FirstName} {props.orderInfo.LastName}
                              </h5>
                          </div>
                      </div>
                  </div>
              </div>
            </nav>
        </div>
    )
}

export default Navbar