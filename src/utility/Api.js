import { axiosIntesnce } from "@/libs/axios";
import { useQuery } from "@tanstack/react-query";

export const FetchAnime = (resource, user) => {
  return useQuery({
    queryKey: [resource, user],
    queryFn: async () => {
      const { data } = await axiosIntesnce.get(resource);
      return data;
    },
  });
};
