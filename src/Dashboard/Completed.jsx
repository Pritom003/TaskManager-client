import { useQuery } from "@tanstack/react-query";
import useAuth from "../Hooks/UseAuth";
import useAxios from "../Hooks/UseAxios";


const Completed = () => {

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
  console.log(Alltask);




  return (
    <div>
      <div>



        {
           Alltask?.filter((data) => data.creatorEmail=== user.email)
           .map((data, index) =><div key={index} className="card w-96 bg-base-100 shadow-xl">
           <figure className="px-10 pt-10">
             <img src={data.imageUrl} alt="Shoes" className="rounded-xl" />
           </figure>
           <div className="card-body items-center text-center">
             <h2 className="card-title">{data.title}</h2>
             <p>{data.description}</p>
             <div className="badge badge-accent">{data.taskType}</div>
           </div>
         </div>)
        }
      </div>
    </div>
  );
};

export default Completed;