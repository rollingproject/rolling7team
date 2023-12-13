import useAsync from "../../components/util/useAsync";
import axiosInstance from "../../components/util/axiosInstance";
import PropTypes from "prop-types";

export const usePostMessages = (
  id,
  sender,
  profileImageURL,
  relationship,
  content,
  font
) => {
  const postMessages = () =>
    axiosInstance.post(`recipients/${id}/messages/`, {
      sender,
      profileImageURL,
      relationship,
      content,
      font,
    });
  const { loading, error, data } = useAsync(postMessages);
  return { loading, error, data };
};

export const useGetMessagesList = (id) => {
  const getMessagesList = () =>
    axiosInstance.get(`recipients/${id}/messages/?limit=3&offset=1`);
  const { loading, error, data } = useAsync(getMessagesList);
  return { loading, error, data };
  // data에는 count, next, previous, results: message[]가 포함.
};

export const useDeleteMessages = (messageId) => {
  const deleteMessages = () => axiosInstance.delete(`messages/${messageId}/`);
  const { loading, error, data } = useAsync(deleteMessages);
  return { loading, error, data };
};

// message를 POST할 때의 prop 설정.
usePostMessages.propTypes = {
  sender: PropTypes.string.isRequired,
  profileImageURL: PropTypes.string.isRequired,
  relationship: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  font: PropTypes.string.isRequired,
};
