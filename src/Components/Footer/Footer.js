import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { getPosts, saveMaps, saveNumber } from "../Server/config/admin/tuitor";
import "./Footer.css";
import {uzLanguege} from '../../Redux/Actions/uzLanguege';
import {ruLanguege} from '../../Redux/Actions/ruLanguege';
import {enLanguege} from '../../Redux/Actions/enLanguege';
class Footer extends Component {
  state={
    maps:[],
    number:[],
    number2:[],
    numbers:[]
  }
  getFooter=()=>{
    saveMaps(this.props.uzLang,this.props.enLang).then(res=>(
    
      this.setState({
        maps:res.data[0],
      })
      
      
    )).catch(res=>(
      console.log("kechirasiz")
    ))
    

    saveNumber().then(res=>(

      this.setState({
          numbers: res.data,
          number: res.data[0],
          number2: res.data[1]
      })
    )).catch(res=>(
      console.log(res.data)
    ))
  }
  componentDidMount(){
    this.getFooter()
  }

  addTodo = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target),
      formDataObj = Object.fromEntries(formData.entries());
    
    getPosts(formDataObj)
      .then((res) => {
      
        if (res && res.data) {
          alert("Yuborildi.");
        } else {
          alert("Yuborilmadi");
        }
      })
      .catch((res) => {
        alert("Xato");
      });
  };
  render() {
    const {maps,number,number2,numbers} = this.state;
    const {uzLang,enLang} = this.props;
    return (
      <footer>
        <div className="container pt-5">
          <div className="row mb-5 justify-content-center">
            <div className="col-lg-6" >
              <h4 className="text-center post">{uzLang?"Xabar yuborish":enLang?"Get In Touch with Me":"Сообщения"}</h4>
              <Form onSubmit={(e) => this.addTodo(e)} >
                <Form.Group controlId="text">
                  <Form.Label>{uzLang?"F.I.O":enLang?"F.I.O":"Ф.И.О"}</Form.Label>
                  <Form.Control
                    type="text"
                    name="subject"
                    placeholder="Isim Familya Ochistva"
                  />
                </Form.Group>
                <Form.Group controlId="emai">
                  <Form.Label>{uzLang?"E-pochta":enLang?"Email":"Электронное письмо"}</Form.Label>
                  <Form.Control type="email" name="email" placeholder="Email" />
                </Form.Group>
                <Form.Group controlId="phone">
                  <Form.Label>{uzLang?"Tel: Raqam(Davlat kodi bilan kiritish talab qilinadi)":enLang?"Phone (Enter with country code required)":"Телефон (Введите код страны)"}</Form.Label>
                  <Form.Control type="text" name="phone" placeholder="tel: +99899 999 99 99" />
                </Form.Group>
                <Form.Group controlId="message" className='mb-3'>
                  <Form.Label>{uzLang?"Izohlar":enLang?"Message":"Сообщение"}</Form.Label>
                  <Form.Control as="textarea" name="message" rows={3} placeholder='Murojat matni...'/>
                </Form.Group>
                <Button variant="primary" type="submit" className='float-end'>
                  {uzLang?"Jo\'natish":enLang?"Save":"Спасти"}
                </Button>
                <Button variant="primary" type="reset" className="mx-2 float-end">
                  {uzLang?"Tozalash":enLang?"Clear":"Очистить"}
                </Button>
              </Form>
            </div>
          </div>

          <div className="row py-5 row-footer">
            <div className="col-lg-4" data-aos="zoom-in-down" data-aos-duration="2000">
              <h6>{uzLang?"TIZIM HAQIDA":enLang?"ABOUT US":"О СИСТЕМЕ"}</h6>
              <div className="bottom"></div>
              <p className="my-4 py-2 mb-5">
                {uzLang?"University Profile System axborot tizimi":enLang?"University Profile System information system":"Информационная система University Profile System"}
              </p>
            </div>
            <div className="col-lg-4 mycol4" data-aos="zoom-in-down" data-aos-duration="2000">
              <div>
                <h6>{uzLang?"FOYDALI HAVOLALAR":enLang?"USEFUL LINKS":"ПОЛЕЗНЫЕ ССЫЛКИ"}</h6>
                <div className="bottom"></div>
                <ul className="p-0 my-4">
                  <li>
                    <a href="http://jurnal.tiiame.uz/oz/">
                      {uzLang?'"Irrigatsiya va melioratsiya" ilmiy-texnik jurnali':enLang?'Scientific and technical journal "Irrigation and Land Reclamation"':'Научно-технический журнал "Ирригация и мелиорация"'}
                    </a>
                    <i className="fas fa-chevron-right float-end"></i>
                  </li>
                  <li>
                    <a href="http://sa.tiiame.uz/">
                      {uzLang?'"Barqaror qishloq xo‘jaligi" ilmiy-texnik jurnali':enLang?'Scientific and technical journal "Sustainable Agriculture"':'Научно-технический журнал "Устойчивое сельское хозяйство"'}
                    </a>
                    <i className="fas fa-chevron-right float-end"></i>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 pb-5" data-aos="zoom-in-down" data-aos-duration="2000">
              <div className="contacts">
                <h6>{uzLang?"BOG\‘LANISH":enLang?"OUR CONTACTS":"КОНТАКТЫ"}</h6>
                <div className="bottom"></div>
                <p className="mt-5 ">
                  <i className="fas fa-map-marker-alt myicon"></i> 
                 <a href={maps.link} className='maps' target="_blank"> {maps.name}</a>
                </p>
                <p className="d-flex align-items-center">
                  <i className="fas fa-phone-alt myicon"></i>
                  
                  <div>
                  {numbers.map((item,index)=>(<p className='m-0 ' key={index}> <p className="d-block ">{"  "+ item.phone+" " }</p></p>))}

                  </div>
                </p>
                <p className="d-flex align-items-center">
                  <i className="fas fa-phone-alt myicon"></i>
                  <p className="m-0">
                    <a href='https://admin@tiiame.uz' className='maps'>admin@tiiame.uz</a> <br /> <a className='maps' href='https://www.tiiame.uz'>www.tiiame.uz</a>
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div id='footer' className="section-footer">
          <div className="container">
            <div className="row row-footer p-2 justify-content-between" >
              <div className="col-lg-6 py-3 col-md-6">
                <p>
                  {uzLang?"© 2021 University Profile System. Barcha huquqlar himoyalangan.":enLang?"© 2021 University Profile System. All rights reserved.":"© 2021 University Profile System. Все права защищены."}
                </p>
              </div>
              <div className="col-lg-4 py-3 col-md-6 footericons">
                <p>
                  {" "}
                  <a href="https://t.me/ilovetiiame">
                    <i className="fab fa-telegram "></i>
                  </a>
                  <a href="https://www.facebook.com/tiiame.uz/">
                    <i className="fab fa-facebook-f "></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    uzLang: state.changeLang.uzLang,
    enLang: state.changeLang.enLang,
  };
};

export default connect(mapStateToProps, {uzLanguege,  ruLanguege, enLanguege })(Footer);