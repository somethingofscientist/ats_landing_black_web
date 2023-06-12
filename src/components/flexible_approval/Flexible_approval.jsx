import React from 'react'
import phone1 from '../../Images/phone4.png'
import phone2 from '../../Images/phone3.png'
import style from './Flexible_approval.module.css';
// import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import desktop1 from '../../Images/ss3.png';
import desktop1 from '../../new_images/5.jpg';

const Flexible_approval = () => {
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
                        <img src={desktop1} alt="" />
                    </div>
                </div>


                {/* right container */}
                <div className={style.right_container}>
                    <div className={style.heading}>
                        Seamless Checkout and Payment
                    </div>
                    <div className={style.subheading}>
                        {/* <p>
                            Approval flow for JD's to match any company's need.
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
                                Enable a seamless and secure checkout process.
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
                                Offer multiple payment options for customer convenience.
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
                                Implement secure payment gateways and encryption.
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
                                Simplify the purchase journey to minimize cart abandonment.
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

export default Flexible_approval