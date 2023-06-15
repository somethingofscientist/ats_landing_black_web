import React from 'react'
import style from './Customer.module.css';
// import Curve from '../curve/Curve';
import avatar1 from '../../Images/Testimonial/Avatar Image.png'
import avatar2 from '../../Images/Testimonial/Avatar Image2.png'
import avatar3 from '../../Images/Testimonial/Avatar Image3.png'


const CustomerSlider = () => {
    return (
        <>
            <div id="slider_section" className={style.main_container}>
                <div className={style.heading}>Customer Testimonials</div>
                <div className={style.subheading}>
                    They Love Us ...
                </div>

                {/* slider */}
                <div className={style.slider_container}>
                    {/* <div className={style.slider_left_button}>
                        <i className="fa-solid fa-arrow-left"></i>
                    </div> */}

                    <div className={style.main_box}>
                        <div className={style.star_section}>
                            <i className="fa-solid fa-star" style={{ color: '#FEA500' }}></i>
                            <i className="fa-solid fa-star" style={{ color: '#FEA500' }}></i>
                            <i className="fa-solid fa-star" style={{ color: '#FEA500' }}></i>
                            <i className="fa-solid fa-star" style={{ color: '#FEA500' }}></i>
                            <i className="fa-solid fa-star" style={{ color: '#FEA500' }}></i>


                        </div>
                        <div className={style.para}>
                            "Rare Commerce is a game-changer! The AI/AR integration enhances the shopping experience by allowing customers to try on products virtually. The personalized recommendations and seamless integration with my e-commerce platform have boosted sales and reduced returns. The support team has been exceptional throughout the implementation process. Highly recommended!"
                        </div>

                        <div className={style.flex_container}>
                            <div className={style.pic_section}>
                                <img src={avatar1} alt="avatar1" />
                            </div>
                            <div className={style.name_work_container} >
                                <div className={style.names}>Emily Johnson</div>
                                <div className={style.profession}>SapphireWave Enterprises </div>
                            </div>
                        </div>
                    </div>

                    <div className={style.main_box_white}>
                        <div className={style.star_section}>
                            <i className="fa-solid fa-star" style={{ color: '#FEA500' }}></i>
                            <i className="fa-solid fa-star" style={{ color: '#FEA500' }}></i>
                            <i className="fa-solid fa-star" style={{ color: '#FEA500' }}></i>
                            <i className="fa-solid fa-star" style={{ color: '#FEA500' }}></i>
                            <i className="fa-solid fa-star" style={{ color: '#FEA500' }}></i>


                        </div>
                        <div className={style.para}>
                            "Rare Commerce unleashes the power of AI/AR in retail! Real-time data insights and AR visualization have helped me make informed decisions. While the user interface could be more intuitive, the platform's features are impressive. The customer support team is responsive and provides valuable guidance. It's a must-have for businesses looking to gain a competitive edge."
                        </div>

                        <div className={style.flex_container}>
                            <div className={style.pic_section}>
                                <img src={avatar2} alt="avatar2" />
                            </div>
                            <div className={style.name_work_container} >
                                <div className={style.names}>Michael Davis</div>
                                <div className={style.profession}>QuantumTech Innovations</div>
                            </div>
                        </div>
                    </div>

                    <div className={style.main_box}>
                        <div className={style.star_section}>
                            <i className="fa-solid fa-star" style={{ color: '#FEA500' }}></i>
                            <i className="fa-solid fa-star" style={{ color: '#FEA500' }}></i>
                            <i className="fa-solid fa-star" style={{ color: '#FEA500' }}></i>
                            <i className="fa-solid fa-star" style={{ color: '#FEA500' }}></i>
                            <i className="fa-solid fa-star" style={{ color: '#FEA500' }}></i>


                        </div>
                        <div className={style.para}>
                            "Rare Commerce elevates the shopping experience! The AI-powered recommendation engine and AR functionality have increased sales and fostered loyalty. Setting up was easy, thanks to the intuitive interface and excellent support. Highly recommended for retailers aiming to provide a cutting-edge shopping experience.

"
                        </div>

                        <div className={style.flex_container}>
                            <div className={style.pic_section}>
                                <img src={avatar3} alt="avatar3" />
                            </div>
                            <div className={style.name_work_container} >

                                <div className={style.names}> Olivia Thompson</div>
                                <div className={style.profession}>
                                StellarEdge Solutions
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div className={style.slider_right_button}>
                        <i className="fa-solid fa-arrow-right"></i>
                    </div> */}

                </div>
            </div>
        </>
    )
}

export default CustomerSlider