import { useParams } from "react-router-dom";
import { useGetMessagesList } from "../post/data-access-post/messageApi";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { CardByIdList } from "../components/ui-card-by-id-list/CardByIdList";
import { CardById } from "../components/ui-card-by-id/CardById";
import { CardButton } from "../post-by-id/ui-card-button/CardButton";
import { PostModal } from "../post-by-id/ui-post-modal/PostModal";
import styles from "./PostByIdEditPage.module.scss";

export const PostByIdPage = () => {
  const { recipientId } = useParams();

  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [clickedId, setClickedId] = useState(null);

  const { loading, data } = useGetMessagesList(recipientId);
  const sortedPosts = data?.results.sort((a, b) => b.createdAt - a.createdAt);

  const handleCardClick = (postId) => {
    setClickedId(postId);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  useEffect(() => {
    setPosts(sortedPosts);
    setIsLoading(loading);
  }, [sortedPosts, loading]);

  return (
    <div className={styles.background}>
      {modalVisible && (
        <PostModal
          post={posts.find((post) => post.id === clickedId)}
          onClose={handleCloseModal}
        />
      )}
      <CardByIdList>
        <Link to="/post">
          <CardButton />
        </Link>
        {posts?.map((post) => (
          <CardById
            key={post.id}
            {...post}
            onCardClick={() => handleCardClick(post.id)}
          />
        ))}
      </CardByIdList>
    </div>
  );
};
