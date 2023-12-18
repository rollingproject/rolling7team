import { useNavigate, useParams } from "react-router-dom";
import { useGetMessagesList } from "../post/data-access-post/messageApi";
import { useEffect, useState } from "react";
import { CardByIdList } from "../components/ui-card-by-id-list/CardByIdList";
import { CardById } from "../components/ui-card-by-id/CardById";
import styles from "./PostByIdEditPage.module.scss";
import { axiosInstance } from "../components/util/axiosInstance";

export const PostByIdEditPage = () => {
  const navigate = useNavigate();
  const { recipientId } = useParams();

  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { loading, data } = useGetMessagesList(recipientId);
  const { results } = data || {};
  const sortedPosts = results?.sort((a, b) => b.createdAt - a.createdAt);

  useEffect(() => {
    if (results) {
      setPosts(sortedPosts);
      setIsLoading(loading);
    }
  }, [results, loading]);

  const handleDeleteRecipient = (id) => {
    const response = axiosInstance.delete(`recipients/${id}/`);
    if (!response) return;

    navigate("/list");
  };

  const handleDeleteMessage = (postId) => {
    const response = axiosInstance.delete(`messages/${postId}/`);
    if (!response) return;

    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
  };

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <button
          className={styles.button}
          onClick={() => handleDeleteRecipient(recipientId)}
        >
          삭제하기
        </button>
      </div>
      <CardByIdList>
        {posts?.map((post) => (
          <CardById
            key={post.id}
            {...post}
            showDeleteButton={true}
            onDelete={() => handleDeleteMessage(post.id)}
          />
        ))}
      </CardByIdList>
    </div>
  );
};
