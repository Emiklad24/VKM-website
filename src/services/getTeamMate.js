import { publicInstanceAxios } from "@config/axiosInstance";

/**
 * @desc gets team info.
 * @returns { Array }
 */
export const getTeamMate = async () => {
  const res = await publicInstanceAxios.get(`/team-members?slug=${slug}`);

  return res?.data;
};
