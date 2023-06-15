import React from 'react'
import phone1 from '../../Images/phone4.png'
import phone2 from '../../Images/phone3.png'
// import desktop1 from '../../Images/ss1.png'
import desktop1 from '../../new_images/11.jpg'
import style from './Job_description_section.module.css';
import { Link } from 'react-router-dom';

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
                        <img src={desktop1} alt="" />
                    </div>
                </div>


                {/* right container */}
                <div className={style.right_container}>
                    <div className={style.heading}>
                        Seamless Augmented Reality Experience
                    </div>
                    <div className={style.subheading}>

                    </div>
                    <div className={style.para}>
                        <p className={style.icon_container}>
                            <span>
                                <i className="fa-sharp fa-regular fa-circle-check"
                                    style={{
                                        color: "#00cc29",
                                        textAlign: "left",
                                        paddingRight: "10px"
                                    }}></i>
                            </span>

                            <span>
                                Immerse customers in a seamless AR experience.
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

export default Job_description_section