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
                            "Since we started using RARE TALENT, our recruitment process has become more streamlined and efficient. The AI technology has helped us identify top talent quickly, and we've been able to make better hiring decisions. The tool's user-friendly interface and customizable features make it easy to use and tailor to our needs. I highly recommend RARE TALENT to any company looking to take their recruitment process to the next level."
                        </div>

                        <div className={style.flex_container}>
                            <div className={style.pic_section}>
                                <img src={avatar1} alt="avatar1" />
                            </div>
                            <div className={style.name_work_container} >
                                <div className={style.names}>Sunaina Gupta</div>
                                <div className={style.profession}>HR Operations Manager</div>
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
                            "RARE TALENT has made a significant impact on our recruitment process. The tool's AI capabilities have helped us find the right candidates for our business and save time on screening and interviewing. The platform's real-time reporting features have also helped us track and analyze our recruitment data more effectively. Overall, RARE TALENT has helped us make our recruitment process more efficient and effective."
                        </div>

                        <div className={style.flex_container}>
                            <div className={style.pic_section}>
                                <img src={avatar2} alt="avatar2" />
                            </div>
                            <div className={style.name_work_container} >
                                <div className={style.names}>Rahul Mehra</div>
                                <div className={style.profession}>Recruitment Operations Analyst</div>
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
                            "We've been using RARE TALENT for several months now, and it has exceeded our expectations. The tool's AI technology has helped us identify candidates with the right skills and experience, and its integration with other HR tools has made our recruitment process more efficient. The team behind RARE TALENT has been responsive and supportive, and their dedication to improving their product is impressive. We highly recommend RARE TALENT to any company looking to streamline their recruitment process and find the best talent for their team."
                        </div>

                        <div className={style.flex_container}>
                            <div className={style.pic_section}>
                                <img src={avatar3} alt="avatar3" />
                            </div>
                            <div className={style.name_work_container} >

                                <div className={style.names}>Satyam Jha</div>
                                <div className={style.profession}>
                                    Talent Acquisition
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