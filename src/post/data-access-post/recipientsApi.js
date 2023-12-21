import { useApiRequest } from "./useApiRequest.js";
import { axiosInstance } from "../../components/util/axiosInstance.js";
// import PropTypes from "prop-types";

export const usePostRecipients = (name, backgroundColor) => {
  const postRecipients = () =>
    axiosInstance.post("recipients/", {
      name,
      backgroundColor,
    });
  return useApiRequest(postRecipients);
};

export const useGetRecipientsList = () => {
  const getRecipientsList = () =>
    axiosInstance.get(`recipients/?limit=4&offset=4&sort=like`);
  return useApiRequest(getRecipientsList);
};

export const useGetRecipient = (id) => {
  const getRecipient = () => axiosInstance.get(`recipients/${id}/`);
  return useApiRequest(getRecipient);
};

export const useDeleteRecipients = (id) => {
  const deleteRecipients = () => axiosInstance.delete(`recipients/${id}/`);
  return useApiRequest(deleteRecipients);
  // const { isLoading, isError, data } = useQuery([], () => {}); 리액트 쿼리 사용 예정;;
};

// recipient를 POST할 때의 prop 설정.
// usePostRecipients.propTypes = {
//   name: PropTypes.string.isRequired,
//   backgroundColor: PropTypes.oneOf(["beige", "purple", "blue", "green"])
//     .isRequired,
// };
