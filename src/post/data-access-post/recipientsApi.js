import useAsync from "../../components/util/useAsync";
import axiosInstance from "../../components/util/axiosInstance";
import PropTypes from "prop-types";

export const usePostRecipients = (name, backgroundColor) => {
  const postRecipients = () =>
    axiosInstance.post("recipients/", {
      name,
      backgroundColor,
    });
  const { loading, error, data } = useAsync(postRecipients);
  return { loading, error, data };
};

export const useGetRecipientsList = () => {
  const getRecipientsList = () =>
    axiosInstance.get(`recipients/?limit=2&offset=1&sort=like`);
  const { loading, error, data } = useAsync(getRecipientsList);
  return { loading, error, data };
  // data에는 count, next, previous, results: recipient[]가 포함.
};

export const useGetRecipient = (id) => {
  const getRecipient = () => axiosInstance.get(`recipients/${id}/`);
  const { loading, error, data } = useAsync(getRecipient);
  return { loading, error, data };
};

export const useDeleteRecipients = (id) => {
  const deleteRecipients = () => axiosInstance.delete(`recipients/${id}/`);
  const { loading, error, data } = useAsync(deleteRecipients);
  return { loading, error, data };
};

// recipient를 POST할 때의 prop 설정.
usePostRecipients.propTypes = {
  name: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
};
