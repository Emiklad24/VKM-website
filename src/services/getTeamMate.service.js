import { publicInstanceAxios } from "@config/axiosInstance";

/**
 * @desc gets team-member info.
 * @returns { Array }
 */
export const getTeamMate = async (context) => {
  const slug = context.queryKey?.[1] || "";
  const res = await publicInstanceAxios.get(`/team-members?slug=${slug}`);

  return res?.data;
};
