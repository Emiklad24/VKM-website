import { publicInstanceAxios } from "@config/axiosInstance";

/**
 * @desc gets team info.
 * @returns { Array }
 */
export const getTeam = async () => {
  const res = await publicInstanceAxios.get(`/team-members`);

  return res?.data;
};
