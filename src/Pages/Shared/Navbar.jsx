import { Link } from "react-router-dom";

import moduleName from '../../assets/images/menu.png';
const Navbar = () => {


  const NavLinks = (
    <>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/login">Login</Link></li>
      <li><Link to="/regi">Register</Link></li>
      <li><Link to="/All">All task</Link></li>
    </>
  );
 




  return (
    <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">TaskManager</a>
  </div>
  <div className="flex-none gap-2">
   
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src={moduleName}/>
        </div>
      </div>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow  text-white 
      bg-[#3D2B1F] menu menu-sm dropdown-content  rounded-box w-52">
        {NavLinks}
      </ul>
    </div>
  </div>
</div>

   
  );
};

export default Navbar;