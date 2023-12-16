import { useNavigate, useParams } from "react-router-dom";
import {
  useDeleteMessages,
  useGetMessagesList,
} from "../post/data-access-post/messageApi";
import { useEffect, useState } from "react";
import { CardByIdList } from "../components/ui-card-by-id-list/CardByIdList";
import { CardById } from "../components/ui-card-by-id/CardById";
import styles from "./PostByIdEditPage.module.scss";
import { axiosInstance } from "../components/util/axiosInstance";

const SAMPLE = 1088;

export const PostByIdEditPage = ({ selectedId = SAMPLE }) => {
  const navigate = useNavigate();
  const { recipientId } = useParams();

  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const { loading, data } = useGetMessagesList(selectedId);
  const { results } = data || {};
  const sortedPosts = results?.sort((a, b) => b.createdAt - a.createdAt);

  useEffect(() => {
    if (results) {
      setPosts(sortedPosts);
      setIsLoading(loading);
    }
  }, [results, loading]);

  // const deleteMessage = useDeleteMessages(deleteId);

  const handleDelete = (postId) => {
    const response = axiosInstance.delete(`messages/${postId}/`);
    if (!response) return;

    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
  };

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <button className={styles.button}>삭제하기</button>
      </div>
      <CardByIdList>
        {posts?.map((post) => (
          <CardById
            key={post.id}
            {...post}
            showDeleteButton={true}
            onDelete={() => handleDelete(post.id)}
          />
        ))}
      </CardByIdList>
    </div>
  );
};

// 여기까지

// import { useGetPostsById } from "../post-by-id/data-access-post-by-id/useGetPostsById";
// import { CardByIdList } from "../components/ui-card-by-id-list/CardByIdList";
// import { CardById } from "../components/ui-card-by-id/CardById";
// import styles from "./PostByIdEditPage.module.scss";
// import { useParams, useNavigate } from "react-router-dom";
// import { useDeleteMessages } from "../post/data-access-post/messageApi";
// import { useCallback, useEffect, useState } from "react";

// const SAMPLE = 1088; // 임시 id로 나중에 list 페이지에서 prop을 받아야 함.

// export const PostByIdEditPage = ({ selectedId = SAMPLE }) => {
//   const navigate = useNavigate();
//   const { recipientId } = useParams();

//   const [posts, setPosts] = useState(null);
//   const postData = useGetPostsById(selectedId);
//   const handleLoad = useCallback(() => {
//     const { data } = postData;
//     const sortedPosts = data?.results.sort((a, b) => b.createdAt - a.createdAt);
//     setPosts(sortedPosts);
//   }, [postData]);

//   useEffect(() => {
//     handleLoad();
//   }, []);

//   const handleDeleteRecipient = () => {
//     navigate("/list");
//   };

//   const deletePostApi = useDeleteMessages();
//   const handleDeletePost = (postId) => {
//     const result = deletePostApi(postId);
//     if (!result) return;

//     setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
//   };

//   return (
//     <div className={styles.background}>
//       <div className={styles.container}>
//         <button className={styles.button} onClick={handleDeleteRecipient}>
//           삭제하기
//         </button>
//       </div>
//       <CardByIdList>
//         {posts?.map((post) => (
//           <CardById
//             key={post.id}
//             {...post}
//             showDeleteButton={true}
//             onDelete={handleDeletePost}
//           />
//         ))}
//       </CardByIdList>
//     </div>
//   );
// };

// const axiosInstance = axios.create({
//   baseURL: API_ADDRESS,
//   header: {
//     "Content-Type": "application/json",
//   },
// });

// const useApiRequest = (apiFunction) => {
//   const { loading, error, data } = useAsync(apiFunction);
//   return { loading, error, data };
//   // data에는 count, next, previous, results가 포함.
// };

// const useDeleteMessages = (messageId) => {
//   const deleteMessages = () => axiosInstance.delete(`messages/${messageId}/`);
//   return useApiRequest(deleteMessages);
// };

// 팀미팅때 물어볼 것
// const SAMPLE = 1088;

// export const PostByIdEditPage = (selectedId = SAMPLE) => {

//   const { loading, error, data } = useGetMessagesList(selectedId);

//   const { results } = data || {};

//   return <div>{results}</div>;
// };

// delete실패코드

// const deleteMessage = useDeleteMessages(deleteId);

// const handleDelete = (postId) => {
//   setDeleteId(postId);
//   deleteMessage();
//   setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
// };
