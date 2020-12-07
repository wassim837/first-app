import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import axios from 'axios';
import img from '../../images.png';
function Header() {
    const auth = useSelector(state => state.auth)
    const {user, isLogged} = auth
    const handleLogout = async () => {
        try {
            await axios.get('/user/db/logout')
            localStorage.removeItem('firstLogin')
            window.location.href = "/";
        } catch (err) {
            window.location.href = "/";
        }
    }
    const userLink = () => {
        return <li className="drop-nav">
            <Link to="#" className="avatar">
            <img src={user.avatar} alt=""/> {user.name} <i className="fas fa-angle-down"></i>
            </Link>
            <ul className="dropdown">
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/" onClick={handleLogout}>Logout</Link></li>
            </ul>
        </li>
    }
    const transForm = {
        transform: isLogged ? "translateY(-5px)" : 0
    }
    return (
        <header>
            <div className="logo" >
            <Link to="/">  <img src={img} alt='images' height="95" width='140'/></Link>
            </div>
 
            <ul style={transForm}>
            <li><a className="hvr-shrink" href="tel:+18888854289" title="Call Juris Digital">Contact <i className="fa fa-phone" aria-hidden="true"> </i> (+216) 72856945</a></li>
            <li><button className="btn btn-primary"><Link to="/"><i className="fas"></i>Home</Link></button></li>
            <li><button className="btn btn-primary"><Link to="/"><i className="fas"></i>About</Link></button></li>

                <li><button className="btn btn-primary"><Link to="/register"><i className="fas"></i>Sign up</Link></button></li>
                {
                    isLogged
                    ? userLink()
                    :<li><button className="btn btn-primary"><Link to="/login"><i className="fas fa-user"></i> Sign in</Link></button></li>
                }
            </ul>
        </header>
    )
}

export default Header