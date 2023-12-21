
// import { Button, colors } from '@mui/material';
import bannerimg from './../../assets/images/banner.jpg';
// import {} from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
const Banner = () => {
  return (
    <div>
      <div className="hero min-h-[80vh] bg-[#EFDECD]">
  <div 
  
  
  className="hero-content flex-col lg:flex-row">
   <div     data-aos="flip down"
  data-aos-easing="ease-out-cubic"
  data-aos-duration="2000">
   <img src={bannerimg} className="max-w-sm rounded-lg shadow-2xl" />
   </div>
    <div>
      <h1 className="text-5xl font-bold">TaskManager</h1>
      <p className="py-6"> TaskManager: Your all-in-one task solution. Effortlessly add, organize, and conquer your daily agenda. Boost productivity with a 
      seamless platform designed for simplicity and success</p>
      <button className="btn btn-wide bg-[#9F8170]
      font-bold
      text-white">get stated <FaAngular></FaAngular> </button>
    </div>
  </div>
</div>
      
    </div>
  );
};

export default Banner;