import { useCallback, useEffect } from "react";
import { axiosInstance } from "../../components/util/axiosInstance";
import { useAsync } from "../../components/util/useAsync";

export const useGetPostsById = (recipentId) => {
  const queryString = `recipients/${recipentId}/messages/`;
  const getData = useCallback(
    () => axiosInstance.get(`${queryString}`),
    [queryString]
  );

  const { execute, loading, error, data } = useAsync(getData);

  useEffect(() => {
    execute();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [recipentId]);

  return { loading, error, data };
};

// 아래 두 코드는 useCallback 사용 여부가 다릅니다. 왜 그럴까요?

// const queryString = `recipients/${recipentId}/messages/`;

// 1번 (사용안함 => 작동도 안함)
// const getData = axiosInstance.get(`${queryString}`);

// 2번 (useCallback 사용 => 작동 함)
// const getData = useCallback(
//   () => axiosInstance.get(`${queryString}`),
//   [queryString]
// );
