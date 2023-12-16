import { useApiRequest } from "./useApiRequest";
import { axiosInstance } from "../../components/util/axiosInstance";
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
  const getRecipientsList = () => axiosInstance.get(`recipients/?limit=4&offset=4&sort=like`);
  return useApiRequest(getRecipientsList);
};

export const useGetRecipient = (id) => {
  const getRecipient = () => axiosInstance.get(`recipients/${id}/`);
  return useApiRequest(getRecipient);
};

export const useDeleteRecipients = (id) => {
  const deleteRecipients = () => axiosInstance.delete(`recipients/${id}/`);
  return useApiRequest(deleteRecipients);
  // 반복되서 실행될 수 있다. (수정사항) React query 사용
};

// recipient를 POST할 때의 prop 설정.
// usePostRecipients.propTypes = {
//   name: PropTypes.string.isRequired,
//   backgroundColor: PropTypes.string.oneOf(["beige", "purple", "blue", "green"])
//     .isRequired,
// };
// 런타임에서만 적용되나?
