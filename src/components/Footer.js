import'./Footer.css'

function Footer() {
    return (
        <div className="footer">
            
            <div className="container">
                <div className="row py-5 text-justify">
                    <div className="col-lg-3 pb-3 col-sm-6">
                        <h5>Kompaniya</h5>
                        <a href="#">Biz haqimizda </a> <br/>
                        <a href="#">Mahsulotlar</a> <br/>
                        <a href="#">Xizmatlar</a> <br/>
                        <a href="#">Bizning mijozlar</a> <br/>
                        <a href="#">Jamoa</a>
                    </div>
                    <div className="col-lg-3 pb-3 col-sm-6">
                        <h5>Xizmatlar</h5>
                        <a href="#">Ipakli posma</a> <br/>
                        <a href="#">Ofsite bosma</a> <br/>
                        <a href="#">Kesish</a> <br/>
                        <a href="#">Ultira Binafsha-rang</a> <br/>
                        <a href="#" >Bo'rtirish</a> <br/>
                        <a href="#">Laminatsiya</a> <br/>
                        <a href="#">Qog'oz kashirovka</a> <br/>
                        <a href="#">O'yib olish</a> <br/>
                    </div>
                    <div className="col-lg-3 pb-3  col-sm-6">
                        <h5>Mijozlar uchun</h5>
                        <a href="#">Rahbariyat</a> <br/>
                        <a href="#">Tarix</a><br/>
                        <a href="#">Yangiliklar</a> <br/>
                        <a href="#">Maketlar uchun talab</a><br/>
                        <a href="#">Aloqa</a><br/>
                    </div>
                    <div className="col-lg-3 pb-3  col-sm-6">
                        <h5>Aloqa</h5>
                        <i className="fas fa-star"> </i>
                        <i className="fas fa-star"> </i>
                        <i className="fas fa-star"> </i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer