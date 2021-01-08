import React from 'react'
import {NavLink,Link} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import {logout} from '../../actions/actions'
import  './style.css'

const Header = (props) => {
    const auth = useSelector(state => state.auth);
 const dispatch=useDispatch();
    return (
        <header className="header">
            <div style={{display:'flex'}}>
                <div className="logo">
                <Link to="/" style={{ textDecoration: 'none',color:"white",fontStyle:"italic" }}>
         InfoConnect
                          </Link>
                  </div>
                {
                    !auth.authenticated?
                    <ul className="leftMenu">
                    <li><NavLink to={'/login'}>Login</NavLink></li>
                    <li><NavLink to={'/signup'}>Sign up</NavLink></li>
                </ul>:null
                }
              
            </div>
            <div style={{marginLeft:"30rem",color:'#fff',fontWeight:'bold',fontSize:"25px"}}>
                {auth.authenticated?`Welcome ${auth.firstName} ${auth.lastName}`:''}
            </div>
         <ul className="menu">
         <li>
             <Link to={"/"} >Home</Link>&emsp;&emsp;&emsp;
             </li>
             <li>
             <Link to={"/contact"} >Contact</Link>&emsp;&emsp;&emsp;
             </li>
         <li>
             <Link to={"/Admin"} >Admin Login</Link>&emsp;&emsp;&emsp;
             </li>
         <li>
             <Link to={"/profile"} >Profile</Link>&emsp;&emsp;&emsp;
             </li>
             {
                 auth.authenticated?
             <li>
             <Link to={"#"} onClick={()=>{ dispatch(logout())
             }}>Logout</Link>
             </li>:null}
         </ul>
        </header>
        
    )
}

export default Header;
