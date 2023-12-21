import { FaKey } from "react-icons/fa";
import { Link } from "react-router-dom";

import { useForm } from "react-hook-form"
import useAuth from "../../Hooks/UseAuth";
import { useState } from "react";

const Login = () => {
  const { loginuser} = useAuth()
  const [passerr, setpasserr] = useState(''); 
  const {
    register,
    handleSubmit,
    
    formState: { errors },
  } = useForm()

    const onSubmit = async (data) => {
    try {
      // Call the create user function with form data
      const response = await loginuser(data.email, data.password);
      console.log(response);
      setpasserr('')
    } catch (error) {
      console.error(error);
      setpasserr(error.message || 'An error occurred during login.')
    }
  };
console.log(errors,'shfhiauwhrifhswfhshfshfwehai');
  return (
    <div className="hero min-h-screen bg-yellow-50"  >
      <div className="hero-content text-center">
        <div className="min-w-[400px]">
          <div>
            <h1 className="text-3xl font-bold text-[#3D2B1F]"> Login</h1>
            <form className="card-body"  onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-[#3D2B1F]">Email</span>
                </label>
                <input type="email" 
                
                {...register("email", { required: true })}
                placeholder="email" className="input input-bordered border-[#3D2B1F]" required />
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
                {/* {
                  errors? <p> {errors}</p>:''
                } */}
              <label className="label">
                  <span className="label-text font-bold text-[#3D2B1F]">
                    New here? 
                   
                   <span className=" border-b text-blue-300 px-4"> <Link to="/regi">create new account</Link></span>
                   </span>
                </label>
                {passerr && <p className="text-red-500">{passerr}</p>}
              </div>
              <div className="form-control mt-6 pl-10">
                <button className="btn btn-wide bg-[#9F8170] font-bold text-white">Login <FaKey /></button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
