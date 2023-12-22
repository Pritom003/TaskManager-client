import React from 'react';
import useAxios from '../Hooks/UseAxios';
import useAuth from '../Hooks/UseAuth';
import { useQuery } from '@tanstack/react-query';

import Ticker, {  NewsTicker } from 'nice-react-ticker';
import icon from '../assets/images/f4ccc2c1bc14938100493dc04513a3e4.jpg';
const User = () => {
  const { user } = useAuth();
  const axiospublic = useAxios();
  const { data: Alltask = [], isLoading, refetch } = useQuery({
    queryKey: ["verrrifieddata"],
    queryFn: async () => {
      try {
        const res = await axiospublic.get(`/alltask`);
        return res.data;
      } catch (error) {
        console.error("Error fetching properties:", error);
        throw error;
      }
    },
  });

  if (isLoading) {
    return <p>Loading...</p>; // You can replace this with a loading spinner or any other loading indicator.
  }

  return (
    <div>
      <div className='grid align-middle items-center justify-center gap-4 m-10'>
        <h1 className='text-center font-extrabold text-2xl text-yellow-900  '> Users who use  TaskManager</h1>
      <div>
        <div className='flex'>
        <div  className="avatar-group -space-x-6 rtl:space-x-reverse">
        {Alltask.map((data) => (
          
            <div key={data._id} className="avatar">
              <div className="w-12">
                <img src={data.imageUrl} alt={data.title} />
              </div>
            </div>
         
        ))}
      </div>
      <div>
      <div className="newsticker">
          <Ticker isNewsTicker={true}> 
            <NewsTicker id="1" icon={icon} title="developers, students  , engineer , banker, teacher, learner" url=" " meta=""  />
           
          </Ticker>
        </div>
      </div>
        </div>
       
      </div>

     
    </div>
    </div>
  );
};

export default User;
