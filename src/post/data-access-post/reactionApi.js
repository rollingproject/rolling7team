import useApiRequest from "./useApiRequest";
import axiosInstance from "../../components/util/axiosInstance";
import PropTypes from "prop-types";

// 여기서 id는 reaction 객체에 대한 id.
export const usePostReactions = (id, recipient_id, emoji, type) => {
  const postReactions = () =>
    axiosInstance.post(`recipients/${recipient_id}/reactions/`, {
      id,
      emoji,
      type,
    });
  return useApiRequest(postReactions);
};

export const useGetReactionsList = (recipient_id) => {
  const getReactionsList = () =>
    axiosInstance.get(`recipients/${recipient_id}/reactions/?limit=2&offset=3`);
  return useApiRequest(getReactionsList);
};

// reaction을 POST할 때의 prop 설정.
usePostReactions.propTypes = {
  emoji: PropTypes.string.isRequired,
  type: PropTypes.string.oneOf(["increase", "decrease"]).isRequired,
};
