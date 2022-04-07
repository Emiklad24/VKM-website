import { GET_TEAM_MATE } from "@config/queryKeys";
import { getTeamMate } from "@services/getTeamMate.service";
import { useQuery } from "react-query";
import { useRouter } from "next/router";

/**
 * @desc This hooks get the team-mate info.
 * @returns {Array}
 */

export const useGetTeamMate = () => {
  const router = useRouter();
  const { teamMember } = router.query;
  const { isLoading, isError, isFetched, data, error } = useQuery({
    queryKey: [GET_TEAM_MATE, teamMember],
    queryFn: getTeamMate,
  });

  return {
    isLoading,
    isError,
    isFetched,
    data: data|| [{}],
    error,
  };
};
