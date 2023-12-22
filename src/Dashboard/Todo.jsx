import { useQuery } from "@tanstack/react-query";
import useAuth from "../Hooks/UseAuth";
import useAxios from "../Hooks/UseAxios";

const Todo = () => {
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
   <div className="">
    <div >


  <div  className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
  
        <th>Task</th>
        <th>deadlinde</th>
        <th>type</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
  Alltask?.filter((data) => data.status === 'pending')
  .map((data, index) =>
      <tr key={index} className="bg-base-200">
   
        <td>{data.title}</td>
        <td>{data.endDate}</td>
        <td>{data.taskType}</td>
      </tr>
  
      )
    }
    </tbody>
  </table>
</div>
 








    </div>
    
   </div>
  );
};

export default Todo;
