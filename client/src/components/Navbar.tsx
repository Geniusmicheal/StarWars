import * as React from 'react';
import logo from './../../asset/img/logo.png';   
import { Link, useNavigate } from 'react-router-dom';
const Navbar = () => {
   const navigate = useNavigate();
   const searchNameHandle = (e:any) => {
      if((e.which || e.keyCode)==13 && e.target.value)
      navigate(`/person/${e.target.value}`, { replace: true })
   }


    return (
        <nav className="navbar navbar-expand-sm sticky-top bg-white">
           <Link className="navbar-brand" to={`/`}>
              <img src={logo} className="img" alt="" />
           </Link>
           <input type="text" placeholder="Search by name" className="form-control form-control-sm" onKeyUp={searchNameHandle}/>
        </nav>
     );
}
export default Navbar