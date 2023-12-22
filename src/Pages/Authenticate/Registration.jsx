import { useEffect, useState } from "react";
import { GithubAuthProvider, getAuth, signInWithPopup} from "firebase/auth";

import { FaGithub, FaIgloo, FaKey } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"
import useAuth from "../../Hooks/UseAuth";
import { updateProfile } from "firebase/auth";
import googleImage from "../../assets/images/goodle button.jpg"; 
import Swal from "sweetalert2";
const Registration = () => {
  const { createUser, creategooglesignup,}=useAuth()

  const [passerr, setpasserr] = useState('');

  const {
    register,
    handleSubmit,
    
    formState: { errors },
  } = useForm()


  const onSubmit = async (data) => {
    try {
      // Call the create user function with form data
      const response = await createUser(data.email, data.password);
      console.log(response);
      setpasserr('')
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your registration was successful!',
        showConfirmButton: false,
        timer: 1500,
      });
      // Update user profile with name and image
      updateProfile(response.user, {
        displayName: data.name,
        photoURL: data.photo,
      });
    } catch (error) {
      console.error(error);
      setpasserr(error.message || 'An error occurred during login.')
    }

 


  };




  const handleGoogleLogin = async () => {
    try {
      const googleResponse = await creategooglesignup();
      console.log("user", googleResponse.user);
      setpasserr('')
    

    }
    
    
    
    catch (error) {
      console.error(error);
      setpasserr(error.message || 'An error occurred during login.')
    }
  };
  const auth = getAuth();
  const handleGithub = () => {
    const githubProvider = new GithubAuthProvider();
    signInWithPopup(auth, githubProvider)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser.email);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
        <div className="hero min-h-screen bg-yellow-50"  >
      <div className="hero-content text-center">
        <div className="min-w-[400px]">
          <div>
            <h1 className="text-3xl font-bold text-[#3D2B1F]"> Register Now</h1>
            <form className="card-body"  onSubmit={handleSubmit(onSubmit)}       >
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-[#3D2B1F]">Name</span>
                </label>
                <input type="text" placeholder="your name" 
                {...register("name", { required: true })}
                
                className="input input-bordered border-[#3D2B1F]" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-[#3D2B1F]">Image</span>
                </label>
                <input type="photo"
                
                {...register("photo", { required: true })}
                placeholder="url" className="input input-bordered border-[#3D2B1F]" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-[#3D2B1F]">Email</span>
                </label>
                <input type="email" placeholder="email" 
                
                {...register("email", { required: true })}
                
                className="input input-bordered border-[#3D2B1F]" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text  font-bold text-[#3D2B1F]">Password</span>
                </label>
                <input type="password" 
                {...register("password", { required: true })}
                placeholder="password" className="input input-bordered border-[#3D2B1F]" required />
              </div>
              <div>
              <label className="label">
                  <span className="label-text font-bold text-[#3D2B1F]">Already have an account? 
                   
                   <span className="underline text-blue-300"> <Link to="/login">Login</Link></span>
                   </span>
                </label>
                {passerr && <p className="text-red-500">{passerr}</p>}
              </div>
              <div className="form-control mt-6 pl-10">
                <button   type="submit"  className="btn btn-wide bg-[#9F8170] font-bold
                 text-white">Register <FaKey /></button>
              </div>
            </form>
            <div  className=" grid  grid-cols-2 gap-2">
            <label className="label">
                  <span className="label-text font-bold text-[#3D2B1F]">sign in with google
                 
                   </span>
                </label>
                 <div className="btn  " onClick={handleGoogleLogin}>  <img className="h-10 pl-6" src={googleImage} alt="" /></div>


<button onClick={handleGithub} className="btn btn-ghost p-4 bg-black text-white font-bold"> 
github <FaGithub></FaGithub></button>

</div> 
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Registration;