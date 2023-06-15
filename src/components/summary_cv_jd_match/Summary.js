import React from 'react'
import phone1 from '../../Images/phone1.png'
import phone2 from '../../Images/phone2.png'
import desktop1 from '../../Images/ss2.png';
import style from './Summary.module.css';
import { Link } from 'react-router-dom';
// import Review from '../../Images/review.png'
import Review from '../../new_images/33.jpg'

const Summary = () => {
    return (
        <>
            <div className={style.main_container}>


                {/* left container */}
                <div className={style.left_container}>
                    {/* <div className={style.phone_down}>
                        <img src={phone1} alt="" />
                    </div>
                    <div className={style.phone_up}>
                        <img src={phone2} alt="" />
                    </div> */}


                    {/* new desktop images */}
                    <div className={style.ipad}>
                        <img src={Review} alt="" />
                    </div>
                </div>


                {/* right container */}
                <div className={style.right_container}>
                    <div className={style.heading}>
                        Interactive Virtual Showroom
                    </div>
                    <div className={style.subheading}>
                        {/* <p>
                            It does not stop at the score. It goes even further. Now even get an AI powered descriptive summary of the match.
                        </p> */}
                    </div>
                    <div className={style.para}>
                        <p className={style.icon_container}>
                            <span>
                                <i className="fa-sharp fa-regular fa-circle-check"
                                    style={{
                                        color: "#00cc29",
                                        textAlign: "left",
                                        paddingRight: "10px "
                                    }}></i>
                            </span>

                            <span>
                                Create an interactive virtual showroom for product display.
                            </span>
                        </p>
                    </div>
                    <div className={style.para}>
                        <p className={style.icon_container}>
                            <span>
                                <i className="fa-sharp fa-regular fa-circle-check"
                                    style={{
                                        color: "#00cc29",
                                        textAlign: "left",
                                        paddingRight: "10px "
                                    }}></i>
                            </span>

                            <span>
                            Enable 360-degree product views and zoom functionality.
                            </span>
                        </p>
                    </div>
                    <div className={style.para}>
                        <p className={style.icon_container}>
                            <span>
                                <i className="fa-sharp fa-regular fa-circle-check"
                                    style={{
                                        color: "#00cc29",
                                        textAlign: "left",
                                        paddingRight: "10px "
                                    }}></i>
                            </span>

                            <span>
                            Showcase product details with high-resolution imagery.
                            </span>
                        </p>
                    </div>
                    <div className={style.para}>
                        <p className={style.icon_container}>
                            <span>
                                <i className="fa-sharp fa-regular fa-circle-check"
                                    style={{
                                        color: "#00cc29",
                                        textAlign: "left",
                                        paddingRight: "10px "
                                    }}></i>
                            </span>

                            <span>
                            Engage customers through interactive elements and videos.
                            </span>
                        </p>
                    </div>
                    <Link to='/demo'>
                        <div className={style.demo}
                            style={{
                                color: "#6F1749"
                            }}
                        >Book a demo
                            <i className="fa-solid fa-arrow-right"
                                style={{ padding: "20px" }}
                            ></i>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Summary