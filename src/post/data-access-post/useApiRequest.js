import useAsync from "../../components/util/useAsync";

export const useApiRequest = (apiFunction) => {
  const { loading, error, data } = useAsync(apiFunction);
  return { loading, error, data };
  // data에는 count, next, previous, results가 포함.
};
