// import useAuth from "../../../Hooks/UseAuth";
import useAuth from '../Hooks/UseAuth';
import bg from '../assets/images/bg.jpg';

const UserHome = () => {
  const { user } = useAuth();

  const cardStyle = {
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="">
      <div className="flex items-center justify-center  lg:h-screen">
      <div className="relative p-10 flex w-full max-w-[44rem] bg-slate-300 flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none" 
      style={cardStyle}>
        <div className="relative flex items-center gap-4 pt-0 pb-8 mx-0 mt-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
          <img
            src={user.photoURL}
            alt="tania andrew"
            className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
          />
          <div className="flex w-full flex-col gap-0.5">
            <div className="flex items-center justify-between">
              <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-yellow-950">
                {user.displayName}
              </h5>
            </div>
            <p className="block font-sans text-base 
            antialiased  bg-slate-500 w-fit rounded-lg leading-relaxed text-white font-extrabold">
              {user.email}
            </p>
          </div>
        </div>
        <div className="p-0 mb-6">
          <p className="block font-sans text-blue-400 antialiased font-bold
           leading-relaxed text-inherit">
            Welcome to UrbanNest Hub, your go-to destination for finding the perfect property. 
            Our platform is designed to make the real estate journey seamless and enjoyable.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default UserHome;