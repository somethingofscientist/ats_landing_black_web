import React from 'react'
import style from './Workflow.module.css';
import ipad from '../../Images/ipad.png'
// import screen from '../../Images/laptop.svg'
import screen from '../../new_images/4.jpg'
import { Link } from 'react-router-dom';

const Workflow = () => {
    return (
        <>
            <div className={style.main_container}>

                {/* left container */}

                <div className={style.left_container}>
                    <div className={style.heading}>
                    Smart Inventory Management
                    </div>
                    <div className={style.subheading}>
                        {/* <p>
                            Brings together companies, recruiters, candidates in the same workflow. Today the company to recruiter flow is inefficient with many manual processes.
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
                            Optimize inventory management with AI-powered algorithms.
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
                            Predict demand patterns and ensure stock availability.
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
                            Prevent overstocking or understocking situations.
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
                            Reduce costs associated with excess inventory or missed sales.
                            </span>
                        </p>
                    </div>

                    <Link to='/demo'>
                        <div className={style.demo}
                            style={{
                                color: "white"
                            }}
                        >Book a demo
                            <i className="fa-solid fa-arrow-right"
                                style={{ padding: "20px" }}
                            ></i>
                        </div>
                    </Link>
                </div>





                {/* right container */}
                <div className={style.right_container}>
                    <div className={style.ipad}>
                        <img src={screen} alt="" />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Workflow