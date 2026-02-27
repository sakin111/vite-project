import axiosInstance from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

const useLogin = () => {
  return useMutation({
    mutationFn: async (data: { email: string; password: string }) => {
      const res = await axiosInstance.post("/api/login", data);
      return res.data;
    },
  });
};

export default useLogin;     