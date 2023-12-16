import { useApiRequest } from "./useApiRequest";
import { axiosInstance } from "../../components/util/axiosInstance";
import PropTypes from "prop-types";

export const usePostMessages = (
  recipientId,
  sender,
  profileImageURL,
  relationship,
  content,
  font
) => {
  const postMessages = () =>
    axiosInstance.post(`recipients/${recipientId}/messages/`, {
      sender,
      profileImageURL,
      relationship,
      content,
      font,
    });
  return useApiRequest(postMessages);
};

export const useGetMessagesList = (recipientId) => {
  const getMessagesList = () =>
    axiosInstance.get(`recipients/${recipientId}/messages/`);
  return useApiRequest(getMessagesList);
};

export const useDeleteMessages = (messageId) => {
  const deleteMessages = () => axiosInstance.delete(`messages/${messageId}/`);
  return useApiRequest(deleteMessages);
};

//message를 POST할 때의 prop 설정.
// usePostMessages.propTypes = {
//   sender: PropTypes.string.isRequired,
//   profileImageURL: PropTypes.string.isRequired,
//   relationship: PropTypes.string.isRequired,
//   content: PropTypes.string.oneOf(["친구", "지인", "동료", "가족"]).isRequired,
//   font: PropTypes.string.oneOf([
//     "Noto Sans",
//     "Pretendard",
//     "나눔명조",
//     "나눔손글씨 손편지체",
//   ]).isRequired,
// };
