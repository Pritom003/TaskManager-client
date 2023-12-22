
import useAxios from '../../Hooks/UseAxios';
import { useQuery } from '@tanstack/react-query';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';

const Alltasks = () => {
  const axiospublic = useAxios();
  const { data: Alltask = [], isLoading} = useQuery({
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
  console.log(Alltask);
  return (
   <div>
    <Navbar></Navbar>
     <div className='grid gap-2'>
      {
         Alltask.map(data=><div key={data._id} className="card card-side bg-base-100 shadow-xl">
        <figure><img src={data.imageUrl} alt="Movie"/></figure>
        <div className="card-body">
          <h2 className="card-title">{data.title}</h2>
          <p>{data.description}</p>
          <p>Creation Data {data.startDate}</p>
          
          <div className="card-actions justify-end">
          <p> Deadline {data.endDate}</p>
          </div>
        </div>
      </div>)
      }
    </div>
    <Footer></Footer>
   </div>
  );
};

export default Alltasks;