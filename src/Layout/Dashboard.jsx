import { NavLink, Outlet } from "react-router-dom";
import bgImage from '../assets/images/bg.jpg'; // Assuming bg.jpg is the correct image path
import { FaAd, FaHome, FaHouseUser } from "react-icons/fa";
import { IoIosAdd, IoMdCloudDone } from "react-icons/io";
import { MdOutlinePendingActions} from "react-icons/md";
import { RiPresentationLine } from "react-icons/ri";

const Dashboard = () => {
  const containerStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundRepeat: 'repeat', // Add this line to enable repeating
  };

  return (
    <div className="mx-auto flex flex-row" style={containerStyle}>
      <div className="min-h-screen md:w-1/4 lg:w-1/6 shadow-lg rounded-lg text-white bg-[#635147]">
        <ul className="menu p-4">
          <li>
        <NavLink to="/dashboard/userHome">
          <FaHouseUser  className="text-xl"></FaHouseUser> User Home
        </NavLink>
        </li>
          <li>
        <NavLink to="/dashboard/add">
          <IoIosAdd className="text-2xl font-bold"></IoIosAdd> Add task
        </NavLink>
        </li>
          <li>
        <NavLink to="/dashboard/now">
          <RiPresentationLine className="text-xl"></RiPresentationLine> on going
        </NavLink>
        </li>
          <li>
        <NavLink to="/dashboard/todo">
          <MdOutlinePendingActions className="text-xl"></MdOutlinePendingActions> To do
        </NavLink>
        </li>
          <li>
        <NavLink to="/dashboard/complete">
          <IoMdCloudDone className="text-xl"></IoMdCloudDone> completed
        </NavLink>
        </li>
        <div className="divider"></div> 
        <li>
          <NavLink to='/'>
           <FaHome  className="text-xl"></FaHome> Home
          </NavLink>
        </li>


        </ul>
      
        
      </div>
      <div className="flex-1 p-8">
        <Outlet></Outlet>
        {/* Add your content here */}
      </div>
    </div>
  );
};

export default Dashboard;
