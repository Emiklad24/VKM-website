import { useGetTeamMate } from "./useGetTeamMate.hook";

/**
 * @desc This hooks transforms Team mate data passed into it to 
 * return a single item being doc's information and an array containing the remaining team mates detail.
 * @returns {Object, Array}
 */

export const useTransFormTeamMateData = (teamMateData) => {
   const docsId = "624c5ba33ca0120016061b64"
   const [doc] = teamMateData?.filter?.(team => team?.id === docsId);
   const otherTeamMates = teamMateData?.filter?.(team => team?.id !== docsId);
   


  return {
     docsDetails: doc || {},
     otherTeamMates: otherTeamMates || [{}]
  }

}