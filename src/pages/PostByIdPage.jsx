import { useParams } from "react-router-dom";
import { useGetMessagesList } from "../post/data-access-post/messageApi";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { CardByIdList } from "../components/ui-card-by-id-list/CardByIdList";
import { CardById } from "../components/ui-card-by-id/CardById";
import { CardButton } from "../post-by-id/ui-card-button/CardButton";
import { PostModal } from "../post-by-id/ui-post-modal/PostModal";
import { useGetRecipient } from "../post/data-access-post/recipientsApi";
import { changeBgColor } from "../post-by-id/ChangeBgColor";

export const PostByIdPage = () => {
  const { recipientId } = useParams();
  const pathToPost = `/post/${recipientId}/message`;

  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [clickedId, setClickedId] = useState(null);
  const isMobile = window.innerWidth <= 768;

  const { loading, data } = useGetMessagesList(recipientId);
  const sortedPosts = data?.results.sort((a, b) => b.createdAt - a.createdAt);
  const { data: receipientData } = useGetRecipient(recipientId);

  const handleCardClick = (postId) => {
    setClickedId(postId);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const ChangeClassnameBg = changeBgColor(receipientData?.backgroundColor);

  useEffect(() => {
    setPosts(sortedPosts);
    setIsLoading(loading);
  }, [sortedPosts, loading]);

  return (
    <div className={ChangeClassnameBg}>
      {!isMobile && modalVisible && (
        <PostModal
          post={posts.find((post) => post.id === clickedId)}
          onClose={handleCloseModal}
        />
      )}
      <CardByIdList>
        <Link to={pathToPost}>
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
