import { GET_TEAM_MATE } from "@config/queryKeys";
import { getTeamMate } from "@services/getTeamMate.service";
import { useQuery } from "react-query";

/**
 * @desc This hooks get the team-mate info.
 * @returns {Array}
 */

export const useGetTeamMate = (slug) => {
  const { isLoading, isError, isFetched, data, error } = useQuery({
    queryKey: [GET_TEAM_MATE, slug],
    queryFn: getTeamMate,
  });

  return {
    isLoading,
    isError,
    isFetched,
    data,
    error,
  };
};
