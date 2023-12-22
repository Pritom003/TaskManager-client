import React from 'react';
import useAxios from '../Hooks/UseAxios';
import { useQuery } from '@tanstack/react-query';
import Ticker, { NewsTicker } from 'nice-react-ticker';
import icon from '../assets/images/f4ccc2c1bc14938100493dc04513a3e4.jpg';

const User = () => {
  const axiospublic = useAxios();
  const { data: Alltask = [], isLoading } = useQuery({
    queryKey: ['verrrifieddata'],
    queryFn: async () => {
      try {
        const res = await axiospublic.get(`/alltask`);
        return res.data;
      } catch (error) {
        console.error('Error fetching properties:', error);
        throw error;
      }
    },
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const visibleUsers = Alltask.slice(0, 3); 
  const remainingUsers = Alltask.slice(3); 

  return (
    <div>
      <div className="grid align-middle w-44 md:w-[800px] items-center justify-center gap-4 m-10">
        <h1 className="text-center font-extrabold text-2xl text-yellow-900  ">
          Users who use TaskManager
        </h1>
        <div className="flex">
          <div className="avatar-group -space-x-6 rtl:space-x-reverse">
            {visibleUsers.map((data) => (
              <div key={data._id} className="avatar">
                <div className="w-12">
                  <img src={data.creatorImage} alt={data.title} />
                </div>
              </div>
            ))}
            {remainingUsers.length > 0 && (
              <div className="avatar placeholder">
                <div className="w-12 bg-neutral text-neutral-content">
                  <span>+{remainingUsers.length}</span>
                </div>
              </div>
            )}
          </div>
          <div>
            <div className="newsticker w-44 md:w-64 lg:w-96">
              <Ticker isNewsTicker={true}>
                <NewsTicker
                  id="1"
                  icon={icon}
                  title="developers, students, engineer, banker, teacher, learner"
                  url=" "
                  meta=""
                />
              </Ticker>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
