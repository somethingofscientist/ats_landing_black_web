import React from 'react';
import style from './Candidates.module.css';
import ipad from '../../Images/ipad.png';
import screen from '../../Images/screen_new.png';
import { Link } from 'react-router-dom';
// import score from '../../Images/score1.png'
import score from '../../new_images/22.jpg'


const CandidatesScore = () => {
    return (
        <>
            <div id="about" className={style.main_container}>

                {/* left container */}

                <div className={style.left_container}>
                    <div className={style.heading}>
                        Personalized AI Recommendations
                    </div>
                    <div className={style.subheading}>
                        {/* <p>
                            Upload the CV against a JD. Push a button, let the most advanced AI do its magic and give you a number on a score for 1 to 10 for the candidate against the JD in question
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
                                Leverage AI technology to offer personalized product recommendations.
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
                        <img src={score} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CandidatesScore