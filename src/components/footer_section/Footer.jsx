import React, { useState } from 'react'
import style from './Footer.module.css';
import logo from '../../Images/footerlogo.svg'
import { Link } from 'react-router-dom';
import Footer_Curve from '../footer_curve/Curve';
import axios from 'axios';
// import { toast } from 'react-toast';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Footer = () => {

    const [subscribe, setSubscribe] = useState("");
    const [buttonClick, setButtonClick] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // alert(`Thank You ${subscribe.toUpperCase()} For Subscribing Rare Billions`)

        try {
            const res = await axios({
                method: "post",
                url: `${process.env.REACT_APP_SERVER_URL}/subscribe`,
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
                data: {
                    email: subscribe,
                },
            });
            if (res.status === 200) {
                toast.dismiss();
                setSubscribe("");
                toast.success(`Thank You ${subscribe} for showing interest in RareTalent `, {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                // setDisable(false);
                // setPage("reset");
            }
        }
        catch (error) {
            toast.dismiss({ delay: 1000 });
            toast.error(`Email Required`, {
                position: "top-center",
                autoClose: 3000,
                theme: "dark",
            });
            console.log(error.message);
        }
    }





    return (
        <>
            <Footer_Curve />
            <div id="footer" className={style.footer}>

                {/* top section  */}
                <div className={style.footer_top_section}>
                    {/* footer-right */}
                    <div className={style.footer_left}>
                        <Link to='/'>
                            <div className={style.logo_section}>
                                <img src={logo} alt="" />
                                <p>
                                    Rare Billions
                                </p>
                            </div>
                        </Link>
                        <div className={style.navigation}>
                            <div className={style.navigation_items}>
                                {/* <Link to='/' > */}
                                <a href="#f">
                                    Features
                                </a>
                                {/* </Link> */}
                            </div>
                            <div className={style.navigation_items}>
                                <Link target="_blank" to='https://www.rarebillions.com'>About Us</Link>
                            </div>
                            <div className={style.navigation_items}>
                                <Link to='/demo' >Contact Us</Link>
                            </div>
                        </div>
                    </div>

                    {/* footer-right */}
                    <div className={style.footer_right}>
                        <div style={{ fontWeight: "600", fontSize: "14px" }}>Subscribe</div>
                        <div className={style.footer_email_section}>
                            <form onSubmit={handleSubmit}>
                                <input
                                    className={style.footer_email}
                                    placeholder='Enter your email'
                                    type="email"
                                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                                    required
                                    value={subscribe}
                                    onChange={(e) => setSubscribe(e.target.value)}
                                />
                                {/* <Link to='/' > */}
                                <button
                                    type='submit'
                                    onClick={setButtonClick}
                                    className={style.footer_subscribe_button}
                                >
                                    Subscribe
                                </button>
                                {/* </Link> */}
                            </form>
                        </div>
                        <div style={{ fontSize: "14px" }}>
                            By subscribing you agree to with our Privacy Policy
                        </div>
                    </div>
                </div>

                {/* bottom section */}
                <div className={style.footer_bottom_section}>
                    <div className={style.privacy_policy_section}>
                        <a href="/">
                            <div className={style.policy}>Privacy Policy</div>
                        </a>
                        <a href="/">
                            <div className={style.policy}>Terms of Service</div>
                        </a>
                        <a href="/">
                            <div className={style.policy}>Cookies Setting</div>
                        </a>
                    </div>
                    <div className={style.rights_reserved_section}>
                        2023 Rare Billions Tech. All right reserved.
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer