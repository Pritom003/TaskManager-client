import { useQuery } from "@tanstack/react-query";
import useAuth from "../Hooks/UseAuth";
import useAxios from "../Hooks/UseAxios";
import Swal from "sweetalert2";


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


  const handleDeleteUser = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiospublic.delete(`/alltask/${_id}`)
          .then(res => {
            if (res.data.deletedCount > 0) {
              refetch();  
              Swal.fire({
                title: "Deleted!",
                text: "Your task has been deleted.",
                icon: "success",
              });
            }
          })
          .catch(error => {
            console.error('Error deleting user:', error);
            Swal.fire({
              title: "Error",
              text: "Failed to delete task",
              icon: "error",
            });
          });
      }
    });
  };
  
  return (
    <div>
      <div className="grid gap-4">



        {
           Alltask?.filter((data) => data.creatorEmail=== user.email)
           .map((data, index) =><div key={index} className="card w-96 bg-base-100 shadow-xl">
           <figure className="px-10 pt-10">
             <img src={data.imageUrl} alt="Shoes" className="rounded-xl" />
           </figure>
           <div className="card-body items-center text-center">
             <h2 className="card-title">{data.title}</h2>
             <p>{data.description}</p>
          <div className="flex gap-2">
          <div className="badge badge-accent">
              {data.taskType}
              
              </div>
              <div onClick={()=>handleDeleteUser(data._id)} className="btn btn-outline"> delete</div>
          </div>
           </div>
         </div>)
        }
      </div>
    </div>
  );
};

export default Completed;