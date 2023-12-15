import useApiRequest from "./useApiRequest";
import axiosInstance from "../../components/util/axiosInstance";

export const useDeleteRecipient = (recipientId) => {
  const deleteRecipient = () => axiosInstance.delete(`${recipientId}/`);
  return useApiRequest(deleteRecipient);
};
