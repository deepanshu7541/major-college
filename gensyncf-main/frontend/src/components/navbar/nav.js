import React from "react";
import style from "./nav.module.css";
// import "./navn.css"
import { Outlet , Link} from "react-router-dom";
import Footer from "../Footer/footer";
import { useAuth } from '../../../src/contexts/AuthContext';
import logo from './logo.png';
function Nav() {
  const { isAuthenticated } = useAuth();
  return (
    <>
    <nav>
      <div className={style.nav_container}>
        <div className={style.nav_title_wrapper}>
          <img
            className={style.logo}
            src={logo}
            alt="logo"
          />
        </div>
        <div className={style.nav_details}>
          <Link to="/">Home</Link>
          <Link to="http://localhost:3000/dashboard/1">Doubt Section</Link>
          {/* <Link to="/doubtSection"> Doubt Section</Link> */}
          <Link to="/notices">Notices</Link>
          <Link to="/alumni">Alumni</Link>
          {isAuthenticated ? null : <Link to={'/login'}>Login</Link>  }
          {/* <Link to="/login">Login</Link> */}
          {console.log("profile visible")}
          {isAuthenticated ?  <Link to={'/profile'}>Profile</Link> : null}
        </div>
      </div>
    </nav>
    {/* <nav>
      <div className={style.nav_container}>
        <div className={style.nav_title_wrapper}>
          <img
            className={style.logo}
            src="https://cdn-icons-png.flaticon.com/128/3665/3665939.png"
            alt="logo"
          />
          <h4>Gensync</h4>
        </div>
        <div className={style.nav_details}>
          <button><Link to="/">Home</Link></button>
          <button><Link to="/notices">Notices</Link></button>
          <button><Link to="/events">Events</Link></button>
          <button><Link to="/alumni">Alumni</Link></button>
          <button><Link to="/login">Login</Link></button>
     
        </div>
      </div>
    </nav> */}
    <Outlet />
    <Footer />
    </>
  );
}


export default Nav;