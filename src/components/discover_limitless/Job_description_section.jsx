import React from 'react'
import phone1 from '../../Images/phone4.png'
import phone2 from '../../Images/phone3.png'
// import desktop1 from '../../Images/ss1.png'
import desktop1 from '../../new_images/11.jpg'
import style from './Job_description_section.module.css';
import { Link } from 'react-router-dom';
import video from '../../new_images/ring.mp4'

const Job_description_section = () => {
    return (
        <>
            <div id="f" className={style.main_container} >


                {/* left container */}
                <div className={style.left_container} >
                    {/* <div className={style.phone_down}>
                        <img src={phone1} alt="" />
                    </div>
                    <div className={style.phone_up}>
                        <img src={phone2} alt="" />
                    </div> */}

                    {/* ---------------------------------------- */}

                    {/* new desktop images */}

                    <div className={style.ipad}>
                        {/* <img src={desktop1} alt="" /> */}
                        
                        <video src={video} loop muted autoPlay />
                    </div>
                </div>


                {/* right container */}
                <div className={style.right_container}>
                    <div className={style.heading}>
                        Discover Limitless Style
                    </div>
                    <div className={style.subheading}>

                    </div>
                    <div className={style.para}>
                        <p className={style.icon_container}>
                            {/* <span>
                                <i className="fa-sharp fa-regular fa-circle-check"
                                    style={{
                                        color: "#00cc29",
                                        textAlign: "left",
                                        paddingRight: "10px"
                                    }}></i>
                            </span> */}

                            <span style={{
                                lineHeight:"50px"
                            }}>
                                With our cutting-edge technology, you can now try on products virtually, in real-time. Say goodbye to the hassle of going to the store to try something on and hello to a seamless, personalized shopping experience from the comfort of your own home. Experiment with different styles, mix and match your perfect look with just a few clicks.
                                Powerful B2B Solutions: For brands and retailers, we offer powerful B2B solutions to elevate your business to new heights. Connect with buyers, showcase your products in a visually stunning virtual showroom, and streamline your supply chain with our integrated tools. Experience efficiency, accessibility, and expanded reach like never before.
                            </span>
                        </p>
                    </div>
                    {/* <div className={style.para}>
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
                                Allow shoppers to visualize products in their own environment.
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
                                Enable virtual try-on for apparel and accessories.
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
                                Enhance customer confidence in purchasing decisions.
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
                                Bridge the gap between physical and online shopping.
                            </span>
                        </p>
                    </div> */}
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

export default Job_description_section