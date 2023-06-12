import { useState } from 'react';
import style from './header.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import logo from '../../Images/logo.svg';
import { HashLink } from 'react-router-hash-link';


const Navbar = () => {

    const navigate = useNavigate()
    const [mobile, setMobile] = useState(false)


    

    return (
        <>
            <div className={style.navbar}>

                <Link to='/'>
                    <div className={style.logo}>
                        {/* <img src={logo} alt="logo" /> */}
                        <div className={style.company_name}>Rare Talent</div>
                    </div>
                </Link>

                {/* links */}
                <ul className={mobile ? style.mobile_nav_links : style.nav_links} onClick={() => setMobile(false)}>
                    <li className={style.nav_items}>
                        <HashLink to="/#f">Features</HashLink>
                    </li>
                    <li className={style.nav_items}>
                        <Link target="_blank" to='https://www.rarebillions.com'>About Us</Link>
                    </li>
                    <li className={style.nav_items}>
                        <HashLink to="/#f">Contact Us</HashLink>
                    </li>

                    <Link to='/demo' className={style.book_demo_button}>
                        <li >Book A Demo</li>
                    </Link>
                    <Link to={process.env.REACT_APP_LOGIN_URL} className={style.login_button}>
                        <li >Log In</li>
                    </Link>
                </ul>


                {/* buttons */}
                <button className={style.mobile_menu_icon} onClick={() => setMobile(!mobile)}>
                    {mobile ? <ImCross /> : <FaBars />}
                </button>
            </div>
        </>
    )
}

export default Navbar