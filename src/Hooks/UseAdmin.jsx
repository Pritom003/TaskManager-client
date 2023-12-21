import { useQuery } from "@tanstack/react-query";
import useAuth from "./UseAuth";
import useAxiosSecure from "./UseAxiosSecure";

const useAdmin = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: isAdmin, isPending: isAdminLoading } = useQuery({
    queryKey: ['admin'],
    queryFn: async () => {
      if (!user) return false;

      const normalizedEmail = user.email.toLowerCase();
      console.log(normalizedEmail);

      const res = await axiosSecure.get(`/user/admin/${normalizedEmail}`);
      return res.data?.admin;
    }
  });

  return [isAdmin, isAdminLoading];
};

export default useAdmin;
