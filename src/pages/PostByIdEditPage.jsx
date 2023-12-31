import { useNavigate, useParams } from "react-router-dom";
import { useGetMessagesList } from "../post/data-access-post/messageApi.js";
import { useEffect, useState } from "react";
import { CardByIdList } from "../components/ui-card-by-id-list/CardByIdList.jsx";
import { CardById } from "../components/ui-card-by-id/CardById.jsx";
import styles from "./PostByIdEditPage.module.scss";
import { axiosInstance } from "../components/util/axiosInstance.js";
import { useGetRecipient } from "../post/data-access-post/recipientsApi.js";
import { changeBgColorEdit } from "../post-by-id-edit/ChangeBgColorEdit.js";

export const PostByIdEditPage = () => {
  const navigate = useNavigate();
  const { recipientId } = useParams();

  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { loading, data } = useGetMessagesList(recipientId);
  const { results } = data || {};
  const sortedPosts = results?.sort((a, b) => b.createdAt - a.createdAt);
  const { data: recipientData } = useGetRecipient(recipientId);
  const ChangeClassnameBg = changeBgColorEdit(recipientData);

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
    <div className={ChangeClassnameBg}>
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
