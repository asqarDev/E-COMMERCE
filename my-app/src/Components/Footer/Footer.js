import React, { Component } from 'react'
import './Footer.css'
export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="container">
                    <div className="row py-5">
                        <div className="col-lg-4">
                            <h6>TIZIM HAQIDA</h6>
                            <div className='bottom'></div>
                            <p className='my-4 py-2'>University Profile System axborot tizimi</p>
                        </div>
                        <div className="col-lg-4 mycol4">
                            <h6>FOYDALI HAVOLALAR</h6>
                            <div className="bottom"></div>
                            <ul className='p-0 my-4'>
                                <li><a href="http://jurnal.tiiame.uz/oz/">"Irrigatsiya va melioratsiya" ilmiy-texnik jurnali</a><i className='fas fa-chevron-right float-end'></i></li>
                                <li><a href="http://sa.tiiame.uz/">"Barqaror qishloq xo‘jaligi" ilmiy-texnik jurnali</a><i className='fas fa-chevron-right float-end'></i></li>
                            </ul>
                        </div>
                        <div className="col-lg-4">
                           <h6>BOG‘LANISH</h6>
                           <div className="bottom"></div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
