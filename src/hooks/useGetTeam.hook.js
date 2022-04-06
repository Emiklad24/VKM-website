import {GET_ALL_TEAM} from "@config/queryKeys"
import {getTeam} from "@services/getTeam.service"
import { useQuery } from "react-query";

/**
 * @desc This hooks get the team info.
 * @returns {Object}
 */

export const useGetTeam = () => {
    const { isLoading, isError, isFetched, data, error } = useQuery({
        queryKey: GET_ALL_TEAM,
        queryFn: getTeam,
      });

      return {
        isLoading,
        isError,
        isFetched,
        data,
        error,
      };
}