import React from 'react';
import style from './Candidates.module.css';
import ipad from '../../Images/ipad.png';
import screen from '../../Images/screen_new.png';
import { Link } from 'react-router-dom';
// import score from '../../Images/score1.png'
import score from '../../new_images/22.jpg'
import video from '../../new_images/ring.mp4'
import phone from '../../new_images/phone.png'
import phone_video from '../../new_images/phone_video.mp4'


const CandidatesScore = () => {
    return (
        <>
            <div id="about" className={style.main_container}>

                {/* left container */}

                <div className={style.left_container}>
                    <div className={style.heading}>
                        Powerful B2B Solutions
                    </div>
                    <div className={style.subheading}>
                        {/* <p>
                            Upload the CV against a JD. Push a button, let the most advanced AI do its magic and give you a number on a score for 1 to 10 for the candidate against the JD in question
                        </p> */}
                    </div>
                    <div className={style.para}>
                        <p className={style.icon_container}>
                        
                            {/* <span>
                                <i className="fa-sharp fa-regular fa-circle-check"
                                    style={{
                                        color: "#00cc29",
                                        textAlign: "left",
                                        paddingRight: "10px "
                                    }}></i>
                            </span> */}

                            <span
                                style={{
                                    lineHeight: "50px"
                                }}>

                                For brands and retailers, we offer powerful B2B solutions to elevate your business to new heights. Connect with buyers, showcase your products in a visually stunning virtual showroom, and streamline your supply chain with our integrated tools. Experience efficiency, accessibility, and expanded reach like never before.
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
                                Analyze customer preferences and browsing history.
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
                                Provide tailored suggestions for a more relevant shopping experience.
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
                                Increase customer satisfaction and engagement.
                            </span>
                        </p>
                    </div> */}

                    {/* <div className={style.para}>
                        <p className={style.icon_container}>
                            <span>
                                <i className="fa-sharp fa-regular fa-circle-check"
                                    s   tyle={{
                                        color: "#00cc29",
                                        textAlign: "left",
                                        paddingRight: "10px "
                                    }}></i>
                            </span>

                            <span>
                                Drive conversions through intelligent cross-selling and upselling.
                            </span>
                        </p>
                    </div> */}

                    <Link to='/demo'>
                        <div className={style.demo}
                            style={{
                                color: "black",
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
                        <video src={phone_video} loop muted autoPlay />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CandidatesScore