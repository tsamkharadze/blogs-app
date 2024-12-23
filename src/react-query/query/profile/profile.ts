import { getProfileInfo } from "@/supabase/account";
import { useQuery } from "@tanstack/react-query";

export const useGetProfile = (userId: string | undefined) => {
  return useQuery({
    queryKey: ["profileInfo", userId],
    queryFn: () => getProfileInfo(userId!),
    enabled: !!userId,
    select: (data) => data?.data?.[0],
  });
};
